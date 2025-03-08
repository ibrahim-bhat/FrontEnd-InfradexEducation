"use client";

import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0E0E10] text-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 - Logo & Description */}
        <div className="space-y-6">
          <Image
            src="/logo.png"
            alt="Infradex Education"
            width={160}
            height={70}
            className="mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering students to achieve their academic dreams through expert guidance and comprehensive support in international education.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Services", "Testimonials", "Contact"].map((link) => (
              <li key={link}>
                <Link href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-purple-500 transition-colors">
                  {link}
                </Link>
              </li>
              ))}
          </ul>
            </div>

        {/* Column 3 - Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Our Services</h3>
          <ul className="space-y-3">
            {[
              "5D Career Counseling",
              "University Admissions",
              "Visa Assistance",
              "Test Preparation",
              "Immigration Services"
            ].map((service) => (
              <li key={service}>
                <Link href={`#${service.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-purple-500 transition-colors">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <HiLocationMarker className="text-purple-500 text-xl mt-1" />
              <p className="text-gray-400">
                Sallar Complex ,Saraibal<br />
                Srinagar, J&K 190001
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-purple-500" />
              <div className="text-gray-400">
                <p>+91 979-6931-231</p>
                <p>+91 990-6931-231</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-purple-500" />
              <div className="text-gray-400">
                <p>connect@infradex.in</p>
                <p>grievance@infradex.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="max-w-7xl mx-auto px-4 mt-16 pb-8 border-b border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-2xl font-semibold text-white">Subscribe to Our Newsletter</h3>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#1E1E24] text-gray-300 px-4 py-2 rounded-l-md w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-500 text-white px-6 py-2 rounded-r-md hover:bg-purple-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Infradex Education. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">
              FAQ
            </Link>
        </div>
      </div>
    </div>
    </footer>
  );
};
