'use client';

import { motion } from "framer-motion";

export const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Outer rotating circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-purple-500"
        />
        
        {/* Inner rotating circle */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full border-t-2 border-l-2 border-cyan-500" />
        </motion.div>

        {/* Center dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}; 