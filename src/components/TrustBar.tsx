import React from 'react';

export function TrustBar() {
  return (
    <div className="bg-accent px-4 py-3.5 flex gap-8 flex-wrap items-center justify-center">
      <div className="font-display text-[14px] font-black tracking-widest uppercase text-white flex items-center gap-2">✓ Same-Day Service Available</div>
      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
      <div className="font-display text-[14px] font-black tracking-widest uppercase text-white flex items-center gap-2">✓ 90-Day Repair Warranty</div>
      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-40 hidden md:block"></div>
      <div className="font-display text-[14px] font-black tracking-widest uppercase text-white flex items-center gap-2 hidden md:flex">✓ Walk-ins Welcome</div>
      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-40 hidden lg:block"></div>
      <div className="font-display text-[14px] font-black tracking-widest uppercase text-white flex items-center gap-2 hidden lg:flex">✓ All Major Brands</div>
      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-40 hidden xl:block"></div>
      <div className="font-display text-[14px] font-black tracking-widest uppercase text-white flex items-center gap-2 hidden xl:flex">✓ Free Diagnostic</div>
    </div>
  );
}
