'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaHome, 
  FaInfoCircle, 
  FaPhoneAlt, 
  FaUserCog
} from "react-icons/fa";

import { NAV_LINKS } from "@/constants";

const navIcons = {
  "Home": FaHome,
  "About": FaInfoCircle,
  "Contact": FaPhoneAlt,
  "Login/Dashboard": FaUserCog
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-[65px] flex items-center justify-between m-auto px-[10px] md:px-[50px]">
        {/* Logo */}
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="Infradex Education"
            width={160}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Main Nav Items */}
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              const Icon = navIcons[item.title as keyof typeof navIcons];
              return (
                <a
                  key={item.title}
                  href={item.link}
                  className="text-gray-200 hover:text-purple-500 transition-colors flex items-center gap-2"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#0E0E10] border-t border-gray-800"
        >
          <div className="flex flex-col py-4">
            {NAV_LINKS.map((item) => {
              const Icon = navIcons[item.title as keyof typeof navIcons];
              return (
                <a
                  key={item.title}
                  href={item.link}
                  className="text-gray-200 hover:text-purple-500 transition-colors flex items-center gap-2 px-[50px] py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.title}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};