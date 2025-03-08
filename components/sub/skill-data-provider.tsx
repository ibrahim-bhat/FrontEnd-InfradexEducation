"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Gi from "react-icons/gi";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";

type BaseSkillProps = {
  name: string;
  width: number;
  height: number;
  index: number;
};

type IconSkillProps = BaseSkillProps & {
  iconName: string;
  iconFamily: "Gi" | "Fa" | "Si";
  src?: never;
};

type ImageSkillProps = BaseSkillProps & {
  src: string;
  iconName?: never;
  iconFamily?: never;
};

type SkillDataProviderProps = IconSkillProps | ImageSkillProps;

export const SkillDataProvider = ({
  iconName,
  iconFamily,
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  // If src is provided, render image
  if (src) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className="flex flex-col items-center justify-center"
      >
        <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
          <Image 
            src={src} 
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="hover:scale-105 transition-transform object-contain"
          />
        </div>
        <p className="text-white text-sm mt-2">{name}</p>
      </motion.div>
    );
  }

  // If iconName and iconFamily are provided, render icon
  const getIcon = () => {
    if (!iconName || !iconFamily) return null;
    switch (iconFamily) {
      case "Gi":
        return Gi[iconName as keyof typeof Gi];
      case "Fa":
        return Fa[iconName as keyof typeof Fa];
      case "Si":
        return Si[iconName as keyof typeof Si];
      default:
        return null;
    }
  };

  const Icon = getIcon();

  if (!Icon) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center justify-center"
    >
      <Icon size={width} title={name} className="text-white hover:text-purple-500 transition-colors" />
      <p className="text-white text-sm mt-2">{name}</p>
    </motion.div>
  );
};
