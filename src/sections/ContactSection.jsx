import { useState } from "react";
import conImage from "../img/con.jpeg";
import { Mail, MapPin, Send, User, FileText, Monitor } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const ContactSection = () => {
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbdbrqle", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false });
        form.reset();
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false });
        }, 5000);
      } else {
        setStatus({ submitting: false, submitted: false, error: true });
      }
    } catch {
      // Fallback: submit natively if fetch is blocked
      form.submit();
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full overflow-hidden">
      {/* Background with conImage */}
      <div
        className="relative flex min-h-screen w-full flex-col justify-start bg-cover bg-center bg-no-repeat pt-20 pb-20 px-4 sm:px-6 lg:pt-14 lg:pb-24 lg:pl-36 lg:pr-12 xl:pl-40 xl:pr-14"
        style={{ backgroundImage: `url(${conImage})` }}
      >
        {/* Ambient floating sakura petals */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute top-[20%] left-[28%] h-3 w-2 rotate-45 rounded-full bg-pink-400/40 blur-[0.5px] animate-pulse" />
          <span className="absolute top-[35%] left-[52%] h-3.5 w-2 -rotate-12 rounded-full bg-pink-300/40 blur-[0.5px]" />
          <span className="absolute top-[18%] right-[22%] h-2.5 w-1.5 rotate-12 rounded-full bg-pink-400/50" />
          <span className="absolute top-[48%] right-[10%] h-3 w-2 rotate-45 rounded-full bg-pink-300/40" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col">
          {/* 2-Column Grid: Left (Info & Quote) | Right (Form) */}
          <div className="grid grid-cols-1 items-start gap-6 md:gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            {/* LEFT COLUMN: Header, 4 Contact Cards, Quote Box (col-span-7) */}
            <div className="flex flex-col lg:col-span-7">
              {/* Heading with scroll animation */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-6xl">
                    Let's Build Something{" "}
                    <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                      Meaningful.
                    </span>
                  </h2>

                  {/* Subtitle */}
                  <p className="mt-3 max-w-lg font-mono text-xs leading-relaxed text-gray-200 drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] sm:text-sm">
                    Have an idea, a project, or just want to say hi?
                    <br />
                    I'd love to hear from you. Let's connect and create something amazing together.
                  </p>
                </div>
              </ScrollReveal>

              {/* 4 Contact Info Cards: Hidden on mobile (< lg), visible in 2x2 grid on desktop (lg+) */}
              <div className="mt-7 hidden lg:grid grid-cols-1 gap-3.5 sm:grid-cols-2 max-w-xl">
                {/* 1. Email Me */}
                <ScrollReveal animation="fade-up" delay={120}>
                  <a
                    href="mailto:laxmidharsahoo0974@gmail.com"
                    className="group flex h-full items-start gap-3.5 rounded-2xl border border-purple-400/30 bg-white/[0.05] p-4 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.09] hover:shadow-[0_0_30px_rgba(236,72,153,0.22)]"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-pink-500/40 bg-pink-500/10 text-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.3)] transition-transform duration-200 group-hover:scale-110">
                      <Mail size={20} strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                        Email Me
                      </h3>
                      <p className="truncate text-xs font-mono text-gray-200 transition-colors group-hover:text-pink-300">
                        laxmidharsahoo0974@gmail.com
                      </p>
                      <p className="mt-0.5 text-[11px] text-purple-200/60">
                        I usually reply within 24 hours.
                      </p>
                    </div>
                  </a>
                </ScrollReveal>

                {/* 2. GitHub */}
                <ScrollReveal animation="fade-up" delay={200}>
                  <a
                    href="https://github.com/LAXMIDHARLHS974"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-start gap-3.5 rounded-2xl border border-purple-400/30 bg-white/[0.05] p-4 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.09] hover:shadow-[0_0_30px_rgba(236,72,153,0.22)]"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/10 text-white shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-transform duration-200 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                        GitHub
                      </h3>
                      <p className="truncate text-xs font-mono text-gray-200 transition-colors group-hover:text-pink-300">
                        github.com/LAXMIDHARLHS974
                      </p>
                      <p className="mt-0.5 text-[11px] text-purple-200/60">
                        Check out my projects.
                      </p>
                    </div>
                  </a>
                </ScrollReveal>

                {/* 3. LinkedIn */}
                <ScrollReveal animation="fade-up" delay={280}>
                  <a
                    href="https://www.linkedin.com/in/laxmidharsahoo974/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-start gap-3.5 rounded-2xl border border-purple-400/30 bg-white/[0.05] p-4 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.09] hover:shadow-[0_0_30px_rgba(236,72,153,0.22)]"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-500/10 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-transform duration-200 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                        LinkedIn
                      </h3>
                      <p className="truncate text-xs font-mono text-gray-200 transition-colors group-hover:text-pink-300">
                        linkedin.com/in/laxmidhar-sahoo
                      </p>
                      <p className="mt-0.5 text-[11px] text-purple-200/60">
                        Let's connect professionally.
                      </p>
                    </div>
                  </a>
                </ScrollReveal>

                {/* 4. Location */}
                <ScrollReveal animation="fade-up" delay={360}>
                  <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-purple-400/30 bg-white/[0.05] p-4 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.09] hover:shadow-[0_0_30px_rgba(236,72,153,0.22)]">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.3)] transition-transform duration-200 group-hover:scale-110">
                      <MapPin size={20} strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                        Location
                      </h3>
                      <p className="text-xs font-mono text-gray-200">
                        Odisha, India
                      </p>
                      <p className="mt-0.5 text-[11px] text-purple-200/60">
                        Open to remote opportunities.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Quote Box on Bottom Left */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="mt-4 md:mt-6 max-w-xl rounded-2xl border border-purple-400/30 bg-white/[0.05] px-6 py-4 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.12)] transition-all duration-300 hover:border-pink-500/50">
                  <span className="select-none font-serif text-2xl font-bold leading-none text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                    “
                  </span>
                  <p className="mt-1 font-mono text-xs leading-snug text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] sm:text-sm">
                    Great ideas start with a simple conversation.
                  </p>
                  <div className="mt-2.5 h-[2px] w-8 rounded-full bg-pink-500/80 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: Contact Form Card (moved down for balanced vertical alignment) */}
            <ScrollReveal
              animation="fade-up"
              delay={250}
              className="w-full lg:col-span-5 lg:pt-24 xl:pt-36"
            >
              {/* Form Card */}
              <div className="relative w-full rounded-3xl border border-purple-400/30 bg-white/[0.05] p-6 backdrop-blur-md shadow-[0_0_35px_rgba(168,85,247,0.15)] transition-all duration-300 hover:border-pink-500/50 sm:p-7">
                {/* Form Header */}
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                      <Monitor size={28} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      Send Me{" "}
                      <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                        Message
                      </span>
                    </h3>
                  </div>

                  {/* Window decorative dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-pink-500/60 shadow-[0_0_6px_rgba(236,72,153,0.8)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-purple-500/60 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500/60 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                  </div>
                </div>

                {/* Form inputs connected to Formspree */}
                <form
                  action="https://formspree.io/f/xbdbrqle"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="mt-4 flex flex-col gap-3.5"
                >
                  {/* Name Input */}
                  <div className="relative flex items-center rounded-xl border border-purple-400/30 bg-black/25 px-3.5 py-3 transition-all duration-200 focus-within:border-pink-500 focus-within:ring-1 focus-within:ring-pink-500 hover:border-purple-400/50">
                    <User size={18} className="mr-3 flex-shrink-0 text-purple-300/70" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative flex items-center rounded-xl border border-purple-400/30 bg-black/25 px-3.5 py-3 transition-all duration-200 focus-within:border-pink-500 focus-within:ring-1 focus-within:ring-pink-500 hover:border-purple-400/50">
                    <Mail size={18} className="mr-3 flex-shrink-0 text-purple-300/70" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative flex items-start rounded-xl border border-purple-400/30 bg-black/25 px-3.5 py-3 transition-all duration-200 focus-within:border-pink-500 focus-within:ring-1 focus-within:ring-pink-500 hover:border-purple-400/50">
                    <FileText size={18} className="mr-3 mt-0.5 flex-shrink-0 text-purple-300/70" />
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="Your Message"
                      className="w-full resize-none bg-transparent text-sm text-white placeholder-gray-400 outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 py-3.5 px-6 font-semibold text-white shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Send size={18} className="text-white" />
                    <span className="text-sm tracking-wide">
                      {status.submitting ? "Sending..." : "Send Message →"}
                    </span>
                  </button>

                  {status.submitted && (
                    <p className="mt-1 text-center font-mono text-xs text-green-400 animate-pulse">
                      ✓ Thank you! Your message has been sent successfully.
                    </p>
                  )}
                  {status.error && (
                    <p className="mt-1 text-center font-mono text-xs text-red-400">
                      ✕ Oops! There was a problem sending your message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
