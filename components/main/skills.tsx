import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { SKILL_DATA } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {SKILL_DATA.map((skill, index) => (
          <SkillDataProvider
            key={skill.skill_name}
            iconName={skill.iconName}
            iconFamily={skill.iconFamily}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-[130vh] md:h-auto scale-70 md:scale-100 object-cover"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
            aria-hidden="true"
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
