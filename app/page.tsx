import Hero from "@/components/Hero";
import LabIntro from "@/components/LabIntro";
import News from "@/components/News";

export default function HomePage() {
  return (
    <div className="space-y-6 p-8">
      <Hero />
      <LabIntro />
      <News />
    </div>
  );
}
