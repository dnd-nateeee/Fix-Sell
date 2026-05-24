import React from 'react';

export function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] bg-dark2 border-t border-line p-2.5 gap-2 md:hidden flex">
      <a href="tel:+14704441499" className="flex-1 text-center font-display text-[15px] font-black tracking-widest uppercase py-3 bg-accent text-white no-underline transition-opacity active:opacity-90">
        📞 Call Now
      </a>
      <a href="#location" className="flex-1 text-center font-display text-[15px] font-black tracking-widest uppercase py-3 bg-dark3 text-white border border-mid no-underline transition-colors active:bg-dark">
        📍 Find Us
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark2 border-t border-line py-8 px-4 md:px-12 flex flex-col sm:flex-row gap-6 items-center justify-between pb-24 md:pb-8">
      <a href="#" className="font-display text-2xl font-black text-white no-underline uppercase tracking-tighter">
        Fix <span className="text-accent">&amp;</span> Sell
      </a>
      <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-50 text-center sm:text-right">
        © 2025 Fix &amp; Sell · 13015 Brown Bridge Rd Ste 220, Covington GA · (470) 444-1499
      </p>
    </footer>
  );
}
