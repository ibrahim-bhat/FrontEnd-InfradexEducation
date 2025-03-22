"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ApplyCounselor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    counselorType: "paid",
    preferredCounselor: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In a real app, you would send the data to your server here
    console.log("Form submitted:", formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#03001417] flex flex-col py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
      >
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-2">Apply for Counseling</h1>
        <p className="text-gray-400 mb-10">Fill out the form below to request a session with one of our counselors</p>
        
        {!isSubmitted ? (
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0A0520] rounded-xl p-8 border border-[#2A0E61] shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A0B3E] border border-purple-900/50 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A0B3E] border border-purple-900/50 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#1A0B3E] border border-purple-900/50 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="counselorType" className="block text-gray-300 mb-2">Counselor Type *</label>
                <select
                  id="counselorType"
                  name="counselorType"
                  value={formData.counselorType}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A0B3E] border border-purple-900/50 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                >
                  <option value="paid">On-Demand (Paid)</option>
                  <option value="free">Free Counselor</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="preferredCounselor" className="block text-gray-300 mb-2">Preferred Counselor</label>
              <select
                id="preferredCounselor"
                name="preferredCounselor"
                value={formData.preferredCounselor}
                onChange={handleChange}
                className="w-full bg-[#1A0B3E] border border-purple-900/50 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
              >
                <option value="">No preference</option>
                <option value="Er. Dawood Bin Aslan">Er. Dawood Bin Aslan</option>
                <option value="Abdul Basit Bedar">Abdul Basit Bedar</option>
                <option value="Emma Rodriguez">Emma Rodriguez</option>
                <option value="David Patel">David Patel</option>
                <option value="Aisha Khan">Aisha Khan</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#1A0B3E] border border-purple-900/50 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Tell us about your educational goals and how we can help..."
              ></textarea>
            </div>
            
            <div className="text-right">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold shadow-lg
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-purple-700 hover:to-blue-700'} transition-all duration-300`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </motion.button>
            </div>
          </motion.form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A0520] rounded-xl p-8 border border-[#2A0E61] shadow-xl text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-300 mb-6">
              Thank you for your interest in our counseling services. One of our team members will contact you within 24-48 hours to schedule your session.
            </p>
            
            <Link href="/">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Return to Home
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 