import { useState } from "react";
import proImage from "../img/pro.jpg";
import cgImage from "../img/cg.jpeg";
import agriImage from "../img/agri.jpg";
import dashboardImage from "../img/dashboard.jpg";
import springbootImage from "../img/springboot.jpg";
import javaDsaImage from "../img/java_dsa.jpg";
import opensourceImage from "../img/opensource.jpg";
import Card from "../components/Card";
import ScrollReveal from "../components/ScrollReveal";

const projectsData = [
  {
    pimg: cgImage,
    pName: "CodeGuard AI",
    pDec: "AI-powered automated code vulnerability scanner and intelligent security insights engine.",
    pt1: "React",
    pt2: "AI / ML",
    pt3: "Node.js",
    categories: ["Web App", "AI / ML"],
    gitLink: "https://github.com/LAXMIDHARLHS974/codeguard-ai",
    projectLink: "https://codeguard-lhs.onrender.com/",
  },
  {
    pimg: agriImage,
    pName: "AgriConnect",
    pDec: "Smart agricultural IoT platform connecting farmers directly with real-time market data.",
    pt1: "React",
    pt2: "Spring Boot",
    pt3: "MySQL",
    categories: ["Web App", "Java", "Spring Boot"],
    gitLink: "https://github.com/LAXMIDHARLHS974/AgriConnect",
    projectLink: "https://agri-connect-one-delta.vercel.app/",
  },
  {
    pimg: dashboardImage,
    pName: "Study Analytics Dashboard",
    pDec: "Interactive productivity dashboard with study metrics, habit analytics, and visual charts.",
    pt1: "React",
    pt2: "Charts",
    pt3: "Tailwind CSS",
    categories: ["Web App"],
    gitLink: "https://github.com/LAXMIDHARLHS974/Study-Analytics-Dashboard",
    projectLink: "https://anonymous-nhxd.onrender.com/",
  },
  {
    pimg: javaDsaImage,
    pName: "Student Record Management",
    pDec: "Enterprise RESTful microservices with PostgreSQL, JPA specifications, and JWT auth.",
    pt1: "Spring Boot",
    pt2: "PostgreSQL",
    pt3: "REST API",
    categories: ["Java", "Spring Boot"],
    gitLink: "https://github.com/LAXMIDHARLHS974/Student-Record-Management-System",
    projectLink: "https://student-record-management-system-brf8.onrender.com/api/students",
  },
  {
    pimg: springbootImage,
    pName: "Spring Boot",
    pDec: "Comprehensive suite of data structures, graph theory, sorting, and concurrent solvers.",
    pt1: "Java",
    pt2: "DSA",
    pt3: "Backend",
    categories: ["Java", "Open Source"],
    gitLink: "https://github.com/LAXMIDHARLHS974",
    projectLink: "https://github.com/LAXMIDHARLHS974",
  },
  {
    pimg: opensourceImage,
    pName: "Open Source Ecosystem",
    pDec: "Modular developer utilities, starter templates, and community open-source repositories.",
    pt1: "TypeScript",
    pt2: "Open Source",
    pt3: "Learning",
    categories: ["Open Source", "Web App"],
    gitLink: "https://github.com/LAXMIDHARLHS974/Spring-First-App",
    projectLink: "https://github.com/LAXMIDHARLHS974",
  },
];

const categories = [
  "All",
  "Web App",
  "Java",
  "Spring Boot",
  "AI / ML",
  "Open Source",
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.categories?.includes(activeCategory));

  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="relative flex min-h-screen w-full flex-col justify-center bg-cover bg-center pt-20 pb-16 px-4 sm:px-6 lg:py-8 lg:pl-36 lg:pr-12 xl:pl-44 xl:pr-16"
        style={{ backgroundImage: `url(${proImage})` }}
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl xl:max-w-[1380px]">
          {/* Streamlined Header & Interactive Category Filter Pills */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="mb-4 xl:mb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-3.5">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  Selected <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
                </h1>

                <p className="mt-1 max-w-xl text-sm sm:text-base text-gray-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                  A collection of my recent work, built with passion and a focus on real-world impact.
                </p>
              </div>

              {/* Functional Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-xl px-3 py-1 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "border border-pink-400 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] scale-105"
                          : "border border-violet-400/30 bg-white/[0.04] text-gray-300 backdrop-blur-sm hover:scale-105 hover:border-fuchsia-400/60 hover:bg-white/[0.08] hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* 6 Cards*/}
          <div className="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={project.pName}
                animation="fade-up"
                delay={((idx % 3) + 1) * 100}
                duration={600}
                className="h-full"
              >
                <Card
                  pimg={project.pimg}
                  pName={project.pName}
                  pDec={project.pDec}
                  pt1={project.pt1}
                  pt2={project.pt2}
                  pt3={project.pt3}
                  gitLink={project.gitLink}
                  projectLink={project.projectLink}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
