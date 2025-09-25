"use client";

export default function CTAButton({ children }) {
  return (
    <a
      href="https://calendly.com/khamareclarke/new-meeting"
      className="inline-flex items-center justify-center mx-auto bg-[#ffb700] hover:bg-[#e6a600] text-[#222] font-bold py-3 px-6 rounded-lg shadow transition text-sm sm:text-base border-2 border-[#ffb700] focus:outline-none focus:ring-2 focus:ring-[#ffb700] text-center whitespace-nowrap"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
