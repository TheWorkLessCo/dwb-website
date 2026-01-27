"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in" | "blur-in"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
}

const animationClasses: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "blur-in": {
    hidden: "opacity-0 blur-sm",
    visible: "opacity-100 blur-0",
  },
}

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold })

  const { hidden, visible } = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? visible : hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // ease-out-expo
      }}
    >
      {children}
    </div>
  )
}

// Staggered children animation wrapper
interface StaggeredAnimateProps {
  children: React.ReactNode[]
  className?: string
  animation?: AnimationType
  staggerDelay?: number
  duration?: number
}

export function StaggeredAnimate({
  children,
  className,
  animation = "fade-up",
  staggerDelay = 100,
  duration = 700,
}: StaggeredAnimateProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimateOnScroll
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </div>
  )
}
