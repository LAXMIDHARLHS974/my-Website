import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const SECTIONS = ["home", "projects", "tech", "contact"];

/**
 * SmoothScroll Component
 * Integrates Lenis for buttery-smooth inertial scrolling
 * with guaranteed full-page locking in both forward AND reverse directions.
 */
const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      syncTouch: true,
      syncTouchLerp: 0.08,
      infinite: false,
    });

    window.__lenis = lenis;

    let currentIndex = 0;
    let isTransitioning = false;
    let lastWheelTime = 0;
    let wheelGestureActive = false;

    // Robust section detector taking viewport height and document boundaries into account
    const getCurrentSectionIndex = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      // 1. Reached bottom of page -> contact
      if (windowHeight + scrollY >= totalHeight - 90) {
        return SECTIONS.length - 1;
      }

      // 2. At top of page -> home
      if (scrollY < 120) {
        return 0;
      }

      // 3. Mid-page: trigger point at 40% of viewport
      const triggerPoint = scrollY + windowHeight * 0.4;
      let currentIdx = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && triggerPoint >= el.offsetTop) {
          currentIdx = i;
        }
      }
      return currentIdx;
    };

    // Initialize current index from current scroll position
    currentIndex = getCurrentSectionIndex();

    // Smoothly scroll to a specific section by index
    const goToSection = (index) => {
      const targetIndex = Math.max(0, Math.min(index, SECTIONS.length - 1));
      const targetId = SECTIONS[targetIndex];
      const targetEl = document.getElementById(targetId);

      if (!targetEl) return;

      currentIndex = targetIndex;
      isTransitioning = true;

      const targetHash = `#${targetId}`;
      if (window.location.hash !== targetHash) {
        window.history.replaceState(null, "", targetHash);
      }

      const isMobile = window.innerWidth < 1024;
      lenis.scrollTo(targetEl, {
        offset: isMobile ? -70 : 0,
        lock: true, // Prevents subsequent wheel events from overriding this transition
        duration: 0.85,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        onComplete: () => {
          setTimeout(() => {
            isTransitioning = false;
            currentIndex = getCurrentSectionIndex();
          }, 60);
        },
      });

      // Safety timeout to ensure isTransitioning is reset even if interrupted
      setTimeout(() => {
        isTransitioning = false;
      }, 1050);
    };

    // Full-page wheel navigation on desktop (forward & reverse)
    const handleWheel = (e) => {
      // Safe check: Allow natural interaction inside inputs, textareas, etc.
      if (e.target?.closest && e.target.closest("input, textarea, select, button")) {
        return;
      }

      // On mobile (< 1024px), preserve natural touch scrolling
      if (window.innerWidth < 1024) return;

      // Prevent native raw jump and prevent Lenis from overriding full-page snap
      e.preventDefault();
      e.lenisStopPropagation = true;

      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTime;
      lastWheelTime = now;

      // If user paused for > 220ms, the previous gesture train has ended
      if (timeSinceLastWheel > 220) {
        wheelGestureActive = false;
      }

      // If currently animating or part of the same gesture, ignore extra ticks
      if (isTransitioning || wheelGestureActive) {
        return;
      }

      // Ignore micro-jitters
      if (Math.abs(e.deltaY) < 18) return;

      // Mark current gesture train as active so inertia won't double-jump
      wheelGestureActive = true;

      // Re-sync current index with actual viewport position before deciding direction
      currentIndex = getCurrentSectionIndex();

      if (e.deltaY > 0) {
        // Forward scroll (downwards)
        if (currentIndex < SECTIONS.length - 1) {
          goToSection(currentIndex + 1);
        }
      } else if (e.deltaY < 0) {
        // Reverse scroll (upwards)
        if (currentIndex > 0) {
          goToSection(currentIndex - 1);
        }
      }
    };

    // Full-page keyboard navigation (ArrowDown, ArrowUp, PageDown, PageUp)
    const handleKeyDown = (e) => {
      if (e.target?.closest && e.target.closest("input, textarea, select")) return;
      if (window.innerWidth < 1024) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        currentIndex = getCurrentSectionIndex();
        if (currentIndex < SECTIONS.length - 1) {
          goToSection(currentIndex + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        currentIndex = getCurrentSectionIndex();
        if (currentIndex > 0) {
          goToSection(currentIndex - 1);
        }
      }
    };

    // Handle anchor links (#home, #projects, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target?.closest && e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute("href");
      if (targetId && targetId.length > 1) {
        const id = targetId.replace("#", "");
        const targetIdx = SECTIONS.indexOf(id);
        if (targetIdx !== -1) {
          e.preventDefault();
          goToSection(targetIdx);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleAnchorClick);

    // Initial load with hash in URL
    if (window.location.hash && window.location.hash.length > 1) {
      const initialId = window.location.hash.replace("#", "");
      const initialIdx = SECTIONS.indexOf(initialId);
      if (initialIdx !== -1) {
        setTimeout(() => {
          goToSection(initialIdx);
        }, 150);
      }
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;
