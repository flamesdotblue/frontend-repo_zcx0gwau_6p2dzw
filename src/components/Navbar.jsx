import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-yellow-300 to-amber-500 ring-1 ring-yellow-200/40 group-hover:scale-105 transition-transform" />
          <span className="text-lg font-semibold tracking-wide">
            <span className="text-white">YAZ</span>{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Agency</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
          <a href="#work" className="text-white/80 hover:text-white transition">Work</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-gradient-to-b from-yellow-300 to-amber-500 text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] hover:from-yellow-200 hover:to-amber-400 transition"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
