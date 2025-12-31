"use client"

import { Hero } from "@/components/hero"
import { ResultsBar } from "@/components/results-bar"
import ComparisonTable from "@/components/comparison-table"
import FinalCTABanner from "@/components/final-cta-banner"
import { getTrackingAttributes } from "@/lib/tracking"
import { ModernFAQ } from "@/components/modern-faq"
import ImageBridge from "@/components/ImageBridge"
import Link from "next/link"
import Image from "next/image"
import { cityLinks } from "@/lib/cities"
import { Sun, Droplets, XCircle, CheckCircle, Sparkles, ShieldCheck, DollarSign, VolumeX, Brain, ArrowDown } from "lucide-react"

export default function HomePage() {
  const howItWorksTrackingAttrs = getTrackingAttributes("home-how-it-works")
  const faqTrackingAttrs = getTrackingAttributes("home-faq")

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dallaswindowbutler.com/#business",
    name: "Dallas Window Butler",
    alternateName: "Dallas Window Butler LLC",
    description: "Professional window replacement and glass repair services in North Texas",
    telephone: "(469) 640-8551",
    email: "info@dallaswindowbutler.com",
    logo: "https://dallaswindowbutler.com/logo.png",
    image: "https://dallaswindowbutler.com/images/dallas-window-butler-team.jpg",
    url: "https://dallaswindowbutler.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1422 Sebastian Dr",
      addressLocality: "Forney",
      addressRegion: "TX",
      postalCode: "75126",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rockwall",
        addressRegion: "TX",
      },
      {
        "@type": "City",
        name: "McKinney",
        addressRegion: "TX",
      },
      {
        "@type": "City",
        name: "Allen",
        addressRegion: "TX",
      },
      {
        "@type": "City",
        name: "Plano",
        addressRegion: "TX",
      },
      {
        "@type": "City",
        name: "North Richardson",
        addressRegion: "TX",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Replacement",
            description: "Energy-efficient vinyl replacement windows",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Glass/IG Unit Replacement",
            description: "Insulated glass unit repair and replacement",
          },
        },
      ],
    },
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
    priceRange: "$$",
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://dallaswindowbutler.com/#organization",
    name: "Dallas Window Butler",
    url: "https://dallaswindowbutler.com",
    logo: "https://dallaswindowbutler.com/logo.png",
    sameAs: [
      "https://www.google.com/search?q=Dallas+Window+Butler",
      "https://www.instagram.com/dallaswindowbutler",
      "https://www.facebook.com/dallaswindowbutler",
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <div className="min-h-screen bg-white">
        {/* <Header /> Removed since root layout now provides it globally */}
        <main>
          {/* 1. Hero section */}
          <Hero />

          {/* 2. Results Bar */}
          <ResultsBar />

          {/* 3. Problem/Agitation Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                  Your Old Windows Are Failing You (And Costing You A Fortune).
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-[600px] mx-auto text-pretty">
                  Living in North Texas, you know exactly what window failure feels like. It&apos;s not just about how they look—it&apos;s about how they make you feel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left mb-12">
                {/* CARD 1: The Heat */}
                <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm animate-pulse-orange hover:animate-pulse-blue transition-all duration-500">
                  <div className="w-12 h-12 bg-orange-50 group-hover:bg-blue-50 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                    <Sun className="w-7 h-7 text-orange-500 group-hover:text-blue-500 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-blue-700">The &quot;Hot Rooms&quot;</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                    Your AC runs 24/7, but the master bedroom is still sweating. Old aluminum frames act like radiators, pulling the Texas heat right into your living room.
                  </p>
                </div>

                {/* CARD 2: The Fog */}
                <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Foggy View</h3>
                  <div className="transition-all duration-300 filter blur-[3px] group-hover:blur-none">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                      <Droplets className="w-7 h-7 text-blue-500" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Broken seals mean condensation gets trapped between the glass. Your windows look permanently dirty, and that moisture is slowly rotting your frames.
                    </p>
                  </div>
                </div>

                {/* CARD 3: The Dread */}
                <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-green-50 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <div className="relative w-7 h-7">
                      <XCircle className="absolute inset-0 w-7 h-7 text-gray-400 group-hover:opacity-0 transition-opacity duration-300" />
                      <CheckCircle className="absolute inset-0 w-7 h-7 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-green-700">The Sales Nightmare</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                    You&apos;ve put this off because you dread the process. Who wants a pushy salesperson camping out at their kitchen table for 3 hours refusing to leave?
                  </p>
                </div>
              </div>

              {/* AI SMART INSIGHT BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium animate-fade-in mb-16 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>DATA INSIGHT: DFW homes with aluminum windows waste ~35% more energy annually.</span>
              </div>

              <div className="pt-8 border-t border-gray-50">
                <p className="text-xl sm:text-2xl font-medium text-gray-800 italic">
                  &quot;It shouldn&apos;t be this hard (or this hot) to get comfortable in your own home.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 4. Solution/Mentor Section */}
          <section className="py-20 bg-[#f8f9fa]">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Right Column (Mobile: Top) - Image */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative">
                    <div className="aspect-[4/5] relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                      <Image
                        src="/images/owner-portrait.jpg"
                        alt="Friendly photo of the founder smiling, no sunglasses, wearing branded shirt"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Fallback overlay in case image is missing */}
                      <div className="absolute inset-0 bg-brand-navy/10 flex items-center justify-center -z-10">
                        <span className="text-gray-400 font-medium italic">Owner Portrait Placeholder</span>
                      </div>
                    </div>
                    {/* Dynamic Trust Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-fade-in">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-green-500" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                        100% In-House Team.<br />No Subcontractors.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Left Column - Content */}
                <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 order-2 lg:order-1">
                  <div className="space-y-4">
                    <span className="inline-block text-[#049BF2] font-bold text-sm tracking-widest uppercase">
                      MEET DALLAS WINDOW BUTLER
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        You Deserve Respect, Not a Sales Pitch.
                      </h2>
                    </div>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      <p>
                        I built this company because I watched DFW homeowners get treated like transactions by the big guys—just another number on a quota sheet. You shouldn&apos;t have to fight off a <strong className="font-semibold text-gray-900">high-pressure closer</strong> just to get a fair price on your own home.
                      </p>
                      <p>
                        That&apos;s why we operate as the <strong className="font-semibold text-gray-900">Window Butler</strong>. We bring a white-glove standard to construction. From the first step inside your home to the final walkthrough, we treat your property the way a butler would—with precision, respect, and care.
                      </p>
                      <p>
                        But premium service shouldn&apos;t require a premium budget. By eliminating commissioned salespeople, we deliver <strong className="font-semibold text-gray-900">distributor-priced windows</strong> and glass with craftsman-grade installation. You pay for the materials and the labor—not the bloat.
                      </p>
                      <p>
                        And because a window is only as good as the install, we back every job with a <strong className="font-semibold text-gray-900">Lifetime Warranty</strong> and our exclusive <strong className="font-semibold text-gray-900">Leak-Free Extended Service Agreement</strong>. Premium quality. No premium price tag. That&apos;s the standard.
                      </p>
                    </div>

                  <div className="pt-4 lg:pt-6">
                    <div className="text-3xl sm:text-4xl font-serif italic text-gray-800 mb-2">
                      Nathan B.
                    </div>
                    <p className="text-gray-500 font-medium">Founder, Dallas Window Butler</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Benefits Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  Experience The &quot;White Glove&quot; Difference.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* CARD 1 - The Financial Win */}
                <div className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-100 transition-colors">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Stop Overpaying Your Electric Bill.
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stop cooling the neighborhood. Our multi-chamber vinyl frames and Low-E glass trap the cool air inside, often lowering summer energy bills by up to 30%.
                  </p>
                </div>

                {/* CARD 2 - The 'Butler' Win */}
                <div className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Forget The Construction Mess.
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We didn&apos;t name ourselves &quot;Butler&quot; for nothing. We cover your furniture, protect your floors, and vacuum every speck of dust. Your home will be cleaner than we found it.
                  </p>
                </div>

                {/* CARD 3 - The Lifestyle Win */}
                <div className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-100 transition-colors">
                    <VolumeX className="w-8 h-8 text-slate-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Finally, Peace &amp; Quiet.
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mute the traffic, the barking dogs, and the lawnmowers. Our double-strength insulated glass creates a sound barrier so you can finally enjoy a tranquil home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Social Proof Section */}
          <section className="py-16 bg-[#f9fafb]">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Don&apos;t Just Take Our Word For It.
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  See why 100+ DFW homeowners trust us with their biggest investment.
                </p>
              </div>

              {/* 2. THE "AI SENTIMENT SCANNER" */}
              <div className="max-w-fit mx-auto mb-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-blue-100 rounded-full shadow-[0_0_15px_rgba(4,155,242,0.15)] animate-fade-in">
                  <div className="relative">
                    <Brain className="w-5 h-5 text-blue-500 animate-pulse" />
                    <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full animate-pulse" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-700 tracking-wide uppercase">
                    AI KEYWORD DETECTION: <span className="text-blue-600">&apos;Polite&apos;</span> | <span className="text-blue-600">&apos;Clean&apos;</span> | <span className="text-blue-600">&apos;On Time&apos;</span> | <span className="text-blue-600">&apos;No Pressure&apos;</span>
                  </span>
                </div>
              </div>

              {/* 3. THE VISUAL CONNECTOR (Arrow) */}
              <div className="flex justify-center mb-12 animate-bounce">
                <ArrowDown className="w-8 h-8 text-blue-500" />
              </div>

              <div className="max-w-6xl mx-auto rounded-2xl border shadow-sm bg-white text-left mb-12 relative overflow-hidden">
                <div className="p-4 sm:p-6 pb-0">
                  {/* Visual Review Banner (The "Cartoon Section") */}
                  <div className="w-full bg-[#049BF2] rounded-t-xl overflow-hidden relative z-10">
                    <Image 
                      src="/images/customer-quotes-banner.png" 
                      alt="Customer reviews summary with 5-star rating" 
                      width={1200} 
                      height={400}
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>
                
                {/* Live Review Widget - Pulled up to blend and overlap with the mascot */}
                <div className="relative z-0">
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 -mt-10">
                    <div className="rounded-b-xl overflow-hidden">
                      <iframe 
                        className="lc_reviews_widget w-full border-0" 
                        src="https://go.dallaswindowbutler.com/reputation/widgets/review_widget/9Kg5geu4xzsAgIVkpkA8?widgetId=69542e32364d509d10e45748" 
                        scrolling="no" 
                        style={{ minWidth: "100%", width: "100%", minHeight: "600px" }}
                        title="Customer Reviews"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. How It Works - Diagonal Staggered Layout */}
          <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Section Headline */}
              <div className="mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#049BF2] italic mb-3">
                  As Easy as 1, 2, 3
                </h2>
                <p className="text-lg sm:text-xl text-gray-500 italic mb-4">
                  &ldquo;Easy Peasy Lemon Squeezy&rdquo; <span className="text-gray-400 not-italic">— Luna Perez</span>
                </p>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Our no-pressure representatives assess your current windows, offer expert recommendations, and ensure a delightful experience.
                </p>
              </div>

              {/* Diagonal Staggered Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-16">
                
                {/* STEP 1 - Left, taller */}
                <div className="lg:col-span-4 lg:mt-0 group">
                  <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                    <Image 
                      src="https://dallaswindowbutler.b-cdn.net/G'5%20Star.png" 
                      alt="In-home or virtual consultation with homeowner"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Diagonal Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#049BF2]/90 via-[#049BF2]/40 to-transparent" />
                    {/* Diagonal Accent Shape */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2">
                      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="rgba(4, 155, 242, 0.85)" points="0,40 100,20 100,100 0,100" />
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10">
                      <span className="text-lg lg:text-xl font-bold uppercase tracking-widest text-white/90 drop-shadow-lg">Step 1</span>
                      <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-wide mt-2">
                        In-Home or Virtual<br />Consultation
                      </h3>
                    </div>
                  </div>
                </div>

                {/* STEP 2 - Center, offset down */}
                <div className="lg:col-span-4 lg:mt-24 group">
                  <div className="relative h-[350px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                    <Image 
                      src="https://dallaswindowbutler.b-cdn.net/newer.png" 
                      alt="Choosing windows or glass options"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Diagonal Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#049BF2]/90 via-[#049BF2]/40 to-transparent" />
                    {/* Diagonal Accent Shape */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2">
                      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="rgba(4, 155, 242, 0.85)" points="0,30 100,50 100,100 0,100" />
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10">
                      <span className="text-lg lg:text-xl font-bold uppercase tracking-widest text-white/90 drop-shadow-lg">Step 2</span>
                      <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-wide mt-2">
                        Choose Your<br />Windows or Glass
                      </h3>
                    </div>
                  </div>
                </div>

                {/* STEP 3 - Right, offset less */}
                <div className="lg:col-span-4 lg:mt-8 group">
                  <div className="relative h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                    <Image 
                      src="https://dallaswindowbutler.b-cdn.net/new2.png" 
                      alt="Beautiful finished window installation"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Diagonal Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#049BF2]/90 via-[#049BF2]/40 to-transparent" />
                    {/* Diagonal Accent Shape */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2">
                      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="rgba(4, 155, 242, 0.85)" points="0,50 100,30 100,100 0,100" />
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10">
                      <span className="text-lg lg:text-xl font-bold uppercase tracking-widest text-white/90 drop-shadow-lg">Step 3</span>
                      <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-wide mt-2">
                        Installation<br />Celebration!
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="/book#form"
                  className="inline-flex items-center px-10 py-5 bg-[#049BF2] text-white text-lg font-bold rounded-xl hover:bg-[#0389d5] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  {...howItWorksTrackingAttrs}
                >
                  Get My Free Quote
                </a>
              </div>
            </div>
          </section>

          {/* 8. The Comparison Section - "The Difference Is Clear" */}
          <section className="py-20 bg-[#f9fafb]">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              {/* Section Headlines */}
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  The Difference Is Clear.
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  Why DFW homeowners are switching to the &ldquo;Butler&rdquo; Standard.
                </p>
              </div>

              {/* Desktop Comparison Table */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-4">
                  {/* Column Headers */}
                  <div className="p-4"></div>
                  <div className="bg-white rounded-t-2xl shadow-xl p-6 text-center border-2 border-[#049BF2]">
                    <div className="w-16 h-16 bg-[#049BF2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#049BF2]">The Butler Standard</h3>
                    <p className="text-sm text-gray-500 mt-1">Dallas Window Butler</p>
                  </div>
                  <div className="bg-gray-100 rounded-t-2xl p-6 text-center opacity-75">
                    <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-600">The &ldquo;Other Guys&rdquo;</h3>
                    <p className="text-sm text-gray-400 mt-1">Typical Contractors</p>
                  </div>

                  {/* Row 1: Sales Process */}
                  <div className="flex items-center p-4 bg-white rounded-l-xl">
                    <span className="font-semibold text-gray-800">The Sales Process</span>
                  </div>
                  <div className="bg-white shadow-xl p-4 border-x-2 border-[#049BF2]">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">30-Min Educational Consult (No Pressure)</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 opacity-75 rounded-r-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-500">3-Hour High-Pressure Sales Pitch</span>
                    </div>
                  </div>

                  {/* Row 2: Pricing */}
                  <div className="flex items-center p-4 bg-white rounded-l-xl">
                    <span className="font-semibold text-gray-800">The Pricing</span>
                  </div>
                  <div className="bg-white shadow-xl p-4 border-x-2 border-[#049BF2]">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Distributor Pricing (No Sales Commissions)</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 opacity-75 rounded-r-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-500">Inflated Markups to Pay Sales Reps</span>
                    </div>
                  </div>

                  {/* Row 3: Installation */}
                  <div className="flex items-center p-4 bg-white rounded-l-xl">
                    <span className="font-semibold text-gray-800">The Installation</span>
                  </div>
                  <div className="bg-white shadow-xl p-4 border-x-2 border-[#049BF2]">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">White-Glove Service (We Clean Everything)</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 opacity-75 rounded-r-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-500">Dust, Debris & Nails Left in Your Yard</span>
                    </div>
                  </div>

                  {/* Row 4: Warranty */}
                  <div className="flex items-center p-4 bg-white rounded-l-xl rounded-bl-xl">
                    <span className="font-semibold text-gray-800">The Warranty</span>
                  </div>
                  <div className="bg-white shadow-xl p-4 border-x-2 border-b-2 border-[#049BF2] rounded-b-2xl">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Lifetime Warranty + Leak-Free Agreement</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 opacity-75 rounded-r-xl rounded-br-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-500">Limited Coverage & Fine Print</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Comparison Cards */}
              <div className="lg:hidden space-y-6">
                {/* Butler Standard Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-[#049BF2]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#049BF2] rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#049BF2]">The Butler Standard</h3>
                      <p className="text-sm text-gray-500">Dallas Window Butler</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">The Sales Process</p>
                        <p className="text-gray-600 text-sm">30-Min Educational Consult (No Pressure)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">The Pricing</p>
                        <p className="text-gray-600 text-sm">Distributor Pricing (No Sales Commissions)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">The Installation</p>
                        <p className="text-gray-600 text-sm">White-Glove Service (We Clean Everything)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">The Warranty</p>
                        <p className="text-gray-600 text-sm">Lifetime Warranty + Leak-Free Agreement</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Guys Card */}
                <div className="bg-gray-100 rounded-2xl p-6 opacity-80">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gray-400 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-600">The &ldquo;Other Guys&rdquo;</h3>
                      <p className="text-sm text-gray-400">Typical Contractors</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-600">The Sales Process</p>
                        <p className="text-gray-500 text-sm">3-Hour High-Pressure Sales Pitch</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-600">The Pricing</p>
                        <p className="text-gray-500 text-sm">Inflated Markups to Pay Sales Reps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-600">The Installation</p>
                        <p className="text-gray-500 text-sm">Dust, Debris & Nails Left in Your Yard</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-600">The Warranty</p>
                        <p className="text-gray-500 text-sm">Limited Coverage & Fine Print</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Link */}
              <div className="text-center mt-10">
                <a 
                  href="/book#form" 
                  className="text-[#049BF2] hover:text-[#0389d5] text-sm font-medium underline underline-offset-4 transition-colors"
                >
                  See our full warranty details →
                </a>
              </div>
            </div>
          </section>

          <section className="w-full py-16 bg-white" aria-label="Certifications and Partnerships">
            <div className="w-full">
              <img
                src="/images/certifications-banner.png"
                alt="Where Integrity Meets Expertise: Certified, Accredited, and Backed by the Best in the Business - featuring ProVia, Pella, Cardinal Glass, SunPro, EPA Lead-Safe, Energy Star, and USA Today recognition"
                className="w-full h-auto object-contain max-w-7xl mx-auto px-0 sm:px-4"
              />
            </div>
          </section>

          {/* 4. Comparison Table */}
          <div id="comparison">
            <ComparisonTable />
          </div>

          <ImageBridge />

          {/* 6. FAQ */}
          <div id="faq">
            <ModernFAQ />
          </div>

          <section className="py-12 bg-blue-50">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Service Areas</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Looking for window replacement near you? Explore our service areas for localized information and
                  customer reviews:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/rockwall-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore Rockwall window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Rockwall
                  </Link>
                  <Link
                    href="/mckinney-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore McKinney window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    McKinney
                  </Link>
                  <Link
                    href="/allen-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore Allen window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Allen
                  </Link>
                  <Link
                    href="/plano-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore Plano window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Plano
                  </Link>
                  <Link
                    href="/north-richardson-windows"
                    onClick={() => window.scrollTo(0, 0)}
                    aria-label="Explore North Richardson window replacement"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    North Richardson
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Final CTA banner */}
          <div id="final-cta">
            <FinalCTABanner />
          </div>
        </main>
      </div>
    </>
  )
}
