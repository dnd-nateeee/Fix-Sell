import React from 'react';
import { 
  BatteryFull, Smartphone, Unplug, Droplets, Camera, 
  Volume2, Mic, ToggleLeft, Box, Search, 
  Settings2, Tablet 
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  { icon: BatteryFull, name: "Battery Replacement", desc: "Restore full battery life. We use high-quality cells for all major brands." },
  { icon: Smartphone, name: "Screen Repair", desc: "Cracked or unresponsive screens replaced with precision. OEM-quality parts." },
  { icon: Unplug, name: "Charge Port Repair", desc: "Won't charge? We clean, repair, or replace charge ports on all devices." },
  { icon: Droplets, name: "Water Damage", desc: "Dropped it in water? Bring it in ASAP — quick action saves most devices." },
  { icon: Camera, name: "Camera Repair", desc: "Blurry, cracked, or dead camera lenses and modules replaced." },
  { icon: Volume2, name: "Speaker Repair", desc: "Muffled or silent speakers fixed. Earpiece and loudspeaker both covered." },
  { icon: Mic, name: "Microphone Repair", desc: "Can't be heard on calls? Microphone replacement gets you back in touch." },
  { icon: ToggleLeft, name: "Button Repair", desc: "Power, volume, home — broken buttons repaired or replaced." },
  { icon: Box, name: "Case Repair", desc: "Bent frames, broken housing, cosmetic repairs to bring your device back." },
  { icon: Search, name: "Diagnostic Scan", desc: "Not sure what's wrong? Free diagnostic to pinpoint the exact issue." },
  { icon: Settings2, name: "Software Problems", desc: "Freezing, crashes, slow performance, virus removal, OS resets." },
  { icon: Tablet, name: "Tablet Repair", desc: "iPads, Samsung Galaxy Tabs, and more — full tablet repair service." },
];

export function Services() {
  return (
    <section id="services" className="bg-dark border-t border-line py-16 md:py-24 px-4 md:px-12">
      <div className="font-display text-[12px] font-bold tracking-[0.2em] uppercase text-accent flex items-center gap-2.5 mb-4 before:content-[''] before:block before:w-5 before:h-[2px] before:bg-accent">
        What We Fix
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
        Our <em className="text-accent not-italic">Services</em>
      </h2>
      <p className="text-muted max-w-[560px] mb-12 text-[15px]">
        From cracked screens to water damage — if it's broken, we fix it. Fast.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-line border border-line"
      >
        {services.map((svc, i) => (
          <div key={i} className="bg-dark2 p-6 cursor-pointer transition-colors duration-200 hover:bg-dark3 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <svc.icon className="w-7 h-7 mb-3 text-white" strokeWidth={1.5} />
            <div className="font-display text-[17px] font-black uppercase tracking-widest text-white mb-1.5">{svc.name}</div>
            <div className="text-[13px] text-muted leading-relaxed">{svc.desc}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
