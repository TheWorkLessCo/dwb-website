"use client";

import { useState } from "react";

const bigBoxData = {
  name: "Big Box Retailers",
  subtitle: 'The "Standard" Route',
  uFactor: "0.45 (Minimum Code)",
  shgc: "0.35 (Heat Seeps In)",
  sales: "3-Hour High Pressure Pitch",
  install: "Lowest-Bid Subcontractors",
  warranty: "Manufacturer Only (Limited)",
};

const handymanData = {
  name: '"Chuck in a Truck"',
  subtitle: "The Risky Route",
  uFactor: "0.55+ (Drafty Single Pane)",
  shgc: "No Coating (Baking Sun)",
  sales: '"I\'ll text you a price"',
  install: "Day-Laborers (No Certs)",
  warranty: "Tail-Light Warranty (Gone tomorrow)",
};

export function ComparisonEngine() {
  const [isHandyman, setIsHandyman] = useState(false);
  const competitor = isHandyman ? handymanData : bigBoxData;

  return (
    <section id="comparison-engine" className="bg-[#f9fafb] py-16 md:py-24 px-5 font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-4">
            SIDE-BY-SIDE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            The Difference Is Clear.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Most DFW contractors sell windows. We provide the{" "}
            <strong className="text-gray-900">Butler Standard</strong>.
          </p>

          {/* Toggle Switch */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`font-semibold transition-colors duration-300 ${
                !isHandyman ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Big Box Retailers
            </span>
            <button
              onClick={() => setIsHandyman(!isHandyman)}
              className={`relative w-16 h-9 rounded-full transition-colors duration-300 ${
                isHandyman ? "bg-[#1a365d]" : "bg-gray-300"
              }`}
              aria-label="Toggle competitor type"
            >
              <span
                className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isHandyman ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`font-semibold transition-colors duration-300 ${
                isHandyman ? "text-gray-900" : "text-gray-400"
              }`}
            >
              &ldquo;Chuck in a Truck&rdquo;
            </span>
          </div>
        </div>

        {/* Desktop Comparison Grid */}
        <div className="hidden lg:grid grid-cols-[280px_1fr_1fr] bg-white rounded-3xl overflow-visible shadow-sm">
          {/* Feature Labels Column */}
          <div className="p-5 pt-10 bg-white rounded-l-3xl">
            <div className="h-24 font-extrabold text-gray-400 uppercase text-xs tracking-wider flex items-end pb-4">
              Key Performance Metrics
            </div>
            <div className="h-[70px] flex items-center font-semibold text-gray-700 border-b border-gray-100 cursor-help group relative">
              Insulation (U-Factor)
              <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
              <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-3 py-2 rounded-lg max-w-[200px] z-20">
                Measures heat loss. Dallas goal is &lt; 0.30
              </div>
            </div>
            <div className="h-[70px] flex items-center font-semibold text-gray-700 border-b border-gray-100 cursor-help group relative">
              Heat Block (SHGC)
              <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
              <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-3 py-2 rounded-lg max-w-[200px] z-20">
                Blocks solar heat. Dallas goal is &lt; 0.25
              </div>
            </div>
            <div className="h-[70px] flex items-center font-semibold text-gray-700 border-b border-gray-100">
              The Sales Experience
            </div>
            <div className="h-[70px] flex items-center font-semibold text-gray-700 border-b border-gray-100">
              Installation Quality
            </div>
            <div className="h-[70px] flex items-center font-semibold text-gray-700">
              The &ldquo;Butler&rdquo; Warranty
            </div>
          </div>

          {/* Butler Standard Column (Hero) */}
          <div className="relative bg-white border-2 border-[#1a365d] rounded-2xl z-10 scale-[1.03] shadow-2xl p-8 pt-10">
            {/* Recommended Tag */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a365d] text-white px-4 py-1 rounded-full text-xs font-extrabold tracking-wider">
              RECOMMENDED
            </div>
            
            {/* Header */}
            <div className="h-24 text-center border-b-2 border-gray-100 mb-5 flex flex-col justify-end pb-4">
              <h3 className="text-2xl font-bold text-[#1a365d]">The Butler Standard</h3>
              <p className="text-sm text-gray-500 mt-1">White-Glove Professionalism</p>
            </div>

            {/* Rows */}
            <div className="h-[70px] flex items-center justify-center text-center border-b border-gray-100">
              <span className="text-emerald-600 font-extrabold mr-2">✓</span>
              <span className="font-medium">0.28 (Elite Insulation)</span>
            </div>
            <div className="h-[70px] flex items-center justify-center text-center border-b border-gray-100">
              <span className="text-emerald-600 font-extrabold mr-2">✓</span>
              <span className="font-medium">0.21 (Best in TX)</span>
            </div>
            <div className="h-[70px] flex items-center justify-center text-center border-b border-gray-100">
              <span className="text-emerald-600 font-extrabold mr-2">✓</span>
              <span className="font-medium">30-Min Educational Consult</span>
            </div>
            <div className="h-[70px] flex items-center justify-center text-center border-b border-gray-100">
              <span className="text-emerald-600 font-extrabold mr-2">✓</span>
              <span className="font-medium">Certified White-Glove Crew</span>
            </div>
            <div className="h-[70px] flex items-center justify-center text-center">
              <span className="text-emerald-600 font-extrabold mr-2">✓</span>
              <span className="font-medium">Lifetime Leak-Free + Glass Breakage</span>
            </div>
          </div>

          {/* Competitor Column */}
          <div className="p-8 pt-10 bg-[#fafafa] rounded-r-3xl">
            {/* Header */}
            <div className="h-24 text-center border-b-2 border-gray-100 mb-5 flex flex-col justify-end pb-4">
              <h3 className="text-2xl font-bold text-gray-500 transition-all duration-300">
                {competitor.name}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{competitor.subtitle}</p>
            </div>

            {/* Rows with fade animation */}
            <div className="h-[70px] flex items-center justify-center text-center border-b border-gray-100 text-gray-400 transition-all duration-300">
              {competitor.uFactor}
            </div>
            <div className="h-[70px] flex items-center justify-center text-center border-b border-gray-100 text-gray-400 transition-all duration-300">
              {competitor.shgc}
            </div>
            <div className="h-[70px] flex items-center justify-center text-center border-b border-gray-100 text-gray-400 transition-all duration-300">
              {competitor.sales}
            </div>
            <div className="h-[70px] flex items-center justify-center text-center border-b border-gray-100 text-gray-400 transition-all duration-300">
              {competitor.install}
            </div>
            <div className="h-[70px] flex items-center justify-center text-center text-gray-400 transition-all duration-300">
              {competitor.warranty}
            </div>
          </div>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="lg:hidden space-y-8">
          {/* Butler Standard Card */}
          <div className="bg-white border-2 border-[#1a365d] rounded-2xl p-6 shadow-xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a365d] text-white px-4 py-1 rounded-full text-xs font-extrabold tracking-wider">
              RECOMMENDED
            </div>
            <div className="text-center mb-6 pt-2">
              <h3 className="text-xl font-bold text-[#1a365d]">The Butler Standard</h3>
              <p className="text-sm text-gray-500">White-Glove Professionalism</p>
            </div>
            <div className="space-y-4">
              {[
                { label: "U-Factor", value: "0.28 (Elite Insulation)" },
                { label: "Heat Block", value: "0.21 (Best in TX)" },
                { label: "Sales", value: "30-Min Educational Consult" },
                { label: "Install", value: "Certified White-Glove Crew" },
                { label: "Warranty", value: "Lifetime Leak-Free + Glass Breakage" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                  <span className="text-emerald-600 font-extrabold text-lg">✓</span>
                  <div>
                    <span className="font-bold text-gray-900 mr-2">{item.label}:</span>
                    <span className="text-gray-700">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitor Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            {/* Mobile Toggle */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className={`text-sm font-semibold ${!isHandyman ? "text-gray-900" : "text-gray-400"}`}>
                Big Box
              </span>
              <button
                onClick={() => setIsHandyman(!isHandyman)}
                className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${
                  isHandyman ? "bg-[#1a365d]" : "bg-gray-300"
                }`}
                aria-label="Toggle competitor type"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    isHandyman ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-sm font-semibold ${isHandyman ? "text-gray-900" : "text-gray-400"}`}>
                Handyman
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-500">{competitor.name}</h3>
              <p className="text-sm text-gray-400">{competitor.subtitle}</p>
            </div>
            <div className="space-y-4">
              {[
                { label: "U-Factor", value: competitor.uFactor },
                { label: "Heat Block", value: competitor.shgc },
                { label: "Sales", value: competitor.sales },
                { label: "Install", value: competitor.install },
                { label: "Warranty", value: competitor.warranty },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl">
                  <span className="text-red-400 font-bold text-lg">✗</span>
                  <div>
                    <span className="font-bold text-gray-600 mr-2">{item.label}:</span>
                    <span className="text-gray-500">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-5">
            *All Butler ratings exceed Energy Star® 2025 North Texas Requirements.
          </p>
          <a
            href="/book#form"
            className="inline-block bg-[#1a365d] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#2d4a7c] transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            GET MY BUTLER-GRADE QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}

