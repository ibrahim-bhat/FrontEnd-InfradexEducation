import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen min-h-[650px] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        preload="none"
        playsInline
        className="rotate-180 absolute top-[-280px] sm:top-[-310px] md:top-[-380px] lg:top-[-380px] left-0 w-full h-[100vh] md:h-full object-cover -z-20 scale-100 md:scale-100"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
