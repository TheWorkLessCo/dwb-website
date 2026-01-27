"use client"

import { useEffect, useRef, useCallback } from "react"

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ")

interface UseFocusTrapOptions {
  /** Whether the focus trap is active */
  isActive: boolean
  /** Called when user presses Escape */
  onEscape?: () => void
  /** Restore focus to trigger element when trap deactivates */
  restoreFocus?: boolean
}

export function useFocusTrap({
  isActive,
  onEscape,
  restoreFocus = true,
}: UseFocusTrapOptions) {
  const containerRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Store the previously focused element when trap activates
  useEffect(() => {
    if (isActive) {
      previousActiveElement.current = document.activeElement as HTMLElement
    }
  }, [isActive])

  // Restore focus when trap deactivates
  useEffect(() => {
    if (!isActive && restoreFocus && previousActiveElement.current) {
      previousActiveElement.current.focus()
    }
  }, [isActive, restoreFocus])

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActive || !containerRef.current) return

      // Handle Escape key
      if (event.key === "Escape" && onEscape) {
        event.preventDefault()
        onEscape()
        return
      }

      // Handle Tab key for focus trapping
      if (event.key === "Tab") {
        const focusableElements = containerRef.current.querySelectorAll(
          FOCUSABLE_SELECTORS
        )

        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement

        // Shift + Tab: move to last element if at first
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
        // Tab: move to first element if at last
        else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    },
    [isActive, onEscape]
  )

  // Set up event listeners
  useEffect(() => {
    if (!isActive) return

    document.addEventListener("keydown", handleKeyDown)

    // Focus the first focusable element when trap activates
    if (containerRef.current) {
      const firstFocusable = containerRef.current.querySelector(
        FOCUSABLE_SELECTORS
      ) as HTMLElement

      if (firstFocusable) {
        // Small delay to ensure element is visible
        requestAnimationFrame(() => {
          firstFocusable.focus()
        })
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isActive, handleKeyDown])

  return containerRef
}
