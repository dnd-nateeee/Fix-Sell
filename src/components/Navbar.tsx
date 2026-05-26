import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-line flex items-center justify-between px-4 md:px-12 h-[60px]">
      <a href="#" className="font-display text-2xl font-black tracking-tighter text-white no-underline uppercase">
        Fix <span className="text-accent">&amp;</span> Sell
      </a>
      <ul className="hidden md:flex gap-6 list-none m-0 p-0">
        <li><a href="#services" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-white transition-colors duration-200">Services</a></li>
        <li><a href="#location" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-white transition-colors duration-200">Location</a></li>
      </ul>
      <a href="tel:+14704441499" className="border border-white/20 text-white font-display text-[10px] uppercase tracking-[0.2em] font-black px-5 py-2 no-underline cursor-pointer transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-px hidden md:inline-block">
        Call Now
      </a>
    </nav>
  );
}
