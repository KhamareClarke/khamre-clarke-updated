"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FaBriefcase, FaPoundSign, FaRobot, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUpNumber from "./CountUpNumber";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    icon: <FaBriefcase className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#ffb700] drop-shadow-glow" />,
    metric: "Businesses Automated",
    value: "50",
    postfix: "+",
  },
  {
    icon: <FaPoundSign className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#ffb700] drop-shadow-glow" />,
    metric: "Revenue Unlocked",
    value: "12,000,000",
    prefix: "£",
    postfix: "+",
  },
  {
    icon: <FaRobot className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#ffb700] drop-shadow-glow" />,
    metric: "AI Workflows Deployed",
    value: "120",
    postfix: "+",
  },
  {
    icon: <FaStar className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#ffb700] drop-shadow-glow" />,
    metric: "Client Retention Rate",
    value: "100",
    postfix: "%",
  },
];

import { useEffect, useState } from "react";

const AchievementsSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <motion.div
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Floating sparkle accent above achievements */}
      <div className="relative">
        <span className="absolute left-1/2 -translate-x-1/2 -top-8">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" opacity="0.6">
            <circle cx="4" cy="12" r="1.3" fill="#ffb700" />
            <circle cx="20" cy="12" r="1.3" fill="#ffb700" />
            <circle cx="12" cy="4" r="1.3" fill="#ffb700" />
            <circle cx="12" cy="20" r="1.3" fill="#ffb700" />
          </svg>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {achievementsList.map((achievement, index) => {
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-[#181818] rounded-xl shadow-lg p-4 sm:p-6 w-full transition-transform hover:scale-105 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    whileHover={{ scale: 1.18, filter: 'drop-shadow(0 0 8px #ffb700)' }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="mb-2"
                  >
                    {achievement.icon}
                  </motion.span>
                  <div className={`font-black text-[#ffb700] drop-shadow-gold mb-2 flex items-baseline justify-center gap-0.5 whitespace-nowrap ${achievement.value === "12,000,000" ? "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" : "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"}`}>
                    <span>{achievement.prefix}</span>
                    <CountUpNumber value={achievement.value} />
                    <span>{achievement.postfix}</span>
                  </div>
                  <p className="text-[#ADB7BE] text-sm sm:text-base text-center">{achievement.metric}</p>
                </motion.div>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementsSection;
