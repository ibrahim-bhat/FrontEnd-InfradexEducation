"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Gi from "react-icons/gi";
import * as Fa from "react-icons/fa";
import Link from "next/link";

type BaseSkillProps = {
  name: string;
  width: number;
  height: number;
  index: number;
};

type IconSkillProps = BaseSkillProps & {
  iconName: string;
  iconFamily: "Gi" | "Fa";
  src?: never;
};

type ImageSkillProps = BaseSkillProps & {
  src: string;
  iconName?: never;
  iconFamily?: never;
};

type SkillDataProviderProps = IconSkillProps | ImageSkillProps;

const getCountryLink = (countryName: string): string => {
  const baseUrl = "https://ie.infradexedu.in/usp/countries-college";
  const countryMap: { [key: string]: string } = {
    "USA": "usa.php",
    "UK": "uk.php",
    "Germany": "germany.php",
    "Australia": "australia.php",
    "New Zealand": "newzealand.php",
    "Malaysia": "malaysia.php",
    "UAE": "uae.php",
    "Poland": "poland.php",
    "Europe": "europe.php",
    "Canada": "canada.php",
    "Iran": "iran.php",
    "Austria": "austria.php",
    "Bangladesh": "bangladesh.php",
    "India": "india.php",
    "Bhutan": "bhutan.php",
    "Japan": "japan.php",
    "China": "china.php",
    "Uzbekistan": "uzbekistan.php",
    "Kazakhstan": "kazakhstan.php",
    "Kyrgyzstan": "kyrgyzstan.php",
    "Russia": "russia.php",
    "Timor-Leste": "timor-leste.php",
    "Egypt": "egypt.php"
  };
  
  // If country is not in the map, use a lowercase, hyphenated version of the name
  const formattedCountry = countryMap[countryName] || 
    `${countryName.toLowerCase().replace(/\s+/g, '-')}.php`;
  
  return `${baseUrl}/${formattedCountry}`;
};

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
  };

  const animationDelay = 0.1;

  const getIcon = () => {
    if (src) {
      return (
        <Image
          src={src}
          alt={name}
          width={width}
          height={height}
          className="object-contain"
        />
      );
    }

    if (iconName && iconFamily) {
      let Icon;
      
      switch (iconFamily) {
        case "Gi":
          Icon = (Gi as any)[iconName];
          break;
        case "Fa":
          Icon = (Fa as any)[iconName];
          break;
        default:
          return null;
      }

      if (!Icon) {
        console.warn(`Icon not found: ${iconName} in family ${iconFamily}`);
        return null;
      }

      return <Icon size={width} />;
    }

    return null;
  };

  const icon = getIcon();
  if (!icon && !src) {
    console.warn(`No valid icon or image source for ${name}`);
    return null;
  }

  return (
    <Link 
      href={getCountryLink(name)} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block cursor-pointer"
      onClick={(e) => {
        // Ensure the click propagates and logs for debugging
        console.log(`Clicked on ${name} link`);
      }}
    >
      <motion.div
        ref={ref}
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative group cursor-pointer"
        style={{
          transition: `all 0.3s ease`,
          transitionDelay: `${index * animationDelay}s`,
        }}
      >
        <motion.div
          className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#2A0E61]/30 to-[#162349]/30 
                    rounded-xl border border-[#7042f88b]/50 backdrop-blur-sm hover:from-[#522BB4]/40 hover:to-[#3A1B8C]/40
                    transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40
                    relative group overflow-hidden z-10 pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="text-white group-hover:text-cyan-300 transition-colors duration-300"
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1,
              }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
            <p className="text-gray-200 text-sm mt-3 group-hover:text-white font-medium transition-colors duration-300">
              {name}
            </p>
            
            {/* Visual indicator that this is a link */}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-300 
                          group-hover:w-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </div>
          
          {/* Enhanced glowing effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        
          {/* Subtle highlight on top */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />
        </motion.div>
      </motion.div>
    </Link>
  );
};
