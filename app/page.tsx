import SmoothScroll from "@/components/SmoothScroll";
import ChapterNav from "@/components/ChapterNav";
import Preloader from "@/components/Preloader";
import Chapter01Horizon from "@/components/chapters/Chapter01Horizon";
import Chapter02House from "@/components/chapters/Chapter02House";
import Chapter03Creative from "@/components/chapters/Chapter03Creative";
import Chapter04Community from "@/components/chapters/Chapter04Community";
import Chapter05Expression from "@/components/chapters/Chapter05Expression";
import Chapter06Movement from "@/components/chapters/Chapter06Movement";
import Chapter07Future from "@/components/chapters/Chapter07Future";
import Chapter08Join from "@/components/chapters/Chapter08Join";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <ChapterNav />
      <main>
        <Chapter01Horizon />
        <Chapter02House />
        <Chapter03Creative />
        <Chapter04Community />
        <Chapter05Expression />
        <Chapter06Movement />
        <Chapter07Future />
        <Chapter08Join />
      </main>
    </SmoothScroll>
  );
}
