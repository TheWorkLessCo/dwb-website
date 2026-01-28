"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectShowcase {
  neighborhood: string
  projectType: "window-replacement" | "glass-repair" | "patio-door"
  beforeImage: string
  afterImage: string
  caption: string
  windowCount?: number
}

interface CityProjectShowcaseProps {
  projects: ProjectShowcase[]
  cityName: string
}

const projectTypeLabels: Record<string, string> = {
  "window-replacement": "Window Replacement",
  "glass-repair": "Glass Repair",
  "patio-door": "Patio Door",
}

export function CityProjectShowcase({ projects, cityName }: CityProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAfter, setShowAfter] = useState<Record<number, boolean>>({})

  if (!projects || projects.length === 0) {
    return null
  }

  const toggleBeforeAfter = (index: number) => {
    setShowAfter(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const nextProject = () => {
    setActiveIndex(prev => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex(prev => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#049BF2] rounded-full text-sm font-black uppercase tracking-widest mb-6">
            <MapPin className="w-4 h-4" />
            <span>Recent {cityName} Projects</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See Our Work in {cityName}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects from your neighbors. Tap to see the transformation.
          </p>
        </div>

        {/* Desktop: Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Before/After Image Container */}
              <div
                className="relative aspect-[4/3] cursor-pointer group"
                onClick={() => toggleBeforeAfter(index)}
              >
                <Image
                  src={showAfter[index] ? project.afterImage : project.beforeImage}
                  alt={`${showAfter[index] ? "After" : "Before"}: ${project.caption}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                />

                {/* Before/After Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    showAfter[index]
                      ? "bg-green-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}>
                    {showAfter[index] ? "After" : "Before"}
                  </span>
                </div>

                {/* Tap hint overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                    Tap to see {showAfter[index] ? "before" : "after"}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-slate-100 rounded text-xs font-semibold text-slate-600">
                    {projectTypeLabels[project.projectType]}
                  </span>
                  {project.windowCount && (
                    <span className="text-xs text-gray-500">
                      {project.windowCount} windows
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{project.neighborhood}</h3>
                <p className="text-sm text-gray-600">{project.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel View */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Before/After Image */}
              <div
                className="relative aspect-[4/3] cursor-pointer"
                onClick={() => toggleBeforeAfter(activeIndex)}
              >
                <Image
                  src={showAfter[activeIndex] ? projects[activeIndex].afterImage : projects[activeIndex].beforeImage}
                  alt={`${showAfter[activeIndex] ? "After" : "Before"}: ${projects[activeIndex].caption}`}
                  fill
                  className="object-cover"
                />

                {/* Before/After Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    showAfter[activeIndex]
                      ? "bg-green-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}>
                    {showAfter[activeIndex] ? "After" : "Before"}
                  </span>
                </div>

                {/* Tap hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                    Tap to see {showAfter[activeIndex] ? "before" : "after"}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-slate-100 rounded text-xs font-semibold text-slate-600">
                    {projectTypeLabels[projects[activeIndex].projectType]}
                  </span>
                  {projects[activeIndex].windowCount && (
                    <span className="text-xs text-gray-500">
                      {projects[activeIndex].windowCount} windows
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{projects[activeIndex].neighborhood}</h3>
                <p className="text-sm text-gray-600">{projects[activeIndex].caption}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            {projects.length > 1 && (
              <>
                <button
                  onClick={prevProject}
                  className="absolute left-2 top-1/3 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-2 top-1/3 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {projects.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-[#049BF2]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
