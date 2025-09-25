"use client";

import { FaCheckCircle, FaStar, FaBolt } from "react-icons/fa";
import { useEffect, useState } from "react";
import CTAButton from "../components/CTAButton";
import CookieBanner from "../components/CookieBanner";

export const metadata = {
  title: "Business Bundle £699 | AI-Powered Website + Lead Generation | Khamare Clarke",
  description:
    "Get a complete AI-powered business system in 7 days: custom website, lead capture, chatbot automation, and analytics. Only £699 for first 5 clients. UK-based support.",
  keywords: "AI website builder, business automation, lead generation, chatbot, UK web developer, custom website, AI employee, business bundle, conversion optimization",
  alternates: { canonical: "/business-bundle" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Business Bundle £699 | AI-Powered Website + Lead Generation",
    description:
      "Complete AI-powered business system delivered in 7 days. Custom website, lead capture, chatbot automation, and analytics. Limited spots available.",
    url: "https://khamareclarke.com/business-bundle",
    siteName: "Khamare Clarke",
    images: [
      {
        url: "https://khamareclarke.com/images/business-bundle-og.jpg",
        width: 1200,
        height: 630,
        alt: "Business Bundle - AI-Powered Website and Lead Generation System",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Bundle £699 | AI-Powered Website + Lead Generation",
    description: "Complete AI-powered business system delivered in 7 days. Custom website, lead capture, chatbot automation, and analytics.",
    creator: "@khamareclarke",
    images: ["https://khamareclarke.com/images/business-bundle-twitter.jpg"],
  },
  other: {
    "price:amount": "699",
    "price:currency": "GBP",
    "product:availability": "limited",
    "business:contact_data:locality": "London",
    "business:contact_data:region": "England",
    "business:contact_data:country_name": "United Kingdom",
  },
};

function SpotsLeftCounter() {
  const [spotsLeft] = useState(2); // Fixed at 2 spots
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show counter after component mounts
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(visibilityTimer);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-xl z-50 flex items-center gap-1 sm:gap-2 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isHovered ? 'scale-105' : ''} hover:shadow-red-500/30 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        window.open('https://calendly.com/khamareclarke/new-meeting', '_blank');
      }}
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-red-400 rounded-full blur animate-pulse"></div>
        <div className="relative flex items-center justify-center h-6 w-6 bg-white rounded-full">
          <span className="text-red-600 font-bold text-sm">{spotsLeft}</span>
        </div>
      </div>
      <span className="font-bold text-xs sm:text-sm whitespace-nowrap">
        HURRY! {spotsLeft} Spot{spotsLeft === 1 ? '' : 's'} Left
      </span>
      <svg 
        className="w-4 h-4 animate-bounce-horizontal" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );
}

