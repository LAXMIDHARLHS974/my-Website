import { useEffect, useState } from "react";

/**
 * ScrollProgress Component
 * Renders a subtle, glowing neon gradient scroll indicator bar at the top of the viewport.
 * Automatically synchronizes with Lenis smooth scroll updates.
 */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = (scrollVal) => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const current = typeof scrollVal === "number" ? scrollVal : window.scrollY;
      const scrolled = (current / totalHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };

    const handleWindowScroll = () => updateProgress();

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    updateProgress();

    // Bind to Lenis smooth scroll updates
    let lenisUnsubscribe = null;
    const lenisPoll = setInterval(() => {
      if (window.__lenis) {
        clearInterval(lenisPoll);
        lenisUnsubscribe = window.__lenis.on("scroll", (e) => {
          updateProgress(e.scroll);
        });
      }
    }, 100);

    return () => {
      clearInterval(lenisPoll);
      if (lenisUnsubscribe) lenisUnsubscribe();
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.85)] transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
