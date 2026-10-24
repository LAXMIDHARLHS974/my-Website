import proImage from "../img/pro.jpg";
import Card from "../components/Card";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div
        className="relative flex min-h-screen items-start overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${proImage})` }}
      >
        <div className="ml-40 w-full mt-10">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white">
              Selected <span className="text-fuchsia-400">Projects</span>
            </h1>

            <p className="mt-2 max-w-xl text-xl leading-8 text-gray-300">
              A collection of my recent work, built with passion and a focus on
              real-world impact.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "All",
                "Web App",
                "Java",
                "Spring Boot",
                "AI / ML",
                "Open Source",
              ].map((category) => (
                <button
                  key={category}
                  className="rounded-xl border border-violet-400/40 px-5 py-2 text-white transition hover:border-fuchsia-400 hover:text-fuchsia-400"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid w-full max-w-6xl grid-cols-1 items-stretch gap-3 md:grid-cols-2 xl:grid-cols-3">
            {/* 1. CodeGuard AI */}
            <Card
            pimg='https://imgs.search.brave.com/3H0ee3aYvvaM2jNTG8ar1sZU0VJFi9laR8IWvV4RNpQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb2Rl/Z3VhcmQuY29tL3dw/LWNvbnRlbnQvdGhl/bWVzL2NvZGVndWFy/ZF9iYXNlL2ltYWdl/cy9iZ19wYXJ0My5w/bmc'
              pName="CodeGuard AI"
              pDec="AI-powered code analysis and security insights for developers."
              pt1="React"
              pt2="AI"
              pt3="Node.js"
              gitLink="https://github.com/LAXMIDHARLHS974/codeguard-ai"
              projectLink="https://codeguard-lhs.onrender.com/"
            />

            {/* 2. AgriConnect */}
            <Card
            pimg='https://imgs.search.brave.com/o__BSePuz8-tT-qpFS1ydwI2VgkyR4zYyJmJiOVocVc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZ3Jp/Y29ubmVjdGlvbi5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDEvbG9n/by1hZ3JpLWRhcmsu/c3Zn'
              pName="AgriConnect"
              pDec="Full-stack platform connecting farmers with better opportunities."
              pt1="React"
              pt2="Spring Boot"
              pt3="MySQL"
              gitLink="https://github.com/LAXMIDHARLHS974/AgriConnect"
              projectLink="https://agri-connect-one-delta.vercel.app/"
            />

            {/* 3. Student Study Dashboard */}
            <Card
              pimg='https://imgs.search.brave.com/wZcOcPysdAb_tLoSWzt0F40Wq3lYfXinQav_-nKpb4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MTI1NzkyNTMvZmls/ZS9vcmlnaW5hbC1l/NmViMTY3OGQ2ZmVm/MjRhOTgyNGVkODAw/YjU4Y2U3OC5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy'
              pName="Student Study Dashboard"
              pDec="Student productivity and learning analytics dashboard."
              pt1="React"
              pt2="Charts"
              pt3="Tailwind CSS"
              gitLink="https://github.com/LAXMIDHARLHS974"
              projectLink="https://laxmidharLHS974.github.io/student-study-dashboard/"
            />

            {/* 4. Spring Boot APIs */}
            <Card
            pimg='https://imgs.search.brave.com/GlkUbxaajf_27itAxleEQj7q3AS1lThUk0miELk5gsc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvOTk1/NDI0OC5wbmc'
              pName="Spring Boot APIs"
              pDec="RESTful APIs with real-world use cases and best practices."
              pt1="Spring Boot"
              pt2="PostgreSQL"
              pt3="REST API"
              gitLink="https://github.com/LAXMIDHARLHS974"
              projectLink="https://student-record-management-system-brf8.onrender.com/api/students"
            />

            {/* 5. Java Projects */}
            <Card
            pimg='https://imgs.search.brave.com/T9FcRiHcirp9I3PQ6aH1LJlcaGkp1TZBMnQ981nqnak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzYwLzUzLzQx/LzM2MF9GXzc2MDUz/NDE1OV9zMGFyZ2Y0/RE55b1Y2Q2VrVUJu/b0RVYkRaZm5FaEJ5/Yy5qcGc'
              pName="Java Projects"
              pDec="Collection of Java-based problem-solving and mini projects."
              pt1="Java"
              pt2="DSA"
              pt3="Backend"
              gitLink="https://github.com/LAXMIDHARLHS974"
              projectLink="https://github.com/LAXMIDHARLHS974"
            />

            {/* 6. More Work */}
            <Card
            pimg='https://imgs.search.brave.com/8Z7EejS1XnCe6H9hR0LGE0RKTnhc2bs8Fs-vfMxrqnE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODE1/NzAzMzEyL3Bob3Rv/L2JyYXZlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz04QVkx/bG1nd3RPNkc0RmdP/U2RlRTVEMmhacGdF/MVBTcWtXRGNKdWFL/bjk4PQ'
              pName="More Work"
              pDec="Explore more projects and experiments on GitHub."
              pt1="Various"
              pt2="Open Source"
              pt3="Learning"
              gitLink="https://github.com/LAXMIDHARLHS974"
              projectLink="https://github.com/LAXMIDHARLHS974"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
