"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Case Studies",
    path: "#case-studies",
  },
  {
    title: "FAQ",
    path: "#faq",
  },
  {
    title: "Hire Me",
    path: "#hire-me",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  React.useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'case-studies', 'faq', 'hire-me', 'contact', 'pricing', 'resources'];
    const sectionElements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    const handleScroll = () => {
      let found = 'home';
      for (let section of sectionElements) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          found = section.id;
          break;
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-20 bg-[#111015] shadow-md">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="flex items-center">
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" className="h-14 w-auto md:h-20 transition-all duration-300" />
          </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center space-x-6 text-sm md:text-base font-semibold uppercase tracking-wide">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} active={activeSection === link.path.replace('#','')} />
              </li>
            ))}
          </ul>
        </div>
              <div className="hidden md:flex items-center">
          <Link href="/hire" className="ml-6 bg-[#ffb700] hover:bg-[#e6a600] text-[#222] font-bold py-2 px-5 rounded-md transition flex items-center">
            LET&apos;S TALK LEVERAGE
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
