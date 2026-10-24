import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for smooth scroll-triggered reveal animations using IntersectionObserver.
 * Triggers when the element enters the viewport with optional threshold and delay.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, unobserve unless re-trigger on exit is explicitly desired
          if (!options.retrigger) {
            observer.unobserve(element);
          }
        } else if (options.retrigger) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.retrigger]);

  return [ref, isVisible];
}