export default function BusinessBundlePage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      businessType: e.target.businessType.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      console.log("Sending request to:", endpoint);
      console.log("Request data:", data);
      
      const response = await fetch(endpoint, options);
      console.log("Response status:", response.status);
      
      const resData = await response.json();
      console.log("Response data:", resData);

      if (response.status === 200) {
        console.log("Business Bundle form submitted successfully.");
        setFormSubmitted(true);
      } else {
        console.error("Form submission failed:", resData);
        setFormError(resData.error || "Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormError(`Network error: ${error.message}. Please check your connection and try again.`);
    }
  };


  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <SpotsLeftCounter />
      {/* Full-Screen Hero with Frame */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] relative overflow-hidden p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-32 w-32 xs:h-48 xs:w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-[#ffb700]/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 h-32 w-32 xs:h-48 xs:w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-white/3 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 xs:h-96 xs:w-96 sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] rounded-full bg-[#ffb700]/3 blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
        </div>
        
        {/* Main Content Frame */}
        <div className="relative z-10 w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <div className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-[#ffb700]/20 xs:border-2 xs:border-[#ffb700]/30 rounded-xl xs:rounded-2xl sm:rounded-3xl p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-xl xs:shadow-2xl">
            
            {/* Badge */}
            <div className="flex justify-center mb-3 xs:mb-4 sm:mb-6 md:mb-8">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ffb700]/30 to-[#ff8c00]/30 border border-[#ffb700]/50 text-[#ffb700] px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs xs:text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm animate-bounce">
                🚀 Best for Startups
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ffb700] leading-tight tracking-tight mb-2 xs:mb-3 sm:mb-4">
              Business Launch Bundle
            </h1>
            
            <h2 className="text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-gradient-to-r from-[#ffb700] to-[#ff8c00] bg-clip-text text-transparent font-bold mb-4 xs:mb-5 sm:mb-6 md:mb-8">
              Website + AI + SEO + Social + Google
            </h2>

            {/* Price Section */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-[#0f0f0f] border border-[#ffb700]/30 rounded-lg px-5 py-3">
                <span className="text-white/60 text-base line-through">£5,000</span>
                <span className="text-3xl sm:text-4xl font-black text-[#ffb700]">£699</span>
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">SAVE 86%</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-white/90 max-w-full xs:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 px-2 xs:px-0">
              <span className="text-[#ffb700] font-medium">Everything you need to dominate your market:</span> Fast website, AI employee, Google Business, social media, email automation, and analytics.
            </p>
            
            <p className="text-center text-white font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 px-2 xs:px-0">
              Built to convert. Delivered in 14 days. One transparent price. Zero surprises.
            </p>

            {/* Single CTA Button */}
            <div className="flex justify-center mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12">
              <a
                href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noreferrer"
                className="group relative inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 xs:px-6 xs:py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-black text-black bg-gradient-to-r from-[#ffb700] to-[#ff8c00] rounded-lg xs:rounded-xl sm:rounded-2xl shadow-xl xs:shadow-2xl hover:shadow-[#ffb700]/50 transform hover:scale-105 transition-all duration-300 border xs:border-2 lg:border-3 border-[#ffb700] w-full max-w-xs xs:max-w-sm sm:min-w-[250px] md:min-w-[300px]"
              >
                <span className="relative z-10">🚀 Get Started Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#ffb700] rounded-lg xs:rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-1 mb-2 flex-wrap">
              <div className="flex items-center gap-1 bg-green-500/20 border border-green-500/30 rounded-full px-1 py-0.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 text-xs">14-Day Delivery</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-500/20 border border-blue-500/30 rounded-full px-1 py-0.5">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-300 text-xs">Secure Payment</span>
              </div>
              <div className="flex items-center gap-1 bg-purple-500/20 border border-purple-500/30 rounded-full px-1 py-0.5">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-purple-300 text-xs">Free Revisions</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 xs:gap-2 text-[#ffb700] mb-3 xs:mb-4 sm:mb-6 flex-wrap">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl" />
                ))}
                <span className="ml-1 xs:ml-2 sm:ml-4 text-white font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">"Transparent and efficient — got results in 2 weeks"</span>
              </div>
              
              <div className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-white/20 rounded-lg xs:rounded-xl sm:rounded-2xl px-3 py-2 xs:px-4 xs:py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 max-w-full xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto">
                <p className="text-white/90 text-xs xs:text-sm sm:text-base md:text-lg mb-1 xs:mb-2 sm:mb-3">
                  ✅ <span className="font-semibold text-[#ffb700]">14‑day revision window</span> — Perfect your site until it's exactly right
                </p>
                <p className="text-white/90 text-xs xs:text-sm sm:text-base md:text-lg">
                  🎯 <span className="font-semibold text-[#ffb700]">45‑minute handover call</span> — Learn everything you need to succeed
                </p>
              </div>
            </div>
            
            {/* Review Section */}
            <div className="text-center mt-6">
              <p className="text-[#ffb700] text-sm sm:text-base font-semibold mb-1">
                ★★★★★ 5.0/5.0 from real UK business owners
              </p>
              <p className="text-white text-xs sm:text-sm mb-4">
                "Delivered our site in 7 days! Doubled our leads with AI." – Myapproved.com
              </p>

              {/* Logos Section */}
              <div className="flex justify-center gap-4 mt-4">
                <img src="/images/testimonials/identi-logo.png" alt="Identi Logo" className="h-8 sm:h-10" />
                <img src="/images/testimonials/myapproved-logo.png" alt="MyApproved Logo" className="h-8 sm:h-10" />
                <img src="/images/testimonials/omni-logo.png" alt="Omni Logo" className="h-8 sm:h-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] relative overflow-hidden py-20">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-[#ffb700]/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-white/3 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Main Content Frame */}
          <div className="p-8 sm:p-12">
            
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ffb700]/30 to-[#ff8c00]/30 border border-[#ffb700]/50 text-[#ffb700] px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm">
                ✨ Complete Package
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ffb700] leading-tight mb-4">
              What's Included
            </h2>
            
            <p className="text-center text-white/80 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              <span className="text-[#ffb700] font-semibold">Everything you need to dominate your market</span> — delivered in one complete, conversion-optimized package.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { icon: "🌐", text: "Bespoke Website (mobile, SEO, fast, branded)" },
                { icon: "🤖", text: "AI Chatbot (lead capture or bookings)" },
                { icon: "📞", text: "AI Voice Receptionist (or WhatsApp agent)" },
                { icon: "📍", text: "Google Business Profile & Local SEO" },
                { icon: "📱", text: "Social Media Launch (setup + 8 posts)" },
                { icon: "🏠", text: "1 Year Hosting" },
                { icon: "⚡", text: "7-Day Delivery Guarantee" },
                { icon: "🛠️", text: "30 Days After-Launch Support" }
              ].map((item, i) => (
                <div key={i} className="group bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#ffb700]/20 rounded-xl p-4 hover:border-[#ffb700]/50 hover:bg-[#ffb700]/5 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-[#ffb700] flex-shrink-0" />
                      <div className="w-full h-px bg-gradient-to-r from-[#ffb700]/30 to-transparent"></div>
                    </div>
                    <p className="text-white/90 text-sm font-medium leading-tight">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Value Proposition */}
            <div className="bg-[#0f0f0f]/90 backdrop-blur-sm border border-[#ffb700]/30 rounded-2xl p-6 mb-8">
              <div className="text-center">
                <p className="text-[#ffb700] font-bold text-lg mb-2">
                  🎯 Built to Convert. Delivered Fast. Zero Surprises.
                </p>
                <p className="text-white/80 text-base">
                  Everything you need to launch and grow — in one package.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#ffb700] to-[#ff8c00] text-black font-black rounded-2xl hover:scale-105 transform transition-all duration-300 text-lg shadow-xl hover:shadow-[#ffb700]/50 border-2 border-[#ffb700]"
              >
                <span className="relative z-10">🚀 Secure Your Spot Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#ffb700] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <p className="text-white/60 text-sm mt-4">
                Limited slots available • No setup fees • 7-day delivery guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] relative overflow-hidden py-20">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-[#ffb700]/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white/3 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="p-8 sm:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ffb700]/30 to-[#ff8c00]/30 border border-[#ffb700]/50 text-[#ffb700] px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm">
                ✨ Client Success Stories
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ffb700] leading-tight mb-4">
              Real Results from Real Clients
            </h2>
            
            <p className="text-center text-white/80 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              <span className="text-[#ffb700] font-semibold">See how businesses like yours transformed their online presence</span> and achieved remarkable results.
            </p>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {[
                {
                  quote: "Delivered our site in 7 days! Doubled our leads with AI.",
                  author: "Olivia Chen",
                  company: "CEO, IdentI Marketing",
                  avatar: "/images/testimonials/identi.png"
                },
                {
                  quote: "Professional, fast, and the chatbot is a game-changer.",
                  author: "Sophie Ellis",
                  company: "Head of Growth, MyApproved.com",
                  avatar: "/images/testimonials/myapproved.png"
                },
                {
                  quote: "Professional, fast, and results-driven. Our website now converts visitors into paying customers.",
                  author: "James Morgan",
                  company: "Operations Lead, Omni WTMS",
                  avatar: "/images/testimonials/omni.png"
                }
              ].map((testimonial, i) => (
                <div key={i} className="group bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#ffb700]/20 rounded-xl p-4 sm:p-6 hover:border-[#ffb700]/50 hover:bg-[#ffb700]/5 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full border-2 border-[#ffb700]/50 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-16 h-16 rounded-full bg-[#ffb700]/20 border-2 border-[#ffb700]/50 items-center justify-center text-[#ffb700] font-bold text-2xl" style={{display: 'none'}}>
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic text-center">"{testimonial.quote}"</p>
                  <div className="text-center">
                    <p className="text-[#ffb700] font-bold text-sm">— {testimonial.author}</p>
                    <p className="text-white/60 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-white/80 text-lg mb-6">
                Join hundreds of successful businesses who chose to work with us.
              </p>
              <a
                href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#ffb700] to-[#ff8c00] text-black font-black rounded-2xl hover:scale-105 transform transition-all duration-300 text-lg shadow-xl hover:shadow-[#ffb700]/50 border-2 border-[#ffb700]"
              >
                <span className="relative z-10">💼 Start Your Success Story</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#ffb700] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <p className="text-white/60 text-sm mt-4">
                Limited spots available • No setup fees • 7-day delivery guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden py-20">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-[#ffb700]/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-white/3 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="p-8 sm:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ffb700]/30 to-[#ff8c00]/30 border border-[#ffb700]/50 text-[#ffb700] px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm">
                ⚡ Simple 3-Step Process
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ffb700] leading-tight mb-4">
              How It Works
            </h2>
            
            <p className="text-center text-white/80 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              <span className="text-[#ffb700] font-semibold">From zero to launch in just 14 days</span> with our streamlined process
            </p>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  step: "1", 
                  title: "Book your spot", 
                  desc: "Lock in a kickoff date. I'll share a quick prep checklist.", 
                  foot: "Kickoff meeting + planning",
                  icon: "📅"
                },
                { 
                  step: "2", 
                  title: "We build in 14 days", 
                  desc: "Design, content, set-up, and integrations — handled.", 
                  foot: "Reviews + content staging",
                  icon: "⚡"
                },
                { 
                  step: "3", 
                  title: "Go live + iterate", 
                  desc: "Launch, measure, and tweak based on real data.", 
                  foot: "Post‑launch tweaks + tracking",
                  icon: "🚀"
                },
              ].map((item, i) => (
                <div key={i} className="group bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#ffb700]/20 rounded-2xl p-8 hover:border-[#ffb700]/50 hover:bg-[#ffb700]/5 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#ffb700] to-[#ff8c00] text-black text-xl font-bold">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffb700] to-[#ff8c00]">
                      STEP {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 mb-5 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-[#ffb700] font-medium">
                    <div className="w-2 h-2 bg-[#ffb700] rounded-full"></div>
                    {item.foot}
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <p className="text-white/80 text-lg mb-6">
                Limited slots (2) for faster delivery. <span className="text-[#ffb700] font-semibold">Book now</span> to secure your spot.
              </p>
              <a
                href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#ffb700] to-[#ff8c00] text-black font-black rounded-2xl hover:scale-105 transform transition-all duration-300 text-lg shadow-xl hover:shadow-[#ffb700]/50 border-2 border-[#ffb700]"
              >
                <span className="relative z-10">🚀 Book Your Kickoff</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#ffb700] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <p className="text-white/60 text-sm mt-4">
                No commitment • 7-day delivery guarantee • 30-day support included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Banner */}
      <section className="bg-gradient-to-br from-[#0a0a0a] to-[#121212] relative overflow-hidden py-12 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* FOMO Timer */}
            <div className="bg-red-600/20 border border-red-500/50 rounded-lg px-4 py-2 mb-6">
              <div className="flex items-center justify-center gap-3 text-red-400">
                <div className="animate-pulse">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-bold">ONLY 2 SPOTS LEFT THIS MONTH</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-red-500/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500/20 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#ffb700] rounded-full"></div>
              <span className="text-[#ffb700] text-sm font-bold uppercase tracking-wider">Limited Time Offer</span>
              <div className="w-2 h-2 bg-[#ffb700] rounded-full"></div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Only <span className="text-[#ffb700]">£699</span> for the first 5 clients
            </h3>
            
            <p className="text-white/70 mb-6 max-w-2xl">
              After this, rates rise. Only 2 spots left this month.
            </p>
            
            <a 
              href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#ffb700] to-[#ff8c00] text-black font-bold rounded-xl hover:scale-105 transform transition-all duration-300 text-base shadow-lg hover:shadow-[#ffb700]/30 border border-[#ffb700]"
            >
              <span className="relative z-10">🚀 Secure Your Spot Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#ffb700] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Not Competitors */}
      <section className="bg-gradient-to-br from-[#0a0a0a] to-[#121212] relative overflow-hidden py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Not <span className="text-red-400">Fiverr, Wix, or Upwork?</span>
            </h2>
            <p className="text-white/70">Here's what you get with us vs. the alternatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0f0f0f]/50 border border-red-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-red-400 font-bold mb-2">Fiverr</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>❌ Hit-or-miss quality</li>
                <li>❌ No ongoing support</li>
                <li>❌ Communication barriers</li>
                <li>❌ Generic templates</li>
              </ul>
            </div>
            
            <div className="bg-[#0f0f0f]/50 border border-red-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-red-400 font-bold mb-2">Wix/Squarespace</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>❌ Limited customization</li>
                <li>❌ No AI integration</li>
                <li>❌ DIY = time-consuming</li>
                <li>❌ Basic lead capture</li>
              </ul>
            </div>
            
            <div className="bg-[#0f0f0f]/50 border border-[#ffb700]/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-[#ffb700] font-bold mb-2">Our Business Bundle</h3>
              <ul className="text-white/80 text-sm space-y-1">
                <li>✅ Custom AI-powered system</li>
                <li>✅ 7-day delivery guarantee</li>
                <li>✅ Direct UK-based support</li>
                <li>✅ Built for conversions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Plan */}
      <section className="bg-gradient-to-br from-[#0a0a0a] to-[#121212] relative overflow-hidden py-20 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="p-8 sm:p-12 bg-[#0f0f0f]/50 backdrop-blur-sm border border-white/5 rounded-2xl">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ffb700]/30 to-[#ff8c00]/30 border border-[#ffb700]/50 text-[#ffb700] px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm">
                🚀 Growth Plan
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ffb700] leading-tight mb-4">
              Want Ongoing Growth & Support?
            </h2>
            
            <p className="text-center text-white/80 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              After your launch, upgrade to the Growth Plan:
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { text: "Ongoing hosting & security", icon: "🛡️" },
                { text: "Social media posts & accounts", icon: "📱" },
                { text: "AI chatbot & voice updates", icon: "🤖" },
                { text: "SEO reports & ranking boosts", icon: "📊" },
                { text: "Priority support", icon: "⚡" },
                { text: "Monthly performance reports", icon: "📈" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0a0a0a]/50 rounded-lg border border-white/5 hover:border-[#ffb700]/30 transition-colors">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <p className="text-white/90">{item.text}</p>
                </div>
              ))}
            </div>
            
            {/* Pricing */}
            <div className="text-center mb-8">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                <span className="text-[#ffb700]">£199</span>/month
              </p>
              <p className="text-white/60 text-sm">Optional but highly recommended</p>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Stay ahead of the competition, never worry about updates or growth again.
              </p>
              <a
                href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#ffb700] to-[#ff8c00] text-black font-black rounded-2xl hover:scale-105 transform transition-all duration-300 text-lg shadow-xl hover:shadow-[#ffb700]/50 border-2 border-[#ffb700]"
              >
                <span className="relative z-10">🚀 Learn More About Growth Plan</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#ffb700] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <p className="text-white/60 text-sm mt-4">
                No long-term contracts • Cancel anytime • 14-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-[#0a0a0a] to-[#121212] relative overflow-hidden py-20 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#ffb700] rounded-full"></div>
              <span className="text-[#ffb700] text-sm font-bold uppercase tracking-wider">Section 6</span>
              <div className="w-2 h-2 bg-[#ffb700] rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Frequently Asked <span className="text-[#ffb700]">Questions</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Everything you need to know about your Business Bundle
            </p>
          </div>
          
          {/* Accordion */}
          <div className="space-y-4">
            {[
              {
                question: "How fast is delivery?",
                answer: "Your full bundle is delivered in 7 days from our kickoff call."
              },
              {
                question: "What if I need extra pages?",
                answer: "We can add extra pages for a fixed fee. Just ask on your intro call."
              },
              {
                question: "Can you run my ads too?",
                answer: "Yes! Ask on the call for a custom quote for ongoing ads management."
              },
              {
                question: "Do I keep my website if I cancel monthly?",
                answer: "Yes — your website is 100% yours, even if you cancel the Growth Plan."
              }
            ].map((item, i) => (
              <div key={i} className="group">
                <div 
                  className="flex items-start justify-between p-6 bg-[#0f0f0f]/50 backdrop-blur-sm border border-white/5 rounded-xl cursor-pointer transition-all duration-300 hover:border-[#ffb700]/30 group-hover:bg-[#0f0f0f]/70"
                  onClick={() => toggleFAQ(i)}
                >
                  <h3 className="text-lg font-bold text-white pr-4">{item.question}</h3>
                  <div className={`flex-shrink-0 ml-4 mt-1 transform transition-transform duration-300 ${openFAQ === i ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9L12 16L5 9" stroke="#ffb700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 pt-2 text-white/80">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/80 mb-6">
              Still have questions? We're here to help.
            </p>
            <a
              href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ffb700] to-[#ff8c00] text-black font-bold rounded-xl hover:scale-105 transform transition-all duration-300 text-base shadow-lg hover:shadow-[#ffb700]/30 border-2 border-[#ffb700]"
            >
              <span className="relative z-10">📞 Book a Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#ffb700] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden py-20 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#ffb700] rounded-full"></div>
              <span className="text-[#ffb700] text-sm font-bold uppercase tracking-wider">Get Started</span>
              <div className="w-2 h-2 bg-[#ffb700] rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Book Your <span className="text-[#ffb700]">Spot</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Limited availability. Secure your bundle before the price increases.
            </p>
          </div>
          
          {/* Form Container */}
          <div className="bg-[#0f0f0f]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-400 text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Form Submitted Successfully!</h3>
                <p className="text-white/70 mb-6">Thank you for your interest in our Business Bundle. We'll get back to you within 24 hours.</p>
                <a 
                  href="https://calendly.com/khamareclarke/new-meeting" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block bg-[#ffb700] hover:bg-[#ff8c00] text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Book Your Free Strategy Call
                </a>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              {formError && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
                  <p className="text-red-400 text-sm">{formError}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-medium">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:border-transparent transition-all duration-200 text-sm sm:text-base" 
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-medium">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:border-transparent transition-all duration-200 text-sm sm:text-base" 
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-medium">Phone</label>
                  <input 
                    name="phone"
                    type="tel" 
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:border-transparent transition-all duration-200 text-sm sm:text-base" 
                    placeholder="+44"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-medium">Business Type</label>
                  <select 
                    name="businessType"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:border-transparent transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select business type</option>
                    <option value="local">Local Service</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="agency">Agency</option>
                    <option value="saas">SaaS</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white/80 text-sm font-medium">How can we help you? <span className="text-white/40">(Optional)</span></label>
                <textarea 
                  name="message"
                  rows="3" 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="group relative w-full flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#ffb700] to-[#ff8c00] text-black font-bold rounded-xl hover:scale-[1.02] transform transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-[#ffb700]/30 border-2 border-[#ffb700] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>🚀</span>
                    <span>Secure My Spot</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#ffb700] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <div className="mt-4 p-3 bg-[#0a0a0a]/50 rounded-lg border border-white/5">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-[#ffb700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-[#ffb700] text-xs font-bold">PRIVACY GUARANTEE</span>
                  </div>
                  <p className="text-center text-white/60 text-xs leading-relaxed">
                    🔒 Your data is 100% secure • We never spam or share your information • GDPR compliant • 24-hour response guarantee
                  </p>
                </div>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* Policies note */}
      <section className="bg-[#121212] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-center text-white text-base font-semibold">Policies • Limited spots • Upfront clarity • Satisfaction-first</p>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#ffb700] to-[#ff8c00] p-4 z-40 md:hidden border-t-2 border-[#ffb700] shadow-2xl transition-transform duration-300" id="mobile-cta">
        <a 
          href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noreferrer"
          className="block w-full text-center bg-black text-white font-bold py-4 rounded-xl text-lg shadow-lg active:scale-95 transition-transform duration-150"
        >
          🚀 Secure My £699 Spot Now
        </a>
      </div>
      
      <style jsx global>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1.5s infinite;
        }
      `}</style>
      
      <CookieBanner />
    </main>
  );
}
