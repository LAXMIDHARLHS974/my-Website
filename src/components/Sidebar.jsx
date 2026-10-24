import { useState, useEffect } from "react";
import { House, FolderOpenDot, Terminal, ContactRound } from "lucide-react";

const SECTIONS = ["home", "projects", "tech", "contact"];

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: House },
  { id: "projects", label: "Projects", icon: FolderOpenDot },
  { id: "tech", label: "Technologies", icon: Terminal },
  { id: "contact", label: "Contact", icon: ContactRound },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      // 1. If reached bottom of page, contact is active
      if (windowHeight + scrollY >= totalHeight - 90) {
        if (activeSection !== "contact") {
          setActiveSection("contact");
          if (window.location.hash !== "#contact") {
            window.history.replaceState(null, "", "#contact");
          }
        }
        return;
      }

      // 2. If at top of page, home is active
      if (scrollY < 120) {
        if (activeSection !== "home") {
          setActiveSection("home");
          if (window.location.hash !== "#home") {
            window.history.replaceState(null, "", "#home");
          }
        }
        return;
      }

      // 3. Check section positions (trigger when section crosses 38% of viewport)
      const triggerPoint = scrollY + windowHeight * 0.38;
      let current = "home";

      for (let i = 0; i < SECTIONS.length; i++) {
        const id = SECTIONS[i];
        const el = document.getElementById(id);
        if (el) {
          if (triggerPoint >= el.offsetTop) {
            current = id;
          }
        }
      }

      setActiveSection(current);
      const targetHash = `#${current}`;
      if (window.location.hash !== targetHash) {
        window.history.replaceState(null, "", targetHash);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveSection();

    // Also listen to Lenis smooth scroll updates
    let lenisUnsubscribe = null;
    const pollLenis = setInterval(() => {
      if (window.__lenis) {
        clearInterval(pollLenis);
        lenisUnsubscribe = window.__lenis.on("scroll", () => {
          handleScroll();
        });
      }
    }, 100);

    return () => {
      clearInterval(pollLenis);
      if (lenisUnsubscribe) lenisUnsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed z-50 transition-all duration-300
        /* Mobile & Tablet (< lg): horizontal floating navbar at the top */
        top-3 left-1/2 -translate-x-1/2 w-[92%] max-w-sm
        /* Desktop (lg+): vertical sidebar at the left */
        lg:top-5 lg:left-5 lg:translate-x-0 lg:w-20 lg:max-w-none"
    >
      <div
        className="flex items-center justify-between rounded-full border border-violet-400/40 bg-[#080611]/95 px-5 py-2.5 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md
          /* Desktop vertical layout: auto height that wraps icons perfectly without overflowing */
          lg:flex-col lg:h-auto lg:rounded-4xl lg:px-4 lg:py-6 lg:gap-8"
      >
        <h1 className="font-bold tracking-wider text-fuchsia-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] text-base lg:text-lg">
          LHS
        </h1>

        <div className="flex items-center gap-5 lg:flex-col lg:gap-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-label={item.label}
                className={`relative flex items-center justify-center rounded-xl p-1.5 transition-all duration-200 ${
                  isActive
                    ? "scale-115 text-fuchsia-400 drop-shadow-[0_0_14px_rgba(236,72,153,0.85)] bg-fuchsia-500/15"
                    : "text-gray-400 hover:scale-110 hover:text-white"
                }`}
              >
                <Icon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={isActive ? 2.2 : 1.8} />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
