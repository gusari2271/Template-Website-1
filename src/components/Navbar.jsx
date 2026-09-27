import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/content";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {siteConfig.brand.name}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 -mt-1 hidden sm:inline-block">
                Portfolio & Demo
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.ctaButton.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-full shadow-sm hover:shadow-md hover:shadow-indigo-500/25 transition-all duration-200"
            >
              <span>{siteConfig.ctaButton.label}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Buka Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/70 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href={siteConfig.ctaButton.href}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-500/20 transition-colors"
              >
                <span>{siteConfig.ctaButton.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
