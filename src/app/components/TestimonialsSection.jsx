"use client";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";

const testimonials = [
  {
    photo: "/images/testimonials/identi.png", // IdentI Marketing founder/CEO image
    logo: "/images/testimonials/identi-logo.png", // IdentI Marketing logo
    headline: "Qualified leads up 3X in 60 days.",
    body: "Khamare’s AI-powered funnel transformed our agency’s results. We’re booking more discovery calls than ever, and our pipeline is finally predictable. The team loves the automation—and our clients notice the difference.",
    name: "Olivia Chen",
    role: "CEO",
    company: "IdentI Marketing",
    logoAlt: "IdentI Marketing logo",
    photoAlt: "Olivia Chen portrait"
  },
  {
    photo: "/images/testimonials/omni.png", // Omni WTMS founder/ops image
    logo: "/images/testimonials/omni-logo.png", // Omni WTMS logo
    headline: "Warehouse ops run smoother than ever.",
    body: "Our custom AI workflow slashed manual entry and errors across our warehouse. The Omni WTMS dashboard gives us real-time insights, and our team saves hours every week. This is the future of logistics.",
    name: "James Morgan",
    role: "Operations Lead",
    company: "Omni WTMS",
    logoAlt: "Omni WTMS logo",
    photoAlt: "James Morgan portrait"
  },
  {
    photo: "/images/testimonials/myapproved.png", // MyApproved.com founder/team image
    logo: "/images/testimonials/myapproved-logo.png", // MyApproved.com logo
    headline: "Trades signups up 50%—and support is a breeze.",
    body: "Khamare’s AI chatbot handles 90% of our directory’s enquiries. Our signups are up, support tickets are down, and the team finally has time to focus on growth. Highly recommended for any SaaS or directory business.",
    name: "Sophie Ellis",
    role: "Head of Growth",
    company: "MyApproved.com",
    logoAlt: "MyApproved.com logo",
    photoAlt: "Sophie Ellis portrait"
  }
];

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="bg-[#181818] rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-start text-left border border-[#222] hover:scale-[1.02] transition w-full mx-auto"
      tabIndex={0}
      role="group"
      aria-label={`Testimonial from ${testimonial.name}`}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.25 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 24px #ffb70055' }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-4 w-full">
        <Image
          src={testimonial.photo}
          alt={testimonial.photoAlt}
          width={64}
          height={64}
          className="rounded-md object-cover border border-[#222] bg-[#0A0A0A] mr-2"
        />
      </div>
      <div className="flex items-center mb-2">
        <FaQuoteLeft className="text-[#ffb700] text-xl mr-2" />
        <span className="font-bold text-base md:text-lg text-white">{testimonial.headline}</span>
      </div>
      <p className="text-[#ADB7BE] mb-6 text-sm md:text-base">{testimonial.body}</p>
      <div className="text-xs md:text-sm text-[#ADB7BE] font-medium mt-auto">
        {testimonial.name} — {testimonial.role}, {testimonial.company}
      </div>
    </motion.div>
  );
}

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="text-white py-12 sm:py-16 md:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8 sm:mb-10 mt-1 sm:mt-2 w-full text-center px-2">
          <motion.span
            className="bg-transparent border border-[#ffb700] text-[#ffb700] text-xs font-semibold px-4 py-1 rounded-full mb-3 tracking-widest uppercase relative flex items-center justify-center overflow-visible"
            initial={{ y: 0 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, repeatType: "loop" }}
          >
            TESTIMONIALS
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 pb-2 text-[#ffb700] relative inline-block mx-auto">
            Client Success Stories
            <motion.span
              className="absolute inset-x-0 bottom-0 h-1 w-full rounded-full bg-[#ffb700]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.3 }}
            />
          </h2>
        </div>
        {/* Floating sparkle accent above testimonials */}
        <motion.span
          className="flex justify-center mb-3 px-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffb700"><circle cx="12" cy="12" r="3"/><g opacity="0.6"><circle cx="4" cy="12" r="1.3"/><circle cx="20" cy="12" r="1.3"/><circle cx="12" cy="4" r="1.3"/><circle cx="12" cy="20" r="1.3"/></g></svg>
        </motion.span>
        {/* Mobile stacked layout */}
        <div className="block md:hidden space-y-6" role="list">
          {testimonials.map((t, i) => (
            <div key={i}>
              <TestimonialCard testimonial={t} index={i} />
            </div>
          ))}
        </div>
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 justify-items-stretch">
          {testimonials.map((t, i) => (
            <TestimonialCard testimonial={t} key={i} index={i} />
          ))}
        </div>
        {/* Logos row */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-10 mb-2 md:mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <img src={testimonial.logo} alt={testimonial.logoAlt} key={index} className="h-32 sm:h-40 md:h-52 lg:h-64 w-auto hover:scale-105 transition duration-300 mix-blend-lighten brightness-110" />
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <CTAButton>Book Your Free Strategy Call</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
