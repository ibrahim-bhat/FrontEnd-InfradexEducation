"use client";

import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const paidCounselors = [
  {
    name: "Er. Dawood Bin Aslan",
    title: "Life Coach",
    description: "",
    image: "/images/dawood-sir.jpg", 
    price: "$99 for 3 sessions",
    features: [
      "Priority Scheduling",
      "Personalized Guidance",
      "Application Review",
    ],
  },
  {
    name: "Abdul Basit Bedar",
    title: "Life Coach",
    description:
      "Former university admission officer with deep knowledge of scholarship opportunities and financial aid processes.",
    image: "/images/basit sir.jpg", 
    price: "$99 for 3 sessions",
    features: [
      "Strategic Planning",
      "Scholarship Guidance",
      "Interview Preparation",
    ],
  },
];

const freeCounselors = [
  {
    name: "Emma Rodriguez",
    title: "Study Abroad Specialist",
    description: "Specialized in guiding students through European university applications and visa requirements.",
    image: "/images/counselor3.jpg", // Replace with actual images
    features: ["Basic Consultation", "General Information", "Group Sessions"]
  },
  {
    name: "David Patel",
    title: "Career Advisor",
    description: "Helps students align their education choices with future career prospects and industry demands.",
    image: "/images/counselor4.jpg", // Replace with actual images
    features: ["Program Selection", "Career Mapping", "Document Checklist"]
  },
  {
    name: "Aisha Khan",
    title: "Visa Counselor",
    description: "Expert in immigration procedures and student visa applications for multiple countries.",
    image: "/images/counselor5.jpg", // Replace with actual images
    features: ["Visa Requirements", "Document Verification", "Form Assistance"]
  }
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
          Our Counselors
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-xl"
        >
          Expert Guidance for Your Educational Journey
        </motion.p>
      </div>

      {/* Premium Counselors */}
      <div className="w-full max-w-7xl px-4 mb-16">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8 pl-4 border-l-4 border-purple-600"
        >
          On-Demand Counselors
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paidCounselors.map((counselor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col h-full rounded-2xl bg-gradient-to-br from-[#2A0E61] to-[#12082F] border border-[#7042f88b]/50 overflow-hidden shadow-xl"
            >
              <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={counselor.image}
                    alt={counselor.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-white">
                    {counselor.name}
                  </h3>
                  <p className="text-purple-300 mb-2">{counselor.title}</p>
                  
                  <p className="text-gray-300">{counselor.description}</p>
                </div>
              </div>
              
              <div className="bg-[#1A0B3E] p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">{counselor.price}</span>
                  <span className="px-3 py-1 bg-purple-700 rounded-full text-white text-sm">Premium</span>
                </div>
                
                <ul className="mb-6">
                  {counselor.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 mb-2">
                      <FaCalendarCheck className="text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/apply-counselor" className="block w-full">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
                  >
                    Apply Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Free Counselors */}
      <div className="w-full max-w-7xl px-4">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8 pl-4 border-l-4 border-cyan-500"
        >
          Free Counselors
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {freeCounselors.map((counselor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col h-full rounded-xl bg-[#12082F] border border-[#2A0E61] overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={counselor.image}
                      alt={counselor.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
            </div>
            
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {counselor.name}
            </h3>
                    <p className="text-cyan-300 text-sm">{counselor.title}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{counselor.description}</p>
                
                <ul className="mb-5">
                  {counselor.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 mb-1 flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto p-4 pt-0">
                <Link href="/apply-counselor" className="block w-full">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Apply
                  </motion.button>
                </Link>
              </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}; 