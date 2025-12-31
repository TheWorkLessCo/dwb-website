"use client"

import React from 'react'
import Image from 'next/image'

const BRAND_BLUE = '#049bf2'
const DARK_BLUE = '#0f172a'

const CheckIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className={className} style={style}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
)

export function WarrantyCard() {
  return (
    <div className="relative w-full max-w-[460px] animate-in fade-in zoom-in duration-1000 mx-auto lg:mr-0">
      
      {/* Decorative Background Blur */}
      <div 
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[80px] opacity-20 -z-10"
        style={{ backgroundColor: BRAND_BLUE }}
      ></div>
      
      {/* Main Card with Glassmorphism */}
      <div className="bg-white/80 backdrop-blur-xl rounded-[40px] md:rounded-[60px] p-6 md:p-10 shadow-[0_40px_100px_-15px_rgba(4,155,242,0.25)] border border-white/50 flex flex-col items-center text-center relative overflow-visible">
        
        {/* Header */}
        <div className="space-y-1 mb-6 md:mb-8">
          <p className="font-black text-[11px] md:text-[13px] uppercase tracking-[0.3em] md:tracking-[0.4em]" style={{ color: BRAND_BLUE }}>
            Permanent Protection Plan
          </p>
          <h2 className="text-[32px] md:text-[44px] font-[900] leading-[1.0] tracking-tight uppercase" style={{ color: DARK_BLUE }}>
            Lifetime<br />
            Service<br />
            Warranty
          </h2>
        </div>

        {/* Central Seal & Image */}
        <div className="relative mb-8 md:mb-10 group">
          <div 
            className="absolute inset-0 blur-[40px] md:blur-[50px] rounded-full opacity-30 animate-pulse-slow"
            style={{ backgroundColor: BRAND_BLUE }}
          ></div>
          <img 
            src="https://dallaswindowbutler.b-cdn.net/Leak%20Free.png" 
            alt="Leak Free Seal"
            className="w-44 md:w-60 h-auto relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] transform group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Benefit Box */}
        <div className="w-full bg-slate-50/70 backdrop-blur-lg border border-slate-200/50 rounded-[30px] md:rounded-[40px] p-5 md:p-8 mb-8 md:mb-10 text-left">
          <h3 className="text-center font-black text-[13px] md:text-[15px] uppercase tracking-[0.2em] text-slate-800 mb-4 md:mb-6 border-b border-slate-300/40 pb-3 md:pb-4">
            Materials + Labor Included
          </h3>
          
          <ul className="space-y-3 md:space-y-4">
            {[
              "Zero-cost repairs for the life of your home",
              "100% transferable to future owners",
              "Comprehensive leak-free guarantee"
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-3 md:gap-4">
                <div 
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center shrink-0" 
                  style={{ borderColor: BRAND_BLUE }}
                >
                  <CheckIcon className="w-2.5 md:w-3 h-2.5 md:h-3" style={{ color: BRAND_BLUE }} />
                </div>
                <span className="text-[12px] md:text-[14px] font-black text-slate-600 uppercase tracking-tight">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="w-full space-y-4 md:space-y-6">
          <a 
            href="/book#form"
            className="block w-full text-white py-4 md:py-6 rounded-[20px] md:rounded-[24px] font-black text-lg md:text-xl uppercase tracking-widest shadow-2xl transition-all hover:brightness-110 active:scale-95 text-center"
            style={{ 
              backgroundColor: BRAND_BLUE, 
              boxShadow: `0 15px 35px -10px rgba(4, 155, 242, 0.5)` 
            }}
          >
            Secure My Warranty
          </a>

          <div className="space-y-1">
            <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
              No Fine Print. Just a Butler Promise.
            </p>
            <a 
              href="tel:4696408551" 
              className="text-xl md:text-3xl font-black block tracking-tighter"
              style={{ color: DARK_BLUE }}
            >
              (469) 640-8551
            </a>
          </div>
        </div>

        {/* Trust Badge Overlay */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] bg-slate-900 py-3 md:py-3.5 rounded-2xl shadow-2xl flex items-center justify-center gap-2 md:gap-3 border border-white/10">
          <div className="flex text-yellow-400 text-[10px] md:text-[11px] space-x-0.5">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-widest">
            North Texas&apos;s #1 Rated Window Pro
          </p>
        </div>
      </div>
    </div>
  )
}

