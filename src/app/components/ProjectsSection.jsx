"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import CTAButton from "./CTAButton";
import { Dialog } from '@headlessui/react';

const caseStudiesData = [
  {
    id: 1,
    title: "AI Automation for Lead Generation",
    description: "How I built a custom AI agent for MyApproved.com that qualified leads 24/7 and booked sales calls automatically, increasing conversions by 40%.",
    image: "/images/projects/1.png",
    tag: ["All", "AI"],
    liveUrl: "https://myapproved.com",
    details: "This case study covers the full workflow for MyApproved.com: from initial client pain points, through custom GPT-powered agent build, CRM integration, and measurable business results (40% more leads booked). Includes tech stack, timeline, and business impact.",
    metrics: [
      { icon: "💼", label: "Leads Booked", value: "+40%" },
      { icon: "⏱️", label: "Time Saved", value: "20+ hrs/mo" },
      { icon: "💰", label: "ROI", value: "3x" }
    ]
  },
  {
    id: 2,
    title: "Web & App Development for Retail",
    description: "I delivered a scalable e-commerce platform and mobile app for Omni WTMS, boosting online sales and automating inventory.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    liveUrl: "https://omniwtms.com",
    details: "End-to-end build of a modern e-commerce platform and mobile app for Omni WTMS with React, Stripe, and a custom admin dashboard. Automated product syncing and order management. Results: 2x online sales, 70% less manual admin work.",
    metrics: [
      { icon: "🛒", label: "Online Sales", value: "2x" },
      { icon: "📱", label: "Mobile Users", value: "+120%" },
      { icon: "⏳", label: "Manual Admin", value: "-70%" }
    ]
  },
  {
    id: 3,
    title: "Digital Marketing Funnel Overhaul",
    description: "I revamped a paid ads and funnel system for IdentI Marketing, doubling their ROAS and reducing CPA.",
    image: "/images/projects/3.png",
    tag: ["All", "Marketing"],
    liveUrl: "https://identimarketing.com",
    details: "Audit, redesign, and relaunch of all paid ads, landing pages, and CRM automations for IdentI Marketing. Used analytics to optimize every step. Result: 2x return on ad spend, 30% lower cost per acquisition.",
    metrics: [
      { icon: "📈", label: "ROAS", value: "2x" },
      { icon: "💸", label: "Cost per Acquisition", value: "-30%" },
      { icon: "🎯", label: "Conversion Rate", value: "+25%" }
    ]
  },
];

const ProjectsSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (caseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredCaseStudies = caseStudiesData.filter((cs) =>
    cs.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="case-studies">
      <div className="flex flex-col items-center mb-8 md:mb-12 mt-4">
        <motion.span
          className="bg-transparent border border-[#ffb700] text-[#ffb700] text-xs font-semibold px-4 py-1 rounded-full mb-3 tracking-widest relative flex items-center justify-center overflow-visible"
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, repeatType: "loop" }}
        >
          CASE STUDIES
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
            Real Results
            <motion.span
              className="absolute left-0 -bottom-1 h-2 w-full rounded-full bg-[#ffb700]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
          <span className="text-white"> For Real Businesses</span>
        </h2>
        <p className="text-[#ADB7BE] text-center mt-5 text-sm md:text-base max-w-2xl">See how I’ve helped business owners unlock massive growth through AI-driven solutions and marketing automation systems.</p>
      </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Marketing"
          isSelected={tag === "Marketing"}
        />
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
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 px-4">
        {filteredCaseStudies.map((caseStudy, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <div onClick={() => handleCardClick(caseStudy)} className="cursor-pointer">
              <ProjectCard
                key={caseStudy.id}
                title={caseStudy.title}
                description={caseStudy.description}
                imgUrl={caseStudy.image}
                gitUrl={caseStudy.liveUrl}
                previewUrl={caseStudy.liveUrl}
              />
            </div>
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        viewport={{ once: true }}
      >
        <CTAButton to="#contact" smooth>Book Your Free Strategy Call</CTAButton>
      </motion.div>
      <Dialog open={isModalOpen} onClose={closeModal} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black opacity-70" onClick={closeModal} />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="relative bg-[#181818] rounded-xl max-w-lg w-full mx-auto p-8 z-50 shadow-2xl"
          >
            {selectedCase && (
              <>
                <img src={selectedCase.image} alt={selectedCase.title} className="rounded-lg mb-4 w-full max-h-64 object-cover" />
                <Dialog.Title className="text-2xl font-bold text-[#ffb700] mb-2 flex items-center gap-2"><span className="text-2xl">🚀</span>{selectedCase.title}</Dialog.Title>
                <p className="text-[#ADB7BE] mb-4">{selectedCase.details}</p>
                {selectedCase.metrics && (
                  <div className="flex justify-between gap-2 mb-4">
                    {selectedCase.metrics.map((m, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center flex-1 bg-[#181818] rounded-lg py-3"
                        whileHover={{ scale: 1.15, filter: 'drop-shadow(0 0 8px #ffb700)' }}
                        transition={{ type: 'spring', stiffness: 220 }}
                      >
                        <span className="text-2xl md:text-3xl mb-1" style={{color:'#ffb700'}}>{m.icon}</span>
                        <span className="text-[#ffb700] font-bold text-lg">{m.value}</span>
                        <span className="text-[#ADB7BE] text-xs font-medium mt-1">{m.label}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
                <a href={selectedCase.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 bg-[#ffb700] text-[#222] font-semibold rounded hover:bg-[#e6a600] transition">View Website</a>
                <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl font-bold">&times;</button>
              </>
            )}
          </motion.div>
        </div>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
