"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserGraduate, FaUniversity, FaMoneyCheckAlt, FaChalkboardTeacher, FaPassport } from "react-icons/fa";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-20 mt-20 lg:mt-40 w-full z-[20]"
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
        <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative max-w-[90vw] lg:max-w-full">
          {/* Top button */}
          <motion.button
            variants={slideInFromTop}
            className="col-start-2 group bg-gradient-to-br from-[#2A0E61]/40 to-[#162349]/40 hover:from-[#522BB4]/50 hover:to-[#3A1B8C]/50 text-white w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl border border-[#7042f88b]/50 backdrop-blur-sm flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 p-2 md:p-3 lg:p-4 text-center gap-2 md:gap-3"
          >
            <FaUserGraduate className="text-xl md:text-2xl text-purple-400/90 group-hover:text-purple-300" />
            <span className="text-[10px] md:text-xs lg:text-sm font-medium">Strong network and partnerships</span>
          </motion.button>

          {/* Middle row buttons */}
          <motion.button
            variants={slideInFromLeft(0.5)}
            className="group bg-gradient-to-br from-[#2A0E61]/40 to-[#162349]/40 hover:from-[#522BB4]/50 hover:to-[#3A1B8C]/50 text-white w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl border border-[#7042f88b]/50 backdrop-blur-sm flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 p-2 md:p-3 lg:p-4 text-center gap-2 md:gap-3"
          >
            <FaUniversity className="text-xl md:text-2xl text-purple-400/90 group-hover:text-purple-300" />
            <span className="text-[10px] md:text-xs lg:text-sm font-medium">Application Strategy & University Selection</span>
          </motion.button>
          <motion.button
            variants={slideInFromTop}
            className="group bg-gradient-to-br from-[#2A0E61]/40 to-[#162349]/40 hover:from-[#522BB4]/50 hover:to-[#3A1B8C]/50 text-white w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl border border-[#7042f88b]/50 backdrop-blur-sm flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 p-2 md:p-3 lg:p-4 text-center gap-2 md:gap-3"
          >
            <FaMoneyCheckAlt className="text-xl md:text-2xl text-purple-400/90 group-hover:text-purple-300" />
            <span className="text-[10px] md:text-xs lg:text-sm font-medium">Financial Planning & Scholarships</span>
          </motion.button>
          <motion.button
            variants={slideInFromRight(0.5)}
            className="group bg-gradient-to-br from-[#2A0E61]/40 to-[#162349]/40 hover:from-[#522BB4]/50 hover:to-[#3A1B8C]/50 text-white w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl border border-[#7042f88b]/50 backdrop-blur-sm flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 p-2 md:p-3 lg:p-4 text-center gap-2 md:gap-3"
          >
            <FaChalkboardTeacher className="text-xl md:text-2xl text-purple-400/90 group-hover:text-purple-300" />
            <span className="text-[10px] md:text-xs lg:text-sm font-medium">5D counselling</span>
          </motion.button>

          {/* Bottom button */}
          <motion.button
            variants={slideInFromBottom}
            className="col-start-2 group bg-gradient-to-br from-[#2A0E61]/40 to-[#162349]/40 hover:from-[#522BB4]/50 hover:to-[#3A1B8C]/50 text-white w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl border border-[#7042f88b]/50 backdrop-blur-sm flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 p-2 md:p-3 lg:p-4 text-center gap-2 md:gap-3"
          >
            <FaPassport className="text-xl md:text-2xl text-purple-400/90 group-hover:text-purple-300" />
            <span className="text-[10px] md:text-xs lg:text-sm font-medium">Visa Guidance</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add slideInFromBottom animation
const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};
