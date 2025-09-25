"use client";
import React, { useState } from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How I Help UK Trades Save 20+ Hours a Week with AI Chatbots",
    slug: "ai-chatbots-save-uk-trades",
    excerpt: "I design and build custom AI chatbots that automate admin, boost lead conversion, and give UK tradespeople their time back. Discover my hands-on approach and proven results.",
    category: "AI Automation",
    image: "/images/blog/TradesChatBot.png.png"
  },
  {
    title: "How I Build ROI-Driven Websites for UK SMEs",
    slug: "roi-websites-uk-smes",
    excerpt: "My practical, expert guide to building websites that deliver real business results for local UK companies. See how I use modern web tech to drive ROI for my clients.",
    category: "Web & App Development",
    image: "/images/blog/SMEs.png.png"
  },
  // Add up to 10 personalized blog posts here...
  {
    title: "How I Automate Customer Enquiries 24/7 for UK Retailers with AI",
    slug: "ai-customer-enquiries-retail",
    excerpt: "I deploy AI chatbots that automate support and boost customer satisfaction for UK retailers. Learn how my expert systems deliver results around the clock.",
    category: "AI Automation",
    image: "/images/blog/automate.png"
  },
  {
    title: "Unlocking Growth with Advanced Analytics",
    slug: "advanced-analytics-growth",
    excerpt: "Discover how I leverage advanced analytics and data-driven strategies to help UK businesses make smarter decisions, optimize operations, and drive measurable growth.",
    category: "Advanced Analytics",
    image: "/images/blog/unlock.png"
  }
  // ...more posts
];

export default function BlogSlider() {
  const [current, setCurrent] = useState(0);
  // Responsive: 1 card (mobile), 2 (tablet), 3 (desktop)
  const getVisible = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [visible, setVisible] = useState(1); // Start with mobile to avoid hydration mismatch
  
  React.useEffect(() => {
    // Set correct visible count after mount
    setVisible(getVisible());
    
    const handleResize = () => setVisible(getVisible());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = Math.min(blogPosts.length, 10);
  const maxPage = Math.ceil(total / visible);
  const goTo = idx => setCurrent((idx + maxPage) % maxPage);

  const start = current * visible;
  const end = start + visible;
  const postsToShow = blogPosts.slice(start, end);

  return (
    <section className="text-white py-16 md:py-24" id="resources">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8 mt-2 w-full text-center">
          <span className="bg-transparent border border-[#ffb700] text-[#ffb700] text-xs font-semibold px-4 py-1 rounded-full mb-3 tracking-widest uppercase">RESOURCES</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-[#ffb700]">Latest Resources</h2>
          <div className="text-[#ADB7BE] max-w-2xl mx-auto text-base font-normal">Insights, guides, and AI solutions for UK business owners, trades, and SMEs.</div>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            aria-label="Previous blog"
            onClick={() => goTo(current - 1)}
            className="absolute left-0 z-10 bg-[#181818] border border-[#222] text-[#ffb700] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#222] transition md:-left-12"
          >
            &#8592;
          </button>
          <div className={`w-full grid gap-8 mx-auto`} style={{gridTemplateColumns: `repeat(${visible}, minmax(0, 1fr))`, maxWidth: visible === 1 ? '22rem' : visible === 2 ? '48rem' : '72rem'}}>
            {postsToShow.map(post => (
              <div key={post.slug} className="group bg-[#181818] rounded-2xl overflow-hidden border border-[#222] shadow-2xl hover:scale-[1.03] transition-all flex flex-col">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <span className="absolute top-4 left-4 bg-[#ffb700] text-[#222] text-xs font-bold px-3 py-1 rounded-full shadow">{post.category}</span>
                  <span className="absolute top-4 right-4 bg-[#111015] text-[#ffb700] text-xs font-bold px-2 py-1 rounded shadow flex items-center gap-1">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#ffb700"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#111015" fontWeight="bold">KC</text></svg>
                    Khamare Clarke
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#ffb700]">{post.title}</h3>
                  <p className="text-[#ADB7BE] mb-6 text-base">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <a href={`/blog/${post.slug}`} className="inline-block bg-[#ffb700] text-[#222] font-bold py-2 px-6 rounded-lg shadow hover:bg-[#e6a600] transition border-2 border-[#ffb700] focus:outline-none focus:ring-2 focus:ring-[#ffb700]">Read Full Article</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Next blog"
            onClick={() => goTo(current + 1)}
            className="absolute right-0 z-10 bg-[#181818] border border-[#222] text-[#ffb700] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#222] transition md:-right-12"
          >
            &#8594;
          </button>
        </div>
        {/* Lead Magnet */}
        <div className="mt-12 flex justify-center">
          <div className="bg-[#ffb700] rounded-2xl shadow-xl p-8 max-w-xl w-full flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#222] mb-2 text-center">Download My 7-Figure AI Playbook</h3>
            <div className="text-[#222] text-base mb-6 text-center font-medium">Steal the exact automations, AI workflows, and revenue systems I use to unlock £12,000,000+ for UK businesses. Enter your details for instant access to the playbook—free.</div>
            <form className="w-full flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="rounded-lg px-4 py-3 border border-[#222] focus:outline-none focus:ring-2 focus:ring-[#222] text-[#222] bg-white placeholder-[#888] font-medium" />
              <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 border border-[#222] focus:outline-none focus:ring-2 focus:ring-[#222] text-[#222] bg-white placeholder-[#888] font-medium" />
              <button type="submit" className="block w-[260px] mx-auto whitespace-nowrap text-center bg-[#222] text-[#ffb700] font-bold py-3 rounded-lg shadow hover:bg-[#181818] transition border-2 border-[#222] focus:outline-none focus:ring-2 focus:ring-[#222] mt-4 mb-2">Download the Playbook Now</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: total }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full border border-[#ffb700] ${idx === current ? 'bg-[#ffb700]' : 'bg-[#181818]'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/blog" className="inline-block bg-[#ffb700] text-[#222] font-bold py-3 px-8 rounded-lg shadow hover:bg-[#e6a600] transition border-2 border-[#ffb700] focus:outline-none focus:ring-2 focus:ring-[#ffb700]">View All Resources</a>
        </div>
      </div>
    </section>
  );
}
