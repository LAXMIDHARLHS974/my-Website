import Sidebar from "./components/Sidebar";
import ScrollProgress from "./components/ScrollProgress";
import SmoothScroll from "./components/SmoothScroll";
import ContactSection from "./sections/ContactSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechSection from "./sections/TechSection";

const App = () => {
  return (
    <div className="relative">
      <SmoothScroll />
      <ScrollProgress />
      <Sidebar />
      <HomeSection />
      <ProjectsSection />
      <TechSection />
      <ContactSection />
    </div>
  );
};

export default App