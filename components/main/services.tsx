"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaPassport, FaPlane } from "react-icons/fa";
import { BiBrain, BiBuildings, BiMoney } from "react-icons/bi";

const statsData = [
  { number: "20+", label: "Countries" },
  { number: "120+", label: "Universities" },
  { number: "1000+", label: "Courses" },
];

const servicesData = [
  {
    title: "Assessment Based Career Counseling",
    description: "Expert guidance to help you choose the right career path based on your skills and interests.",
    icon: BiBrain,
  },
  {
    title: "University/Program Selection",
    description: "Personalized assistance in selecting the perfect university and program for your goals.",
    icon: FaGraduationCap,
  },
  {
    title: "Admission Procedures",
    description: "Complete support throughout the admission process from application to acceptance.",
    icon: BiBuildings,
  },
  {
    title: "Scholarships/Loan Assistance",
    description: "Guidance on available scholarships and assistance with education loan procedures.",
    icon: BiMoney,
  },
  {
    title: "Visa Documentation Guidance",
    description: "Expert assistance with visa applications and required documentation.",
    icon: FaPassport,
  },
  {
    title: "Travel & Accommodation",
    description: "Support with travel arrangements and finding suitable accommodation.",
    icon: FaPlane,
  },
];

export const Services = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 mb-20">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center justify-center p-8 bg-[#0300145e] rounded-2xl backdrop-blur-sm border border-[#7042f88b]"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {stat.number}
            </h2>
            <p className="text-gray-300 mt-2 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative p-8 bg-[#0300145e] rounded-2xl backdrop-blur-sm border border-[#7042f88b] hover:border-[#7042f8] transition-all"
          >
            <service.icon className="w-12 h-12 text-[#b49bff] mb-6 group-hover:text-[#7042f8] transition-colors" />
            
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#b49bff] transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 