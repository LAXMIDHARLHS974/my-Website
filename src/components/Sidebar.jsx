import { House } from "lucide-react";
import { FolderOpenDot } from 'lucide-react';
import { Terminal } from 'lucide-react';
import { ContactRound } from 'lucide-react';

const Sidebar = () => {
  return (

    <div className="fixed left-5 top-5 z-50">

      <div className="flex h-[calc(50vh-40px)] w-20 flex-col items-center rounded-4xl border border-violet-400/40 bg-[#080611]/95 px-4 py-5 text-white shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md gap-10">
        <h1 className="">LHS</h1>
        <a className="transition-colors hover:text-fuchsia-400" href="#home">
          <House size={30} strokeWidth={1.8} />
        </a>
        <a className="transition-colors hover:text-fuchsia-400" href="#projects">
          <FolderOpenDot size={30} strokeWidth={1.8} />
        </a>
        <a className="transition-colors hover:text-fuchsia-400" href="#tech">
          <Terminal size={30} strokeWidth={1.8} />
        </a>
        <a className="transition-colors hover:text-fuchsia-400" href="#contact">
          <ContactRound size={30} strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
