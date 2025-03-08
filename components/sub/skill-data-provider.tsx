"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Gi from "react-icons/gi";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";

type SkillDataProviderProps = {
  iconName: string;
  iconFamily: "Gi" | "Fa" | "Si";
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  iconName,
  iconFamily,
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

  const getIcon = () => {
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
