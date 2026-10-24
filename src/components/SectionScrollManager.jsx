import { useEffect, useRef } from "react";

const SECTIONS = [
  { id: "home", name: "Home" },
  { id: "projects", name: "Projects" },
  { id: "tech", name: "Technologies" },
  { id: "contact", name: "Contact" },
];

/**
 * SectionScrollManager
 * Snappy full-page scroll transitions with an ultra-fast 0.05s (50ms) hold,
 * keeping page navigation fast, fluid, and responsive without prolonged scroll-locking.
 */
const SectionScrollManager = () => {
  const isLockedRef = useRef(false);
  const currentIndexRef = useRef(0);
  const touchStartY = useRef(0);
  const unlockTimerRef = useRef(null);

  useEffect(() => {
    // Determine the current active section based on scroll offset
    const getActiveSectionIndex = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          return i;
        }
      }
      return 0;
    };

    currentIndexRef.current = getActiveSectionIndex();

    // 0.05s (50ms) hold transition
    const navigateToSection = (targetIndex, holdDuration = 50) => {
      if (targetIndex < 0 || targetIndex >= SECTIONS.length) return;

      const target = SECTIONS[targetIndex];
      const el = document.getElementById(target.id);
      if (!el) return;

      currentIndexRef.current = targetIndex;
      isLockedRef.current = true;

      el.scrollIntoView({ behavior: "smooth" });

      clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = setTimeout(() => {
        isLockedRef.current = false;
      }, holdDuration);
    };

    // Handle mouse wheel transitions
    const handleWheel = (e) => {
      if (isLockedRef.current) {
        e.preventDefault();
        return;
      }

      if (Math.abs(e.deltaY) < 15) return;

      const currentIdx = getActiveSectionIndex();

      if (e.deltaY > 15) {
        // Scrolling down -> advance to next section
        if (currentIdx < SECTIONS.length - 1) {
          e.preventDefault();
          navigateToSection(currentIdx + 1, 50);
        }
      } else if (e.deltaY < -15) {
        // Scrolling up -> move to previous section
        if (currentIdx > 0) {
          e.preventDefault();
          navigateToSection(currentIdx - 1, 50);
        }
      }
    };

    // Handle touch swipe transitions
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isLockedRef.current) {
        e.preventDefault();
        return;
      }

      const deltaY = touchStartY.current - e.touches[0].clientY;
      if (Math.abs(deltaY) < 25) return;

      const currentIdx = getActiveSectionIndex();

      if (deltaY > 25) {
        if (currentIdx < SECTIONS.length - 1) {
          e.preventDefault();
          navigateToSection(currentIdx + 1, 50);
        }
      } else if (deltaY < -25) {
        if (currentIdx > 0) {
          e.preventDefault();
          navigateToSection(currentIdx - 1, 50);
        }
      }
    };

    // Handle keyboard arrow keys
    const handleKeyDown = (e) => {
      if (isLockedRef.current) {
        if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Space"].includes(e.code)) {
          e.preventDefault();
        }
        return;
      }

      const currentIdx = getActiveSectionIndex();

      if (["ArrowDown", "PageDown", "Space"].includes(e.code)) {
        if (currentIdx < SECTIONS.length - 1) {
          e.preventDefault();
          navigateToSection(currentIdx + 1, 50);
        }
      } else if (["ArrowUp", "PageUp"].includes(e.code)) {
        if (currentIdx > 0) {
          e.preventDefault();
          navigateToSection(currentIdx - 1, 50);
        }
      }
    };

    // Handle navigation links in sidebar/navbar
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const targetId = href.slice(1);
      const targetIdx = SECTIONS.findIndex((s) => s.id === targetId);

      if (targetIdx !== -1) {
        isLockedRef.current = false;
        clearTimeout(unlockTimerRef.current);
        setTimeout(() => {
          navigateToSection(targetIdx, 50);
        }, 50);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((a) => a.addEventListener("click", handleAnchorClick));

    return () => {
      clearTimeout(unlockTimerRef.current);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      anchorLinks.forEach((a) => a.removeEventListener("click", handleAnchorClick));
    };
  }, []);

  return null;
};

export default SectionScrollManager;
