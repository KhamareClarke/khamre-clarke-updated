"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-[#111015]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="mb-4 flex items-center gap-2 relative">
                        {/* Subtle AI/tech SVG background graphic */}
            <motion.span
              className="absolute -z-10 left-[-40px] top-[-30px] pointer-events-none select-none"
              initial={{ opacity: 0.12 }}
              animate={{ opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
            >
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none"><ellipse cx="60" cy="40" rx="55" ry="28" fill="#ffb700" opacity="0.12"/><ellipse cx="60" cy="40" rx="40" ry="18" fill="#fff" opacity="0.09"/></svg>
            </motion.span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2 mb-6">
  <span className="inline-block bg-[#ffb700] text-[#222] font-bold py-1 px-3 rounded-md text-xs sm:text-sm uppercase tracking-wider shadow-sm text-center">The UK&apos;s Leading AI Business Growth Architect</span>
</div>
<h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-3" style={{fontFamily:'Montserrat, sans-serif', letterSpacing:'-0.03em'}}>
  KHAMARE <span className="text-[#ffb700]">CLARKE</span>
</h1>
<p className="text-lg sm:text-xl max-w-2xl font-medium mb-1" style={{fontFamily:'Montserrat, sans-serif'}}>
  <span className="text-[#ffb700] font-bold">I don’t sell services. I build leverage.</span>
</p>
<p className="text-[#ADB7BE] text-base sm:text-lg max-w-2xl font-normal mb-6" style={{fontFamily:'Montserrat, sans-serif'}}>
  I design AI-powered systems, custom websites, and apps that automate growth, scale revenue, and give ambitious businesses the unfair advantage to dominate their markets.
</p>
          <div className="mt-4 mb-8 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ffb700] tracking-tight flex items-center justify-center lg:justify-start gap-3">
  <TypeAnimation
    sequence={[
      "Apps 💻",
      1200,
      "AI Automation 🤖",
      1200,
      "Paid Ads 📈",
      1200,
      "Websites 🌐",
      1200,
      "Chatbots 💬",
      1200,
      "Funnels 🛒",
      1200,
      "Consulting 🧠",
      1200,
      "Branding 🎨",
      1200
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>
<motion.div
  className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 w-full"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.5 }}
>
  <Link
    href="https://calendly.com/khamareclarke/new-meeting"
    target="_blank"
    rel="noopener noreferrer"
    className="relative bg-[#ffb700] text-[#222] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg lg:text-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#ffb700]/60 hover:shadow-xl hover:scale-105 overflow-hidden group w-full sm:w-auto text-center"
  >
    <span className="relative z-10">Book Your Free Strategy Call</span>
    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition bg-[#ffb700] blur-[6px] animate-pulse" style={{ boxShadow: '0 0 16px 8px #ffb700' }}></span>
  </Link>
  <Link
    href="/services"
    className="border-2 border-[#ffb700] text-[#ffb700] font-semibold py-3 px-6 rounded-md hover:bg-[#ffb700] hover:text-[#222] transition text-base w-full sm:w-auto text-center"
  >
    View Services
  </Link>
</motion.div>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            {/* Animated Social Icons */}
            {[
              { href: "https://www.linkedin.com/in/khamareclarke", label: "LinkedIn", icon: <FaLinkedin /> },
              { href: "https://www.instagram.com/YOUR_INSTAGRAM", label: "Instagram", icon: <FaInstagram /> },
              { href: "https://www.facebook.com/YOUR_FACEBOOK", label: "Facebook", icon: <FaFacebook /> },
              { href: "https://www.tiktok.com/@YOUR_TIKTOK", label: "TikTok", icon: <FaTiktok /> },
            ].map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffb700] text-3xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 + idx * 0.1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.93 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
                  </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 place-self-center order-1 lg:order-2"
        >
          <div className="rounded-full w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] xl:w-[520px] xl:h-[520px] relative shadow-2xl border-4 border-[#ffb700] bg-[#111015] flex items-center justify-center ring-4 ring-[#ffb700]/30 mx-auto">
            <Image
              src="/images/hero-image.png"
              alt="Khamare Clarke - AI Automation Expert and Business Growth Architect"
              className="w-full h-full object-cover rounded-full"
              width={520}
              height={520}
              priority
            />
            {/* Floating sparkle accent */}
            <motion.span
              className="absolute top-5 right-8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 1.8, delay: 1, repeat: Infinity, repeatDelay: 4 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffb700"><circle cx="12" cy="12" r="3.5"/><g opacity="0.6"><circle cx="4" cy="12" r="1.6"/><circle cx="20" cy="12" r="1.6"/><circle cx="12" cy="4" r="1.6"/><circle cx="12" cy="20" r="1.6"/></g></svg>
            </motion.span>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
