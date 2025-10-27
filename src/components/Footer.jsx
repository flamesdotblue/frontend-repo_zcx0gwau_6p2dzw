import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-semibold">
              <span className="text-white">YAZ</span>{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Agency</span>
            </div>
            <p className="mt-1 text-sm text-white/60">Black & gold digital craftsmanship — branding, web, AI, and custom systems.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@yaz.agency"
              aria-label="Email"
              className="h-10 w-10 grid place-content-center rounded-full border border-white/10 hover:border-yellow-300/40 bg-white/5 hover:bg-white/10 transition"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com" target="_blank" rel="noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 grid place-content-center rounded-full border border-white/10 hover:border-yellow-300/40 bg-white/5 hover:bg-white/10 transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com" target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 grid place-content-center rounded-full border border-white/10 hover:border-yellow-300/40 bg-white/5 hover:bg-white/10 transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} YAZ Agency. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
