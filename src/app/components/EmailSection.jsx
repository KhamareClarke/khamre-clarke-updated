"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
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
        console.log("Message sent successfully.");
        setEmailSubmitted(true);
      } else {
        console.error("Form submission failed:", resData);
        alert(`Form submission failed: ${resData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(`Network error: ${error.message}. Please check your connection and try again.`);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <motion.div
        className="z-10 rounded-2xl bg-gradient-to-br from-[#181818]/80 to-[#232323]/90 border-2 border-[#ffb700]/30 shadow-xl p-8 md:p-10 flex flex-col items-center mb-8 mt-2 w-full text-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/contactimage.png.png"
          alt="Your Consultant Photo"
          width={140}
          height={140}
          className="object-cover shadow-lg mb-4 border-4 border-[#ffb700]"
          priority
        />
        <span className="bg-transparent border border-[#ffb700] text-[#ffb700] text-xs font-semibold px-4 py-1 rounded-full mb-3 tracking-widest uppercase">LET'S TALK</span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-3"><span className="text-[#ffb700]">Ready</span><span className="text-white"> To Build Your AI System?</span></h2>
        <p className="text-[#ADB7BE] mb-5 max-w-md text-lg">
          Book your <span className="text-[#ffb700] font-semibold">FREE AI strategy call</span> and discover how custom AI can unlock predictable, scalable growth for your business—fast.
        </p>
        <ul className="mb-7 space-y-2 text-[#ADB7BE] text-base list-disc list-inside">
          <li><span className="text-[#ffb700] font-bold">100% tailored</span> to your business goals</li>
          <li><span className="text-[#ffb700] font-bold">No obligation, no hard sell</span></li>
          <li><span className="text-[#ffb700] font-bold">24hr response guarantee</span></li>
        </ul>
        <motion.div className="bg-[#232323] rounded-xl p-5 mb-7 shadow-lg border-l-4 border-[#ffb700] flex items-center gap-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          <svg className="text-[#ffb700] w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7v4a2 2 0 01-2 2H7a2 2 0 01-2-2V7m14 0a2 2 0 00-2-2H7a2 2 0 00-2 2m14 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7" /></svg>
          <div>
            <p className="text-white text-base italic">“Our revenue grew 40% in 6 months after integrating custom AI workflows. The process was seamless and ROI was instant.”</p>
            <span className="block text-[#ffb700] font-semibold mt-2">— Satisfied Client</span>
          </div>
        </motion.div>
        <p className="text-[#ffb700] font-semibold mb-4">Let's discuss how AI can transform your business—forever.</p>
        <div className="socials flex flex-row gap-2 mb-2">
          <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
            <svg fill="#ffb700" className="h-8 w-8" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.609.069-.609 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg fill="#ffb700" className="h-8 w-8" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/></svg>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl bg-gradient-to-br from-[#181818]/80 to-[#232323]/90 border-2 border-[#ffb700] shadow-2xl p-8 md:p-10 flex flex-col justify-center"
      >
        {emailSubmitted ? (
          <p className="text-green-600 text-base font-semibold text-center mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="you@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="text-white block mb-2 text-sm font-medium"
              >
                Phone (optional)
              </label>
              <input
                name="phone"
                type="tel"
                id="phone"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Project, AI, or Consulting"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Tell me about your goals, challenges, or project..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#ffb700] hover:bg-[#e6a600] text-[#222] font-bold py-3 px-5 rounded-lg w-full text-lg shadow transition"
            >
              SUBMIT REQUEST — 24HR RESPONSE GUARANTEED
            </button>
          </form>
        )}
        <div className="rounded-xl bg-gradient-to-br from-[#181818]/80 to-[#232323]/90 border border-[#ffb700] shadow-lg p-4 mt-6 text-center">
  <p className="text-[#ADB7BE] font-semibold">Stop grinding. Start automating. Scale smarter, not harder.</p>
</div>
      </motion.div>
    </section>
  );
};

import dynamic from "next/dynamic";
export default dynamic(() => Promise.resolve(EmailSection), { ssr: false });
