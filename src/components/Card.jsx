import { ExternalLink } from "lucide-react";
function card(props) {
  return (
    <div>
      <div className="rounded-xl border border-violet-400/40 bg-[#080611]/90 p-4">
        <img
          src={props.pimg}
          alt="project Img"
          className="h-20 w-full rounded-lg border border-violet-400/20 object-cover"
        />

        <div className="flex justify-between">
          <h2 className="mt-3 text-xl font-bold text-white">{props.pName}</h2>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={props.gitLink}
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub repository"
              className="rounded-lg border border-violet-400/40 p-2 text-white transition hover:border-fuchsia-400 hover:text-fuchsia-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="#FFFFFF"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href={props.projectLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Open live project"
              className="rounded-lg border border-violet-400/40 p-2 text-white transition hover:border-fuchsia-400 hover:text-fuchsia-400"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-300">{props.pDec}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md border border-violet-400/30 px-2 py-1 text-xs text-purple-200">
            {props.pt1}
          </span>
          <span className="rounded-md border border-violet-400/30 px-2 py-1 text-xs text-purple-200">
            {props.pt2}
          </span>
          <span className="rounded-md border border-violet-400/30 px-2 py-1 text-xs text-purple-200">
            {props.pt3}
          </span>
        </div>
      </div>
    </div>
  );
}

export default card;
