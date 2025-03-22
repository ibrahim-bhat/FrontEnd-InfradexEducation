"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { HeroButtons } from "../main/hero-buttons";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-20 pt-16 sm:pt-14 md:pt-10 lg:pt-8 pb-16 sm:pb-20 md:pb-24 lg:pb-32 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Infradex Education
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6-2 w-auto h-auto mr-0"
        >
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-[50px] md:mt-0">
            Bridge{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              to Academic
            </span>{" "}
            Excellence.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Study at the location of your Dreams with Our Professional Guidance.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="https://ie.infradexedu.in/about.php"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          About Us
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        {/* Star-shaped rotating buttons */}
        <HeroButtons />
      </motion.div>
    </motion.div>
  );
};

