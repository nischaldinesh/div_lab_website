import Hero from "@/components/Hero";
import LabIntro from "@/components/LabIntro";
import News from "@/components/News";
import NewsTicker from "@/components/NewsTicker";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <NewsTicker />
      <Hero />
      <LabIntro />
      <News />
    </div>
  );
}
