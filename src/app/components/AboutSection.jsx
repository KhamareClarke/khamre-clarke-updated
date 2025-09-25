"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-col gap-4 text-base lg:text-lg">
        <li className="flex items-start gap-2"><span className="text-[#ffb700]">★</span><span><b className="text-[#ffb700]">AI Automation:</b> AI agents & workflows for growth.</span></li>
        <li className="flex items-start gap-2"><span className="text-[#ffb700]">★</span><span><b className="text-[#ffb700]">Web & App:</b> Scalable, high-converting platforms.</span></li>
        <li className="flex items-start gap-2"><span className="text-[#ffb700]">★</span><span><b className="text-[#ffb700]">Digital Marketing:</b> Funnels, ads & SEO that convert.</span></li>
        <li className="flex items-start gap-2"><span className="text-[#ffb700]">★</span><span><b className="text-[#ffb700]">CRM Systems:</b> Bookings & lead scoring that close deals.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#ffb700]">★</span><span><b className="text-[#ffb700]">Analytics:</b> Dashboards & insights for smart decisions.</span></li>
        <li className="flex items-start gap-2"><span className="text-[#ffb700]">★</span><span><b className="text-[#ffb700]">UI/UX Optimization:</b> Interfaces that drive action.</span></li>
        <li className="flex items-start gap-2"><span className="text-[#ffb700]">★</span><span><b className="text-[#ffb700]">Growth Consulting:</b> Systemize & scale your business.</span></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎓</span>
          <span><span className="font-bold text-[#ffb700]">BSc (Hons), Software Engineering</span> – Building technical foundations for scalable platforms.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎓</span>
          <span><span className="font-bold text-[#ffb700]">BSc (Hons), Digital Marketing</span> – Expertise in growth & customer acquisition.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎓</span>
          <span><span className="font-bold text-[#ffb700]">MSc, Computer Science with Artificial Intelligence</span> – Advanced AI applications for real-world business.</span>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span><span className="font-bold text-[#ffb700]">Level 4 Diploma</span> – Software Engineering</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span><span className="font-bold text-[#ffb700]">Level 4 Diploma</span> – Digital Marketing</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span><span className="font-bold text-[#ffb700]">Level 4 Diploma</span> – Cyber Security</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span><span className="font-bold text-[#ffb700]">Certified Google Ads & Analytics Specialist</span></span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span><span className="font-bold text-[#ffb700]">AI & Machine Learning Certifications</span> (Project-Based)</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span><span className="font-bold text-[#ffb700]">Professional Development</span> – SaaS Product Management (Ongoing)</span>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-24" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:gap-16 xl:px-16">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Image src="/images/about-image.png" width={500} height={500} alt="About Khamare Clarke" className="rounded-xl" />
          </motion.div>
          {/* Floating sparkle accent */}
          <motion.span
            className="absolute top-6 right-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 2, delay: 1.2, repeat: Infinity, repeatDelay: 5 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffb700"><circle cx="12" cy="12" r="3"/><g opacity="0.6"><circle cx="4" cy="12" r="1.3"/><circle cx="20" cy="12" r="1.3"/><circle cx="12" cy="4" r="1.3"/><circle cx="12" cy="20" r="1.3"/></g></svg>
          </motion.span>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-col items-center justify-center mb-6 mt-2 w-full text-center">
            <motion.span
              className="bg-transparent border border-[#ffb700] text-[#ffb700] text-xs font-semibold px-4 py-1 rounded-full mb-3 tracking-widest relative flex items-center justify-center overflow-visible"
              initial={{ y: 0 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: "loop" }}
            >
              ABOUT ME
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-center inline-block mx-auto">
              <span className="relative inline-block text-[#ffb700] pb-1">
                AI Solutions Architect
                <motion.span
                  className="absolute left-0 bottom-0 h-1 w-full rounded-full bg-[#ffb700]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, delay: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              <span className="text-white"> for UK Business Growth</span>
            </h2>
                      </div>
          <p className="text-base lg:text-lg">
            Khamare Clarke is recognized as one of the UK’s leading AI experts, delivering measurable results for businesses ready to leverage AI. For over a decade, he's been the secret weapon behind businesses transforming their ROI through strategic AI implementation. His approach focuses on clear, measurable results with systems that directly generate revenue and automate business operations.
          </p>
          <div className="flex flex-row justify-start mt-8 overflow-x-auto gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 min-h-[180px]">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/#contact"
              className="bg-[#ffb700] hover:bg-[#e6a600] text-[#222] font-semibold py-3 px-8 rounded-md shadow transition text-lg"
            >
              Let's Talk Leverage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
