import React from 'react';
import { motion } from 'motion/react';

export function Location() {
  return (
    <section id="location" className="bg-black border-t border-line py-16 md:py-24 px-4 md:px-12">
      <div className="font-display text-[12px] font-bold tracking-[0.2em] uppercase text-accent flex items-center gap-2.5 mb-4 before:content-[''] before:block before:w-5 before:h-[2px] before:bg-accent">
        Find Us
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
        Come See <em className="text-accent not-italic">Us</em>
      </h2>
      <p className="text-muted max-w-[560px] mb-12 text-[15px]">
        Conveniently located in Covington, GA — easy parking, walk-ins welcome.
      </p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        <iframe
          className="w-full h-[380px] border border-line grayscale-[60%] contrast-110"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.!2d-83.8762!3d33.5927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f44bfbe51cdceb%3A0x5157567b704073c2!2s13015+Brown+Bridge+Rd+%23220%2C+Covington%2C+GA+30016!5e0!3m2!1sen!2sus!4v1700000000000"
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Fix & Sell location map"
        ></iframe>
        
        <div className="flex flex-col gap-6">
          <div className="border-l-2 border-accent pl-5">
            <div className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-1.5">📍 Address</div>
            <div className="text-[15px] text-white leading-[1.6]">
              13015 Brown Bridge Rd, Suite 220<br/>Covington, GA 30016
              <br/><br/>
              <a href="https://maps.google.com/?q=13015+Brown+Bridge+Rd+Suite+220+Covington+GA+30016" target="_blank" rel="noreferrer" className="text-accent font-display text-sm font-black tracking-[0.2em] uppercase no-underline hover:underline">
                Get Directions →
              </a>
            </div>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <div className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-1.5">📞 Call or Text</div>
            <div className="text-[15px] text-white leading-[1.6]">
              <a href="tel:+14704441499" className="text-accent no-underline hover:underline">(470) 444-1499</a>
            </div>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <div className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-1.5">🕐 Store Hours</div>
            <div className="text-[15px] text-white leading-[1.6]">
              Monday – Sunday<br/>
              10:00 AM – 7:00 PM
            </div>
          </div>
          
          <a href="tel:+14704441499" className="bg-accent text-white font-display text-[17px] font-black tracking-widest uppercase px-8 py-3.5 no-underline transition-all hover:-translate-y-[2px] hover:opacity-90 hover:shadow-[0_8px_30px_rgba(255,62,0,0.3)] text-center mt-2 w-max">
            Call for a Quote →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
