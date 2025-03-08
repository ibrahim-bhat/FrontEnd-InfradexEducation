import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        preload="none"
        playsInline
        className="rotate-180 absolute top-[-340px] md:top-[-340px] left-0 w-full h-[100vh] md:h-full object-cover -z-20 scale-100 md:scale-100"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
