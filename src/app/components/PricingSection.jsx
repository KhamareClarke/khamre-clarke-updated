"use client";
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const PRICING_TABS = [
  { id: "websites", label: "Websites" },
  { id: "apps", label: "Apps" },
  { id: "seo", label: "SEO" },
  { id: "paidads", label: "Paid Ads" },
  { id: "aisystems", label: "AI Systems" },
  { id: "automation", label: "Business Automation" },
  { id: "consultancy", label: "Consultancy" },
];

const PRICING_DATA = {
  websites: [
  {
    tier: "Starter",
    price: "£750",
    benefits: [
      "Look credible instantly—wow visitors from the first click.",
      "Get more leads with a site built to convert, not just look good.",
      "Show up on Google so clients find you first, not your competitors.",
      "Clients can contact and book you in seconds, hassle-free.",
    ],
    cta: true,
  },
  {
    tier: "Growth",
    price: "£2,000",
    mostPopular: true,
    benefits: [
      "Attract better clients with expert content and SEO.",
      "Never lose a lead—automated CRM and follow-ups.",
      "Become the trusted authority in your industry.",
      "See what’s working (and what’s not) with live ROI data.",
    ],
    cta: true,
  },
  {
    tier: "Empire",
    price: "£5,000",
    benefits: [
      "Automate sales and bookings—make money while you sleep.",
      "Sell worldwide, 24/7, with zero hassle.",
      "Impress investors and partners with a world-class platform.",
      "Full control: dashboards and integrations tailored to you.",
    ],
    cta: true,
  },
],
  apps: [
  {
    tier: "Starter",
    price: "£3,500",
    benefits: [
      "Launch your app idea and get real user feedback fast.",
      "Works everywhere—no tech headaches for you or your users.",
      "See what users love (and hate) with built-in analytics.",
      "Ready to grow as your business takes off.",
    ],
    cta: true,
  },
  {
    tier: "Growth",
    price: "£7,500",
    mostPopular: true,
    benefits: [
      "Automate your business and wow users with smart features.",
      "Keep clients engaged with reminders and chatbots.",
      "Get paid and manage clients—all in one place.",
      "We handle the App Store so you don’t have to.",
    ],
    cta: true,
  },
  {
    tier: "Empire",
    price: "£15,000",
    benefits: [
      "Build a platform that makes you the industry leader.",
      "Scale to millions of users without breaking a sweat.",
      "We handle the tech—so you focus on growth.",
      "Launch under your own brand, anywhere in the world.",
    ],
    cta: true,
  },
],
  seo: [
  {
    tier: "Starter",
    price: "£600/month",
    benefits: [
      "Get found by clients searching for what you offer.",
      "Content that brings you leads, not just clicks.",
      "See your rankings and ROI, no guesswork.",
      "Fast fixes to boost your Google position.",
    ],
    cta: true,
  },
  {
    tier: "Growth",
    price: "£1,500/month",
    mostPopular: true,
    benefits: [
      "Own your market with expert SEO and content.",
      "Content that attracts your dream clients every month.",
      "Climb Google with links that actually move the needle.",
      "Track your competitors and stay ahead.",
    ],
    cta: true,
  },
  {
    tier: "Empire",
    price: "£3,500/month",
    benefits: [
      "Be #1 in your industry, locally or globally.",
      "Content that dominates every search result.",
      "Earn trust with PR and influencer links.",
      "Board-level reporting for serious growth.",
    ],
    cta: true,
  },
],
  paidads: [
  {
    tier: "Starter",
    price: "£1,000/month",
    benefits: [
      "Ads that bring you real leads, not just clicks.",
      "Campaigns designed for ROI, not wasted spend.",
      "Follow up with every prospect automatically.",
      "See results fast—no waiting months for traction.",
    ],
    cta: true,
  },
  {
    tier: "Growth",
    price: "£2,500/month",
    mostPopular: true,
    benefits: [
      "Reach your clients everywhere they scroll.",
      "Test and improve ads with AI—get more for less.",
      "See what’s working with weekly reports.",
      "Nurture leads from click to close.",
    ],
    cta: true,
  },
  {
    tier: "Empire",
    price: "£6,000/month",
    benefits: [
      "We handle everything—ads, creative, strategy.",
      "Test unlimited ideas to find your winner.",
      "Track every sale, every pound spent.",
      "Get VIP reporting and proactive growth advice.",
    ],
    cta: true,
  },
],
  aisystems: [
  {
    tier: "Starter",
    price: "£1,250/month",
    benefits: [
      "Free your team from boring admin forever.",
      "AI handles your leads, emails, and CRM.",
      "Never miss a client—AI works 24/7.",
      "See results in days, not months.",
    ],
    cta: true,
  },
  {
    tier: "Growth",
    price: "£2,500/month",
    mostPopular: true,
    benefits: [
      "Multiply your team with AI chat and voice.",
      "Track every sale and client touchpoint live.",
      "Priority support—always get answers fast.",
      "Connect with clients on any channel.",
    ],
    cta: true,
  },
  {
    tier: "Empire",
    price: "£5,000/month",
    benefits: [
      "Your business, fully automated by AI.",
      "Launch under your own brand, for any client.",
      "Enterprise support, always-on reliability.",
      "Executive insights for big decisions.",
    ],
    cta: true,
  },
],
  automation: [
  {
    tier: "Starter",
    price: "£750/month",
    benefits: [
      "No more manual admin—automate your pipeline.",
      "Clients get instant replies, every time.",
      "Fill your diary with quality appointments.",
      "Quick setup, see ROI in weeks.",
    ],
    cta: true,
  },
  {
    tier: "Growth",
    price: "£1,750/month",
    mostPopular: true,
    benefits: [
      "Reach clients on email, SMS, WhatsApp, Messenger.",
      "AI finds your hottest leads automatically.",
      "We train your team to use automation like pros.",
      "Advanced workflows for serious scale.",
    ],
    cta: true,
  },
  {
    tier: "Empire",
    price: "£4,000/month",
    benefits: [
      "Automate everything—run your business hands-free.",
      "See every metric that matters, instantly.",
      "Get expert advice and optimization, always.",
      "Every system tailored to your exact needs.",
    ],
    cta: true,
  },
],
  consultancy: [
    {
      tier: "Starter",
      price: "£300",
      benefits: [
        "1:1 strategy session to identify your biggest growth levers.",
        "Actionable roadmap tailored to your business goals.",
        "Expert answers to your burning business questions.",
        "Walk away with clarity and next steps you can use immediately.",
      ],
      cta: true,
    },
    {
      tier: "Growth",
      price: "£950",
      mostPopular: true,
      benefits: [
        "Deep-dive workshops with you and your leadership team.",
        "Custom growth plan for marketing, sales, and operations.",
        "Accountability check-ins to keep you on track.",
        "Get unstuck and accelerate results with expert guidance.",
      ],
      cta: true,
    },
    {
      tier: "Empire",
      price: "£2,500",
      benefits: [
        "Ongoing executive advisory and hands-on support.",
        "Full business transformation blueprint, tailored to you.",
        "Access to a private network of proven growth partners.",
        "Board-level insights for scaling, exits, or investment.",
      ],
      cta: true,
    },
  ],
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("websites");

  // Sync tab with URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#pricing-", "");
    if (hash && PRICING_TABS.find(t => t.id === hash)) {
      setActiveTab(hash);
    }
    const onHashChange = () => {
      const hash = window.location.hash.replace("#pricing-", "");
      if (hash && PRICING_TABS.find(t => t.id === hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Update hash on tab change
  const handleTabClick = (id) => {
    setActiveTab(id);
    window.location.hash = `pricing-${id}`;
  };

  return (
    <section id="pricing" className="text-white py-16 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
  <div className="flex flex-col items-center">
    <span className="border border-[#ffb700] text-[#ffb700] text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase bg-black/30 shadow-sm mb-4">PRICING</span>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-3 text-[#ffb700] flex flex-wrap items-center justify-center gap-2">
      <span className="text-2xl sm:text-3xl">💸</span>
      <span className="relative inline-block pb-1">
        The Ultimate Leverage Packages
        <motion.span
          className="absolute left-0 bottom-0 h-1 w-full rounded-full bg-[#ffb700] hidden md:block"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        />
      </span>
    </h2>
  </div>
  <div className="max-w-3xl mx-auto bg-[#181818] border border-[#ffb700] rounded-xl shadow-lg p-6 mb-5">
    <p className="text-lg md:text-xl text-[#ffb700] font-bold mb-2">Unlock Exponential Growth, Not Just a Service</p>
    <p className="text-[#ADB7BE] text-base md:text-lg">Every package is engineered for business transformation—not just delivery. You get custom-built systems, automation, and AI that multiply your time, amplify your revenue, and give you an unfair market advantage. If you want more than a website or app—if you want leverage, scale, and freedom—these are for you.</p>
  </div>
  <p className="text-[#ADB7BE] max-w-2xl mx-auto">Choose your leverage tier. Every plan is a launchpad for exponential results, not just a list of features.</p>
</div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 overflow-x-auto px-2" role="tablist">
          {PRICING_TABS.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition border-2 focus:outline-none focus:ring-2 focus:ring-[#ffb700] ${activeTab === tab.id ? "border-[#ffb700] text-[#ffb700] bg-[#0A0A0A]" : "border-[#222] text-[#ADB7BE] bg-[#0A0A0A] hover:border-[#ffb700] hover:text-[#ffb700]"}`}
              onClick={() => handleTabClick(tab.id)}
              tabIndex={0}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="text-xs text-[#ffb700] bg-[#0A0A0A] rounded-md py-2 px-4 mb-8 max-w-xl mx-auto border border-[#222]">All packages are custom-tailored. Prices shown are typical starting points. Book a free strategy call to get your tailored plan.</div>
        {/* Floating sparkle accent above pricing grid */}
        <motion.span
          className="flex justify-center mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffb700"><circle cx="12" cy="12" r="3"/><g opacity="0.6"><circle cx="4" cy="12" r="1.3"/><circle cx="20" cy="12" r="1.3"/><circle cx="12" cy="4" r="1.3"/><circle cx="12" cy="20" r="1.3"/></g></svg>
        </motion.span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 px-4 max-w-7xl mx-auto" id={`tabpanel-${activeTab}`} role="tabpanel">
  {PRICING_DATA[activeTab].map((tier, i) => (
    <motion.div
      key={tier.tier}
      className={`relative bg-gradient-to-br from-[#181818] via-[#0A0A0A] to-black border-2 rounded-xl p-6 sm:p-8 lg:p-8 xl:p-10 flex flex-col focus:outline-none focus:ring-2 focus:ring-[#ffb700] transition-transform overflow-visible w-full mx-auto hover:scale-[1.02] ${tier.mostPopular ? "border-[#ffb700] shadow-2xl shadow-[#ffb700]/30 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black transform scale-105 z-20" : "border-[#ffb700]/40 shadow-gold/30"} hover:shadow-gold/80`}
      tabIndex={0}
      aria-label={`${tier.tier} plan`}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: i * 0.18 }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 32px #ffb70099' }}
      viewport={{ once: true }}
    >
      {tier.mostPopular && (
        <motion.span
          className="absolute top-6 right-6 bg-[#ffb700] text-[#222] text-xs font-extrabold px-4 py-1 rounded-full shadow-lg tracking-wide uppercase z-30 border-2 border-[#fff]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.3, repeat: Infinity, repeatType: 'loop', delay: 0.6 }}
        >
          Best Value
        </motion.span>
      )}
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-2xl ${tier.mostPopular ? 'text-[#ffb700]' : 'text-[#bfa24e]'}`}>{tier.tier === 'Starter' ? '🚀' : tier.tier === 'Growth' ? '🔥' : '👑'}</span>
        <h3 className="text-xl font-extrabold tracking-tight text-white drop-shadow-gold flex items-center">{tier.tier}</h3>
      </div>
      <div className="text-2xl font-black mb-4 text-[#ffb700] tracking-tight drop-shadow-gold">From {tier.price}</div>
      <ul className="mb-6 space-y-3 font-light">
        {tier.benefits.map((benefit, j) => (
          <li key={j} className="flex items-start text-sm lg:text-base text-white/90 gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#ffb700]/10 border border-[#ffb700] flex-shrink-0 mt-0.5">
              <FaCheckCircle className="text-[#ffb700] text-xs" />
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      {tier.cta && (
        <CTAButton>Book Your Leverage Call</CTAButton>
      )}
    </motion.div>
  ))}
</div>
        {/* Animated CTA button at bottom */}
        <motion.div
          className="flex justify-center mt-16 md:mt-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-block bg-[#ffb700] hover:bg-[#bfa24e] text-[#222] font-bold py-3 px-8 rounded-lg shadow transition text-lg border-2 border-[#ffb700] focus:outline-none focus:ring-2 focus:ring-[#ffb700]"
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
