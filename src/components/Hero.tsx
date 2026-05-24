import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 md:px-12 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,62,0,0.12)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-0 right-0 md:top-[-40px] md:right-[-40px] text-[180px] md:text-[350px] font-black text-white/[0.02] leading-none pointer-events-none uppercase tracking-tighter">
        FIX
      </div>
      
      <div className="relative z-10 max-w-[900px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[13px] font-bold tracking-[0.2em] uppercase text-accent flex items-center gap-2.5 mb-6 before:content-[''] before:block before:w-8 before:h-[2px] before:bg-accent"
        >
          Covington, GA · Walk-ins Welcome
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-[140px] font-black leading-[0.82] tracking-tighter uppercase mb-6 -ml-2"
        >
          Your Device<br />Fixed <em className="text-accent not-italic">Today.</em>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg font-light text-light max-w-[520px] leading-[1.7] mb-10"
        >
          Fast, affordable repairs for phones and tablets. Screens, batteries, water damage &amp; more —
          backed by expert technicians at 13015 Brown Bridge Rd.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-wrap mb-12"
        >
          <a href="#location" className="bg-accent text-white font-display text-[17px] font-black tracking-widest uppercase px-8 py-3.5 no-underline border-none cursor-pointer transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(255,62,0,0.3)]">
            📍 Visit Us
          </a>
          <a href="tel:+14704441499" className="bg-transparent text-white font-display text-[17px] font-black tracking-widest uppercase px-8 py-3.5 no-underline border border-white/20 cursor-pointer transition-colors duration-200 hover:bg-white hover:text-black">
            📞 (470) 444-1499
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-6 md:gap-12 flex-wrap border-t border-line pt-8"
        >
          <div>
            <div className="font-display text-5xl font-black tracking-tighter text-white leading-none">12<span className="text-accent">+</span></div>
            <div className="text-[9px] tracking-[0.2em] font-bold uppercase text-white/40 mt-1">Repair services</div>
          </div>
          <div>
            <div className="font-display text-5xl font-black tracking-tighter text-white leading-none">5<span className="text-accent">★</span></div>
            <div className="text-[9px] tracking-[0.2em] font-bold uppercase text-white/40 mt-1">Google reviews</div>
          </div>
          <div>
            <div className="font-display text-5xl font-black tracking-tighter text-white leading-none">1<span className="text-accent">hr</span></div>
            <div className="text-[9px] tracking-[0.2em] font-bold uppercase text-white/40 mt-1">Avg turnaround</div>
          </div>
          <div>
            <div className="font-display text-5xl font-black tracking-tighter text-white leading-none">90<span className="text-accent">d</span></div>
            <div className="text-[9px] tracking-[0.2em] font-bold uppercase text-white/40 mt-1">Repair warranty</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
