import homeImage from "../img/home.jpg";
import heroImage from "../img/hero.jpg";

const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="relative flex min-h-screen w-full flex-col lg:flex-row items-center justify-center lg:justify-between bg-cover bg-center px-4 sm:px-8 pt-24 pb-16 lg:pl-36 lg:pr-16 xl:pl-44 xl:pr-24"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        {/* Mobile Avatar (Visible only on mobile/tablet) */}
        <div className="lg:hidden mb-6 hero-anim-avatar">
          <img
            src={heroImage}
            alt="Laxmidhar Sahoo"
            className="h-44 w-44 sm:h-56 sm:w-56 rounded-full border-2 border-fuchsia-400 object-cover shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex max-w-2xl flex-col gap-3.5 sm:gap-4 text-center lg:text-left">
          <div className="hero-anim-1">
            <p className="font-mono text-lg sm:text-2xl text-fuchsia-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]">
              Hello, I'm
            </p>
          </div>

          <div className="hero-anim-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Laxmidhar <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">Sahoo</span>
            </h1>
          </div>

          <div className="hero-anim-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal tracking-wide text-purple-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              Java Full Stack Developer
            </h2>
          </div>

          <div className="hero-anim-4">
            <p className="max-w-lg mx-auto lg:mx-0 text-base sm:text-lg lg:text-2xl leading-relaxed text-gray-300 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              I'm a passionate developer who loves turning ideas into real-world
              applications. I enjoy building modern, scalable and user-friendly
              web experiences using clean code and creative design.
            </p>
          </div>

          <div className="hero-anim-5">
            <div className="mt-2 sm:mt-4 flex items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <a
                href="https://github.com/LAXMIDHARLHS974"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-violet-300/50 p-3.5 sm:p-4 text-white transition-all hover:scale-105 hover:border-fuchsia-400 hover:text-fuchsia-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  fill="#FFFFFF"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/laxmidharsahoo974/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-violet-300/50 p-3.5 sm:p-4 text-white transition-all hover:scale-105 hover:border-fuchsia-400 hover:text-fuchsia-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  fill="#FFFFFF"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="mailto:laxmidharsahoo0974@gmail.com"
                aria-label="Email"
                className="rounded-xl border border-violet-300/50 p-3.5 sm:p-4 text-white transition-all hover:scale-105 hover:border-fuchsia-400 hover:text-fuchsia-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Avatar (Visible on lg and larger) */}
        <div className="hidden lg:block lg:relative z-10 hero-anim-avatar">
          <img
            src={heroImage}
            alt="Laxmidhar Sahoo"
            className="h-80 w-80 xl:h-105 xl:w-105 rounded-full border-2 border-fuchsia-400 object-cover shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
