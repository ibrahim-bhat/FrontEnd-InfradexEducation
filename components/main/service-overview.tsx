"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaPassport, FaGlobeAmericas } from "react-icons/fa";

const overviewServices = [
  {
    title: "University Admissions",
    description: "Expert guidance for university applications and admissions process worldwide.",
    icon: FaGraduationCap,
    color: "bg-[#6E44FF]",
  },
  {
    title: "Visa Assistance",
    description: "Complete support for student visa applications and documentation.",
    icon: FaPassport,
    color: "bg-[#6E44FF]",
  },
  {
    title: "Study Abroad",
    description: "Comprehensive counseling for international education opportunities.",
    icon: FaGlobeAmericas,
    color: "bg-[#6E44FF]",
  },
];

export const ServiceOverview = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-xl"
        >
          Comprehensive Educational Consulting Services
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {overviewServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#12082F] border border-[#2A0E61]"
          >
            <div className={`${service.color} p-4 rounded-full mb-6`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">
              {service.title}
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 