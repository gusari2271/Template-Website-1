import React from "react";
import { siteConfig } from "../data/content";
import Icon from "./Icon";
import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const { brand, footer, contact } = siteConfig;

  return (
    <footer className="bg-slate-900 text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400 max-w-sm">
              {brand.shortBio}
            </p>
          </div>

          {/* Secondary Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {contact.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-indigo-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label={social.name}
              >
                <Icon name={social.iconName} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{footer.copyright}</div>
          <div className="flex items-center gap-1.5">
            <span>Dirancang dengan React, Vite, dan Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
