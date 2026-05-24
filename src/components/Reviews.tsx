import React from 'react';
import { motion } from 'motion/react';

const reviews = [
  { stars: "★★★★★", text: "Brought in my cracked iPhone 14 and they fixed it in under an hour. Price was fair and the screen looks brand new. Highly recommend!", author: "Marcus T." },
  { stars: "★★★★★", text: "My Samsung fell in the toilet and I thought it was done for. Fix & Sell saved it! Works perfectly. These guys are miracle workers.", author: "Danielle R." },
  { stars: "★★★★★", text: "Super fast, super friendly. Battery replacement was done while I waited. Way cheaper than buying a new phone. Will definitely be back.", author: "James K." },
  { stars: "★★★★★", text: "The free diagnostic alone was worth the trip. They told me exactly what was wrong, fixed it fast, and even cleaned my charging port for free.", author: "Priya M." },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-dark border-t border-line py-16 md:py-24 px-4 md:px-12">
      <div className="font-display text-[12px] font-bold tracking-[0.2em] uppercase text-accent flex items-center gap-2.5 mb-4 before:content-[''] before:block before:w-5 before:h-[2px] before:bg-accent">
        What Customers Say
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
        5-Star <em className="text-accent not-italic">Reviews</em>
      </h2>
      <p className="text-muted max-w-[560px] mb-12 text-[15px]">
        Real feedback from real customers in the Covington community.
      </p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line border border-line"
      >
        {reviews.map((rev, i) => (
          <div key={i} className="bg-dark2 p-6">
            <div className="text-accent text-[14px] tracking-[2px] mb-3">{rev.stars}</div>
            <p className="text-[14px] text-light leading-[1.7] mb-4 italic">"{rev.text}"</p>
            <div className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-muted">— {rev.author}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
