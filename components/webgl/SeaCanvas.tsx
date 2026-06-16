"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Mediterranean sea — a full-screen GLSL fragment shader (raw Three.js, see
 * project-memory/DECISIONS.md D-001): horizon haze, layered wave ripples, a warm
 * sun-glitter column and caustic shimmer. Pointer adds gentle parallax. The render
 * loop pauses when off-screen and is skipped entirely under reduced motion / no-WebGL,
 * where a CSS gradient fallback stands in.
 */

const FRAG = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2  uRes;
uniform vec2  uPointer;
varying vec2  vUv;

// cheap hash + value-noise fbm
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x),
             mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i=0;i<5;i++){ v += a*noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = vUv;
  float aspect = uRes.x / max(uRes.y, 1.0);
  vec2 p = vec2(uv.x*aspect, uv.y);
  float t = uTime * 0.06;

  // palette
  vec3 skyTop   = vec3(0.031, 0.105, 0.156);  // deep navy
  vec3 skyHaze  = vec3(0.090, 0.300, 0.380);   // warm sea haze
  vec3 seaDeep  = vec3(0.027, 0.090, 0.140);
  vec3 seaMid   = vec3(0.055, 0.353, 0.470);
  vec3 seaHi    = vec3(0.110, 0.560, 0.690);
  vec3 sun      = vec3(0.94, 0.74, 0.46);      // copper sun glitter

  float horizon = 0.60 + uPointer.y * 0.02;

  vec3 col;
  if(uv.y > horizon){
    // sky: navy to warm haze at the horizon
    float g = (uv.y - horizon) / (1.0 - horizon);
    col = mix(skyHaze, skyTop, pow(g, 0.8));
    // soft sun bloom near horizon centre
    float d = distance(uv, vec2(0.5 + uPointer.x*0.04, horizon));
    col += sun * smoothstep(0.42, 0.0, d) * 0.18;
  } else {
    // sea: perspective compression toward the horizon
    float depth = (horizon - uv.y) / horizon;          // 0 at horizon -> 1 near
    vec2 sp = vec2(p.x, 1.0/(depth*3.2 + 0.18));
    sp.x += uPointer.x * 0.05;

    float waves = fbm(sp*3.0 + vec2(t*2.0, t*3.0));
    waves += 0.5*fbm(sp*7.0 - vec2(t*3.0, t*1.5));
    float caustic = pow(abs(sin(waves*6.2831 + uTime*0.5)), 3.0);

    col = mix(seaDeep, seaMid, smoothstep(0.0, 0.7, depth));
    col = mix(col, seaHi, caustic * (0.35 + 0.4*depth));

    // sun-glitter column down the centre
    float glint = smoothstep(0.16, 0.0, abs(uv.x - (0.5 + uPointer.x*0.04)));
    col += sun * glint * caustic * (1.0 - depth) * 0.9;

    // foam shimmer right at the horizon line
    col += vec3(0.9) * smoothstep(0.02, 0.0, horizon - uv.y) * 0.25;
  }

  // vignette + subtle grain
  col *= 1.0 - 0.35*distance(uv, vec2(0.5));
  col += (hash(uv*uRes.xy + t)-0.5)*0.015;

  gl_FragColor = vec4(col, 1.0);
}
`;

const VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
`;

export default function SeaCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setFailed(true);
      return;
    }

    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    } catch {
      setFailed(true);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.cssText =
      "width:100%;height:100%;display:block;";

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      uPointer: { value: new THREE.Vector2(0, 0) },
    };

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms,
      })
    );
    scene.add(mesh);

    const pointerTarget = new THREE.Vector2(0, 0);
    const onPointer = (e: PointerEvent) => {
      pointerTarget.set(
        (e.clientX / window.innerWidth - 0.5) * 2,
        -(e.clientY / window.innerHeight - 0.5) * 2
      );
    };
    window.addEventListener("pointermove", onPointer);

    const onResize = () => {
      const w = mount.clientWidth,
        h = mount.clientHeight;
      renderer.setSize(w, h);
      uniforms.uRes.value.set(w, h);
    };
    window.addEventListener("resize", onResize);

    // pause when scrolled off-screen
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => (visible = entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(mount);

    let raf = 0;
    let elapsed = 0;
    const clock = new THREE.Clock();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      // Always consume the frame delta so it stays small; only advance the
      // shader clock while visible, so time truly freezes off-screen (no jump).
      const delta = clock.getDelta();
      if (!visible) return;
      elapsed += delta;
      uniforms.uTime.value = elapsed;
      uniforms.uPointer.value.lerp(pointerTarget, 0.04);
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount)
        mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 h-full w-full">
      {failed && (
        // Fallback: static Mediterranean gradient (reduced motion / no WebGL)
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,#08293b 0%,#0E5A78 58%,#1C7FA8 62%,#0b3346 100%)",
          }}
        />
      )}
    </div>
  );
}
