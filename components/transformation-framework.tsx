"use client"

import React, { useState, useMemo } from "react"
import { Check, Target, ShieldCheck, Clock, Sparkles, DollarSign } from "lucide-react"

// --- INTERNAL TYPES ---
interface ValueSet {
  outcome: string
  likelihood: string
  timeDelay: string
  effort: string
  benefit: string
}

interface TabConfig {
  id: keyof ValueSet
  label: string
  icon: React.ElementType
}

// --- CORE CONTENT ---
const FRAMEWORK_CONTENT: ValueSet = {
  outcome:
    "Shatter the cycle of home frustration. Swap outdated drafts and soaring utility bills for a high-performance sanctuary that commands local envy and delivers the ultimate living experience.",
  likelihood:
    "Eliminate the 'renovation gamble' with a 99% success rate and an ironclad performance guaranteed backed by hundreds of local homeowners who finally stopped settling for less.",
  timeDelay:
    "Stop living in the purgatory of a 'work-in-progress'. While traditional contractors drag projects out for months, our rapid-deployment system collapses your timeline into a single, breathtaking 24-hour transformation.",
  effort:
    "Dread the mess, the management, and the mistakes? We absorb 100% of the friction—handling every permit and precision detail so you can skip the contractor headaches and wake up in your dream home.",
  benefit:
    "Stop losing equity to an inefficient building. Lockdown a massive surge in property value and slash your monthly overhead by 40% while wrapping your family in a climate-perfect haven that pays for itself.",
}

const TABS: TabConfig[] = [
  { id: "outcome", label: "Outcome", icon: Target },
  { id: "likelihood", label: "Likelihood", icon: ShieldCheck },
  { id: "timeDelay", label: "Time Delay", icon: Clock },
  { id: "effort", label: "Effort", icon: Sparkles },
  { id: "benefit", label: "Benefit", icon: DollarSign },
]

export function TransformationFramework() {
  const values = useMemo(() => FRAMEWORK_CONTENT, [])

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-slate-50 font-sans selection:bg-[#049bf2]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#049BF2] rounded-full text-sm font-black uppercase tracking-widest mb-2">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#00152e]">
            The Transformation <span className="text-[#049bf2]">Framework</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#049bf2] mx-auto rounded-full" />
          <p className="text-slate-500 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            A high-performance methodology designed to maximize home value while eliminating renovation friction.
          </p>
        </header>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TABS.map((tab, index) => {
            const Icon = tab.icon
            return (
              <div
                key={tab.id}
                className="group relative bg-white p-8 rounded-[2rem] transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(4,155,242,0.15)] hover:-translate-y-3 flex flex-col h-full overflow-hidden"
              >
                {/* Hover Accent Background */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#049bf2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#049bf2]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Icon Box */}
                <div className="w-14 h-14 bg-slate-50 text-[#049BF2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#049bf2] group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:rotate-[360deg]">
                  <Icon className="w-7 h-7" strokeWidth={3} />
                </div>

                {/* Label */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#049bf2] group-hover:scale-150 transition-transform duration-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#049bf2]">
                    {tab.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-[#00152e] mb-4 leading-tight group-hover:text-[#049bf2] transition-colors duration-300">
                  {tab.label}
                </h3>

                {/* Description - Expressed on Hover */}
                <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100">
                  <p className="text-sm text-slate-600 leading-relaxed pt-2">
                    {values[tab.id]}
                  </p>
                </div>

                {/* Number Overlay */}
                <div className="mt-auto pt-6 text-slate-100 text-5xl font-black select-none pointer-events-none group-hover:text-[#049bf2]/10 group-hover:scale-110 transition-all duration-500 text-right">
                  0{index + 1}
                </div>
              </div>
            )
          })}
        </div>

        {/* Dynamic Pagination / Progress */}
        <footer className="mt-16 flex flex-col items-center space-y-4 opacity-40">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400">Elite Performance Framework</p>
        </footer>
      </div>
    </section>
  )
}

