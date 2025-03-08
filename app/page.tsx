import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { ServiceOverview } from "@/components/main/service-overview";
import { Services } from "@/components/main/services";
import { Skills } from "@/components/main/skills";
import { Testimonials } from "@/components/main/testimonials";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <ServiceOverview />
        <Testimonials />
      </div>
    </main>
  );
}
