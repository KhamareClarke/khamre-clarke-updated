"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web & App Development",
    description: "High-converting, lightning-fast websites and apps engineered for scale, credibility, and effortless lead generation.",
    icon: "💻",
  },
  {
    title: "Digital Marketing",
    description: "ROI-driven funnels, paid ads, CRM, and analytics that turn clicks into loyal, high-value clients—on autopilot.",
    icon: "📈",
  },
  {
    title: "AI Integrations & Automation",
    description: "Custom AI agents, voice bots, and workflow automations that multiply your revenue, slash manual work, and give you a true unfair advantage.",
    icon: "🤖",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#111015] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8 mt-4 w-full text-center">
            <motion.span
              className="bg-transparent border border-[#ffb700] text-[#ffb700] text-xs font-semibold px-4 py-1 rounded-full mb-3 tracking-widest uppercase relative flex items-center justify-center overflow-visible"
              initial={{ y: 0 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, repeatType: "loop" }}
            >
              SERVICES
              {/* Gold sparkle accent */}
              <motion.span
                className="absolute -top-2 -right-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.1, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 1.1, delay: 0.7, repeat: Infinity, repeatDelay: 3.2 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffb700"><circle cx="12" cy="12" r="2.2"/><g opacity="0.6"><circle cx="4" cy="12" r="1"/><circle cx="20" cy="12" r="1"/><circle cx="12" cy="4" r="1"/><circle cx="12" cy="20" r="1"/></g></svg>
              </motion.span>
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center relative mb-4">
              <span className="text-[#ffb700] relative">
                AI-Powered
                <motion.span
                  className="absolute left-0 -bottom-1 h-2 w-full rounded-full bg-[#ffb700]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, delay: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              <span className="text-white"> Business Systems</span>
            </h2>
            <p className="text-[#ADB7BE] text-center mt-5 text-sm md:text-base max-w-2xl">Custom engineered AI solutions that turn your business into a predictable, scalable growth machine working 24/7/365.</p>
          </div>
        {/* Floating sparkle accent above grid */}
        <motion.span
          className="flex justify-center mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffb700"><circle cx="12" cy="12" r="3"/><g opacity="0.6"><circle cx="4" cy="12" r="1.3"/><circle cx="20" cy="12" r="1.3"/><circle cx="12" cy="4" r="1.3"/><circle cx="12" cy="20" r="1.3"/></g></svg>
        </motion.span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-[#181818] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-start text-left border border-[#222] hover:scale-[1.02] transition mb-6 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
            >
              <div className="flex items-center mb-2">
                <motion.span
                  className="text-3xl mr-3"
                  style={{color:'#ffb700'}}
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.icon}
                </motion.span>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-[#ADB7BE] mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <a
            href="/#contact"
            className="bg-[#ffb700] hover:bg-[#e6a600] text-[#222] font-semibold py-4 px-10 rounded-md shadow transition text-lg"
          >
            Book a Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
