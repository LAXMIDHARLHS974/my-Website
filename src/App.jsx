import Sidebar from "./components/Sidebar";
import ContactSection from "./sections/ContactSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechSection from "./sections/TechSection";
const App = () => {
  return (
    <div>
      <Sidebar />
      <HomeSection />
      <ProjectsSection />
      <TechSection />
      <ContactSection />
    </div>
  )
}

export default App