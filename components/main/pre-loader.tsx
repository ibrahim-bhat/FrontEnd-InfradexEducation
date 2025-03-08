"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Ensure minimum 3 seconds display time
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setIsLoading(false), 1000);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0E0E10]"
      >
        <div className="relative">
          {/* Outer rotating circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border-t-4 border-r-4 border-purple-500"
          />
          
          {/* Inner rotating circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-24 h-24 rounded-full border-t-4 border-l-4 border-cyan-500" />
          </motion.div>

          {/* Center pulsing dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-max"
          >
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
              >
                Loading
              </motion.span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [-2, 2, -2] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decorative particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 0.8, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute w-1 h-1 bg-purple-500 rounded-full"
              style={{
                left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; 