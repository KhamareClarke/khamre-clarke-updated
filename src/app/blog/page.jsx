import React from "react";
import Link from "next/link";

const categories = [
  "AI Automation",
  "Digital Marketing",
  "Web & App Development",
  "CRM & Sales",
  "Local Business Growth",
  "SME Success"
];

const featuredArticles = [
  {
    title: "How AI Chatbots Save UK Trades 20+ Hours a Week",
    slug: "ai-chatbots-save-uk-trades",
    excerpt: "Discover how local trades automate admin, boost lead conversion, and reclaim time using AI chatbots.",
    category: "AI Automation",
    image: "/images/blog/ai-chatbot-trades.jpg"
  },
  {
    title: "ROI-Driven Websites for UK SMEs: What Actually Works?",
    slug: "roi-websites-uk-smes",
    excerpt: "A practical guide to building websites that deliver measurable business results for local businesses.",
    category: "Web & App Development",
    image: "/images/blog/roi-websites.jpg"
  }
];

export default function BlogHome() {
  return (
    <section className="py-16 bg-[#0A0A0A] min-h-screen">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* Main content */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-6 text-[#ffb700]">Resource Hub</h1>
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map(cat => (
              <button key={cat} className="px-4 py-2 rounded-full bg-[#181818] border border-[#222] text-[#ffb700] font-semibold hover:bg-[#222] transition text-sm mb-2">
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map(article => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group block bg-[#181818] rounded-xl overflow-hidden border border-[#222] shadow-lg hover:scale-[1.02] transition">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:opacity-90" />
                <div className="p-6">
                  <span className="text-xs font-bold text-[#ffb700] uppercase mb-2 block">{article.category}</span>
                  <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-[#ffb700]">{article.title}</h2>
                  <p className="text-[#ADB7BE] mb-4">{article.excerpt}</p>
                  <span className="inline-block text-[#ffb700] font-semibold">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Sidebar CTA & Lead Magnet */}
        <aside className="w-full md:w-80 flex-shrink-0">
          <div className="sticky top-24 bg-[#181818] border border-[#222] rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-xl font-bold mb-2 text-white">Want More ROI?</h3>
            <p className="text-[#ADB7BE] mb-4">Get my free guide: <span className="text-[#ffb700] font-semibold">"7 AI Tools Every UK Business Needs in 2025"</span></p>
            <form className="flex flex-col gap-3">
              <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-2 bg-[#0A0A0A] border border-[#222] text-white placeholder-[#ADB7BE] focus:outline-none focus:ring-2 focus:ring-[#ffb700]" required />
              <button type="submit" className="bg-[#ffb700] text-[#222] font-bold py-2 px-6 rounded-lg shadow hover:bg-[#e6a600] transition border-2 border-[#ffb700] focus:outline-none focus:ring-2 focus:ring-[#ffb700]">Get the Free Guide</button>
            </form>
          </div>
          <div className="bg-[#181818] border border-[#222] rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-2 text-white">Book a Free Strategy Call</h4>
            <p className="text-[#ADB7BE] mb-4">See how AI and automation can unlock growth for your UK business.</p>
            <a href="#contact" className="inline-block bg-[#ffb700] text-[#222] font-bold py-2 px-6 rounded-lg shadow hover:bg-[#e6a600] transition border-2 border-[#ffb700] focus:outline-none focus:ring-2 focus:ring-[#ffb700]">Book Now</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
