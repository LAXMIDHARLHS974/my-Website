import { useState } from "react";
import { ExternalLink } from "lucide-react";

function Card(props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="h-full">
      <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-violet-400/25 bg-[#0a0716]/85 p-4 xl:p-4.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:bg-[#120d24]/95 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]">
        <div>
          {/* Card Banner Image with Dark Vignette Overlay */}
          <div className="relative h-24 sm:h-28 xl:h-28 w-full overflow-hidden rounded-xl bg-purple-950/40">
            {!imgError ? (
              <img
                src={props.pimg}
                alt={props.pName || "Project Thumbnail"}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-900/40 to-pink-900/30">
                <span className="font-mono text-xs font-semibold text-fuchsia-300">
                  {props.pName}
                </span>
              </div>
            )}
            {/* Subtle Gradient Veil to make card look cohesive */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0716] via-transparent to-black/20" />
          </div>

          {/* Title and Actions Row */}
          <div className="mt-3 flex items-start justify-between gap-2.5">
            <h2 className="text-base sm:text-lg xl:text-xl font-bold text-white transition-colors group-hover:text-fuchsia-300 truncate">
              {props.pName}
            </h2>

            <div className="flex shrink-0 items-center gap-1.5">
              {props.gitLink && (
                <a
                  href={props.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  title="View GitHub Repository"
                  aria-label="View GitHub repository"
                  className="rounded-lg border border-violet-400/30 bg-white/[0.04] p-1.5 text-gray-300 transition-all hover:border-fuchsia-400 hover:bg-fuchsia-500/15 hover:text-white hover:shadow-[0_0_12px_rgba(236,72,153,0.4)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}

              {props.projectLink && (
                <a
                  href={props.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Open Live Preview"
                  aria-label="Open live project"
                  className="rounded-lg border border-violet-400/30 bg-white/[0.04] p-1.5 text-gray-300 transition-all hover:border-fuchsia-400 hover:bg-fuchsia-500/15 hover:text-white hover:shadow-[0_0_12px_rgba(236,72,153,0.4)]"
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Project Description (Clamped to 2 lines for uniform card heights) */}
          <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-gray-300 line-clamp-2">
            {props.pDec}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {props.pt1 && (
            <span className="rounded-md border border-violet-400/25 bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-purple-200">
              {props.pt1}
            </span>
          )}
          {props.pt2 && (
            <span className="rounded-md border border-violet-400/25 bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-purple-200">
              {props.pt2}
            </span>
          )}
          {props.pt3 && (
            <span className="rounded-md border border-violet-400/25 bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-purple-200">
              {props.pt3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
