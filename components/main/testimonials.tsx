"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaUserGraduate } from "react-icons/fa";

const testimonials = [
  {
    name: "Muhammad Ibrahim",
    role: "International Student",
    university: "University of Dhaka, Bangladesh",
    quote: "The guidance I received was invaluable. They helped me navigate through the complex admission process and made my dream of studying abroad a reality.",
  },
  {
    name: "Junaid",
    role: "Graduate Student",
    university: "Moscow State University, Russia",
    quote: "Their expertise in visa assistance made the entire process smooth. I highly recommend their services to anyone looking to study abroad.",
  },
  {
    name: "Haroon Rashid",
    role: "Undergraduate Student",
    university: "University of Tehran, Iran",
    quote: "From university selection to accommodation arrangements, they provided comprehensive support throughout my journey.",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
          Student Testimonials
        </h2>
        <p className="text-gray-400 text-xl">
          What Our Students Say About Us
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4 relative z-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative flex flex-col p-8 bg-[#0E0E10] rounded-2xl h-full">
              <FaQuoteLeft className="text-purple-500 text-4xl mb-6" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="flex items-center">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <FaUserGraduate className="text-purple-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-purple-500 text-sm">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(10px, -10px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}; 