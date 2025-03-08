"use client";

import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Courses
      </h1>
      <div className="h-full w-full flex flex-col items-center justify-center px-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Discover our comprehensive range of courses designed to help you achieve your academic goals. 
            From undergraduate to postgraduate programs, we offer diverse educational opportunities across multiple disciplines.
          </motion.div>
        </div>

        <motion.a
          href="https://ie.infradexedu.in/courses.php"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-8 py-3 mt-10 button-primary text-center text-white cursor-pointer rounded-lg hover:bg-purple-600 transition-all"
        >
          Explore All Courses
        </motion.a>
      </div>
    </div>
  );
};
