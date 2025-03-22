"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ServiceButton {
  id: number;
  title: string;
  icon: string;
}

export const HeroButtons = () => {
  const services = [
    {
      id: 1,
      title: "Strong Network & Partnerships",
      icon: "🌐",
    },
    {
      id: 2,
      title: "Application Strategy & University Selection",
      icon: "🎓",
    },
    {
      id: 3,
      title: "Financial Planning & Scholarships",
      icon: "💰",
    },
    {
      id: 4,
      title: "5D Counselling",
      icon: "🌟",
    },
    {
      id: 5,
      title: "Visa Guidance",
      icon: "✈️",
    },
  ];

  // Track window size for responsive adjustments
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      
      // Update width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Calculate responsive radius based on screen width
  const getRadius = () => {
    if (windowWidth < 640) { // sm
      return 120;
    } else if (windowWidth < 768) { // md
      return 150;
    } else {
      return 180;
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[450px] lg:h-[500px]">
      {/* Center button - always visible */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-[#2A0E61] to-[#162349] flex flex-col items-center justify-center text-white p-2 sm:p-3 shadow-lg shadow-purple-500/30 cursor-pointer border-4 border-[#7042f88b]/30">
          <span className="text-xl sm:text-2xl lg:text-3xl mb-1">🚀</span>
          <span className="text-center text-xs sm:text-sm lg:text-base font-bold">Infradex Education</span>
        </div>
      </motion.div>

      {/* Star points */}
      {services.map((service, index) => {
        // Calculate position based on index (star shape)
        const angle = (index * (2 * Math.PI / 5)) - Math.PI / 2; // Start from top
        const radius = getRadius(); // Responsive radius
        
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={service.id}
            className="absolute"
            style={{
              left: "calc(50% + " + x + "px)",
              top: "calc(50% + " + y + "px)",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut",
              delay: index * 0.1
            }}
          >
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 -translate-x-1/2 -translate-y-1/2 rounded-xl 
                        bg-gradient-to-br from-[#2A0E61]/40 to-[#162349]/40 
                        hover:from-[#522BB4]/50 hover:to-[#3A1B8C]/50
                        flex flex-col items-center justify-center text-white p-1.5 sm:p-2
                        shadow-lg hover:shadow-purple-500/30 cursor-pointer 
                        transform hover:scale-105 transition-all duration-300
                        border border-[#7042f88b]/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg sm:text-xl md:text-2xl text-purple-400/90 group-hover:text-purple-300 mb-0.5 sm:mb-1">{service.icon}</span>
              <span className="text-[8px] sm:text-[10px] md:text-xs text-center font-medium">
                {service.title}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connector lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7042f8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7042f8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {services.map((service, index) => {
          const angle = (index * (2 * Math.PI / 5)) - Math.PI / 2;
          const radius = getRadius();
          
          return (
            <line 
              key={`line-${service.id}`}
              x1="50%" 
              y1="50%" 
              x2={`calc(50% + ${Math.cos(angle) * radius}px)`}
              y2={`calc(50% + ${Math.sin(angle) * radius}px)`}
              stroke="url(#lineGradient)" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          );
        })}
      </svg>

      {/* Decorative stars */}
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;
        
        return (
          <motion.div 
            key={`star-${i}`}
            className="absolute rounded-full bg-white z-0"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              opacity: 0.4,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}; 