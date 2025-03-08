'use client';

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Something went wrong!
        </h2>
        <p className="text-gray-400 mb-8 max-w-md">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </motion.div>
    </div>
  );
} 