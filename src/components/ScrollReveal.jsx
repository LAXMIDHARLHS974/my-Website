import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Smoothly animates child elements when they scroll into the viewport.
 * Features:
 * - Immediate viewport check on mount
 * - Reliable IntersectionObserver
 * - Safety fallback timeout so elements NEVER remain hidden
 */
const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.05,
  rootMargin = "0px 0px 40px 0px",
  className = "",
  style = {},
  as = "div",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Safety fallback: ensure element is visible within 1.2s no matter what
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200 + delay);

    // 1. Immediate check if already inside viewport on mount
    try {
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsVisible(true);
        clearTimeout(safetyTimer);
        return;
      }
    } catch {
      setIsVisible(true);
      clearTimeout(safetyTimer);
      return;
    }

    // 2. IntersectionObserver for elements entering viewport on scroll
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      clearTimeout(safetyTimer);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setIsVisible(true);
            clearTimeout(safetyTimer);
            observer.unobserve(node);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay]);

  // Initial hidden states depending on animation type
  const getHiddenClasses = () => {
    switch (animation) {
      case "fade-down":
        return "opacity-0 -translate-y-8";
      case "fade-left":
        return "opacity-0 -translate-x-8";
      case "fade-right":
        return "opacity-0 translate-x-8";
      case "zoom-in":
        return "opacity-0 scale-95";
      case "fade":
        return "opacity-0";
      case "fade-up":
      default:
        return "opacity-0 translate-y-8";
    }
  };

  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";
  const Component = as;

  return (
    <Component
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      className={`transition-all ease-out will-change-transform will-change-[opacity] ${
        isVisible ? visibleClasses : getHiddenClasses()
      } ${className}`}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
