import techImage from "../img/tech.jpeg";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

// Authentic Tech Brand SVGs
const TechIcons = {
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-full w-full flex-shrink-0">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FE" />
      <g stroke="#00D8FE" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 128 128" className="h-full w-full flex-shrink-0">
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path
        fill="#FFF"
        d="M74.8 77.3c2.4 4 6.7 6.6 12.6 6.6 5.5 0 9.1-2.8 9.1-7.1 0-4.4-3.6-6.4-10-9.1l-3.5-1.5c-9.5-4-15.1-8.8-15.1-18.4 0-13 10.3-20.7 24.6-20.7 10.4 0 17.9 3.6 22.8 12l-10.9 6.5c-2.3-4.3-5.5-6.3-11.2-6.3-5.2 0-8.5 2.8-8.5 6.7 0 4 2.8 5.8 8.8 8.4l3.5 1.5c11.2 4.7 16.7 9.8 16.7 19.5 0 14.4-10.8 21.6-26.4 21.6-13.6 0-21.7-6-26.2-15.1l13.7-8.1zM24 42.1h44.8v12.4H53.1v60.9H39.7V54.5H24V42.1z"
      />
    </svg>
  ),
  TailwindCSS: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  Vite: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <defs>
        <linearGradient id="viteGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="viteGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEA83" />
          <stop offset="8%" stopColor="#FFDD35" />
          <stop offset="100%" stopColor="#FFA800" />
        </linearGradient>
      </defs>
      <path fill="url(#viteGrad1)" d="m30.6 4.5-13.7 25a1 1 0 0 1-1.7 0L1.4 4.5a1 1 0 0 1 .9-1.5h27.4a1 1 0 0 1 .9 1.5z" />
      <path fill="url(#viteGrad2)" d="M19.9 2.1 9.3 15.6h5.8l-3.3 9.4 11.2-14.7h-5.9l2.8-8.2z" />
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0">
      <path fill="#E34F26" d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" />
      <path fill="#EF652A" d="M12 2v19.8l6.8-2.2 1.6-17.6H12z" />
      <path fill="#EBEBEB" d="M12 9.5H8.3l-.2-2.5h7.8V4.5H5.4l.8 9.5H12V9.5zm0 7.8l-3.7-1-.2-2.7H5.6l.4 5 6 1.7v-3z" />
      <path fill="#FFF" d="M12 9.5v4.5h3.4l-.3 3.6-3.1.9v2.5l5.9-1.6.8-9.9H12zm0-5v2.5h6.3l.2-2.5H12z" />
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0">
      <path fill="#1572B6" d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" />
      <path fill="#33A9DC" d="M12 2v19.8l6.8-2.2 1.6-17.6H12z" />
      <path fill="#EBEBEB" d="M12 9.5H8.3l-.2-2.5h7.8V4.5H5.4l.8 9.5H12V9.5zm0 7.8l-3.7-1-.2-2.7H5.6l.4 5 6 1.7v-3z" />
      <path fill="#FFF" d="M12 9.5v4.5h3.4l-.3 3.6-3.1.9v2.5l5.9-1.6.8-9.9H12zm0-5v2.5h6.3l.2-2.5H12z" />
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <path
        fill="#5382A1"
        d="M13.5 24.3s-1.8.1-1.3 1.3c.6 1.2 2.6 1.3 2.6 1.3s1.2-.2 1.8-.7c-.6-.2-1.9-.5-3.1-1.9zm1.3-4.5s-2.1.2-1.4 1.7c.6 1.3 3.2 1.2 3.2 1.2s1.3-.2 2.1-.8c-.7-.3-2.3-.5-3.9-2.1zm5.2 6.5s.8.6 1.8.4c1.1-.3 1.2-.9 1.2-.9s-1 .3-3-.5c-2.4-.9-5.7-.7-8.1.1-2.4.9-1 1.9-1 1.9s1.3-.3 3.3-.4c3.4-.2 5.8-.6 5.8-.6zm-8.8-13.6c.9 1 2.3 1.8 3.5 2.7.9.7 1.8 1.4 2.2 2.3.8 1.8-.4 3.4-.4 3.4s2.2-1.1 1.5-3.2c-.6-1.7-2.3-2.6-3.5-3.5-1.1-.8-2-1.7-1.3-3.2.7-1.4 2.4-2.2 2.4-2.2s-2 .6-2.9 2c-.8 1.1-.2 1.8-.5 1.7z"
      />
      <path
        fill="#E76F00"
        d="M21.9 21.6c1.8-1.5 2.5-3.4 1.2-4.9-1-1.2-2.7-1.4-2.7-1.4s.8.4 1.2 1.1c.7 1.2.2 2.2-.9 3.2-1.6 1.5-2.2 3.1-2.2 3.1s1.3-.1 2.7-1.1zm-4.7-13.7c1.3 1.3 1.9 2.9 1.1 4.5-.6 1.2-1.7 1.8-1.7 1.8s.7-.2 1.2-.8c.7-.9.7-2.1-.2-3.1-.9-1.1-1.3-2.3-.4-2.4z"
      />
      <path
        fill="#5382A1"
        d="M26.7 26.6c-1.3.9-3.9 1.6-6.4 1.7-3.9.2-8.3-.3-10.7-1.3-1.1-.5-1.7-.9-1.7-1.3 0-.6.9-1.2 2.4-1.6-.6-.5-1.4-.2-2.2.3-.9.6-1.1 1.4-.4 2.1 1.4 1.4 4.8 2.2 9 2.2 3.8 0 7.5-.7 9.8-1.9 1.2-.7 1.1-1.6.2-2.2z"
      />
    </svg>
  ),
  SpringBoot: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <path
        fill="#6DB33F"
        d="M28.4 14.1c-.2-.6-.6-1.2-1.1-1.6l-9.8-8.2c-.8-.7-1.9-1-3-.9-1.1.1-2.1.7-2.8 1.5L2.9 16.3c-1.1 1.3-1.3 3.1-.7 4.6.6 1.5 2 2.6 3.7 2.8l10.8 1.4c.5.1 1 .1 1.5 0 2.2-.4 3.9-2 4.4-4.1l1.5-6.2c.2-.7.2-1.4 0-2.1l3.3 2.8c.6.5 1 .7 1.4.6.4-.1.7-.5.7-1.1 0-.3-.1-.6-.4-.9zm-13.2 4.6c-.6.6-1.5.8-2.3.4-.8-.4-1.2-1.3-1-2.2.2-.9.9-1.6 1.8-1.7.9-.2 1.8.3 2.2 1.1.4.8.2 1.8-.7 2.4z"
      />
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <path fill="#5FA04E" d="M16 2.5 3 10v15l13 7.5 13-7.5V10L16 2.5z" />
      <path
        fill="#FFF"
        d="M16 11.5c-2.5 0-4.5 1.8-4.5 4.5s2 4.5 4.5 4.5c2.3 0 3.8-1.5 4.3-3.2h-2.3c-.4.8-1.1 1.3-2 1.3-1.3 0-2.3-1.1-2.3-2.6s1-2.6 2.3-2.6c.9 0 1.6.5 2 1.3h2.3c-.5-1.7-2-3.2-4.3-3.2z"
      />
    </svg>
  ),
  RestAPI: () => (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full flex-shrink-0"
      fill="none"
      stroke="#C084FC"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  JWT: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0">
      <path fill="#FB015B" d="M12 12V0C5.373 0 0 5.373 0 12h12z" />
      <path fill="#D63AFF" d="M12 12h12c0-6.627-5.373-12-12-12v12z" />
      <path fill="#00B9F1" d="M12 12v12c6.627 0 12-5.373 12-12H12z" />
      <path fill="#00F5FF" d="M12 12H0c0 6.627 5.373 12 12 12V12z" />
      <circle cx="12" cy="12" r="3.5" fill="#FFFFFF" />
    </svg>
  ),
  Maven: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <defs>
        <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EA254D" />
          <stop offset="50%" stopColor="#F89C1E" />
          <stop offset="100%" stopColor="#00AEEF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#featherGrad)"
        d="M26.2 3.8C20.6 6.5 16 11.2 13 16.5L8.5 25.2c-.4.8.2 1.8 1.1 1.7l3.6-.4c1.2-.1 2.3-.7 3-1.6l8.8-11.8c2.1-3 2.9-6.3 1.2-9.3z"
      />
      <path
        fill="#FFF"
        opacity="0.6"
        d="M17.4 12.3c-2.4 3.7-4.8 7.3-7.5 10.7l-1.4 3.9 4-1.3c3.2-3 6.1-6.4 8.7-10.1-.4-.8-1.9-1.9-3.8-3.2z"
      />
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <path
        fill="#00758F"
        d="M28.7 17.5c-.8-.4-1.8-.7-2.8-.7-.2-.9-.8-2-1.7-2.6-.9-.6-2.1-.7-3.1-.3-.6-.6-1.5-.9-2.3-.8-1.5.2-2.7 1.3-3.2 2.7-.9-.2-1.8-.1-2.6.3-.9.4-1.5 1.2-1.8 2.1-.9-.1-1.8.3-2.3 1-.6.7-.7 1.7-.3 2.5-.7.4-1.2 1.1-1.3 1.9-.1.8.3 1.7 1 2.2l.3.2c.4.3.9.4 1.4.3.5-.1.9-.4 1.2-.8.5-.7.5-1.6.1-2.4.6-.2 1.1-.6 1.4-1.2.3-.5.4-1.1.2-1.7.6-.2 1.1-.6 1.4-1.2.3-.5.4-1.1.2-1.7.7-.3 1.2-.9 1.4-1.6.2-.7.1-1.5-.3-2.1.8-.2 1.5-.1 2.2.4.6.4 1 1.1 1 1.9-.6.4-1 .9-1.2 1.6-.2.7-.1 1.5.3 2.1.6.8 1.6 1.2 2.6 1.1 1-.1 1.8-.7 2.2-1.6.4-.8.4-1.8-.1-2.6 1-.1 2 .2 2.8.7.8.6 1.3 1.4 1.5 2.4.3-.4.6-.9.8-1.4.2-.6.2-1.2 0-1.8z"
      />
      <path
        fill="#F29111"
        d="M12.4 22.8c-.3.4-.7.7-1.2.8-.5.1-1 0-1.4-.3l-.3-.2c-.7-.5-1.1-1.4-1-2.2.1-.8.6-1.5 1.3-1.9-.4-.8-.3-1.8.3-2.5.5-.7 1.4-1.1 2.3-1 .3-.9.9-1.7 1.8-2.1.8-.4 1.7-.5 2.6-.3-.3.6-.4 1.2-.2 1.7-.3.6-.8 1-1.4 1.2.2.6.1 1.2-.2 1.7-.3.6-.8 1-1.4 1.2.4.8.4 1.7-.1 2.4-.3.4-.7.7-1.2.8z"
      />
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <path
        fill="#336791"
        d="M16 2.5C8.5 2.5 2.5 8.5 2.5 16S8.5 29.5 16 29.5 29.5 23.5 29.5 16 23.5 2.5 16 2.5zm5.5 19.3c-.6.3-1.4.4-2.1.3-1.1-.2-2.1-.8-2.9-1.6-.7.7-1.6 1.2-2.6 1.5-.8.2-1.6.2-2.4-.1-.8-.3-1.4-.9-1.7-1.6-.5-1.2-.3-2.6.4-3.7.8-1.2 2-2 3.4-2.4-.1-.5-.2-1-.2-1.5 0-2.3 1.6-4.3 3.9-4.7 1.5-.3 3.1.2 4.1 1.3 1.1 1.1 1.6 2.7 1.3 4.2-.1.6-.3 1.2-.6 1.8 1 .8 1.6 2.1 1.6 3.4 0 1.5-.8 2.8-2.2 3.1z"
      />
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0">
      <path
        fill="#47A248"
        d="M12 0C11.6 0 11.2.2 10.9.5 9.7 1.7 5 6.9 5 13.5c0 4.1 2.8 7.9 6.6 8.9.2.1.5.1.7 0 3.8-1 6.6-4.8 6.6-8.9 0-6.6-4.7-11.8-5.9-13C12.7.2 12.4 0 12 0zm.6 21.8c-.4-.1-.7-.3-1-.6-.2-.2-.3-.5-.3-.8V12h1.4v9.8h-.1z"
      />
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0">
      <path fill="#FFA000" d="M3.9 18.2L7.3 3.1c.1-.5.7-.7 1-.3l3.7 6.8L3.9 18.2z" />
      <path fill="#F57C00" d="M14.6 9.4l-2.6-4.9c-.2-.4-.8-.4-1 0L3.9 18.2l10.7-8.8z" />
      <path fill="#FFCA28" d="M20.1 18.2L16.8 6.4c-.1-.4-.6-.6-.9-.3l-12 12.1 7.4 4.2c.4.2.9.2 1.3 0l7.5-4.2z" />
    </svg>
  ),
  Redis: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <path fill="#DC382D" d="M16 2 2.5 8.5 16 15l13.5-6.5L16 2zm0 8-8.5-4.1L16 3.8l8.5 4.1L16 10zm-13.5 5 13.5 6.5 13.5-6.5v4.5L16 24 2.5 17.5V15zm0 9 13.5 6.5 13.5-6.5v4.5L16 33 2.5 26.5V24z" />
    </svg>
  ),
  SQLite: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <path
        fill="#003B57"
        d="M27.5 7.5C25.2 5 21.3 4 16.5 4S7.8 5 5.5 7.5C3.2 10 2 13.3 2 17s1.2 7 3.5 9.5C7.8 29 11.7 30 16.5 30s8.7-1 11-3.5c2.3-2.5 3.5-5.8 3.5-9.5s-1.2-7-3.5-9.5zM16.5 27c-6.8 0-11-2.9-11-7.5s4.2-7.5 11-7.5 11 2.9 11 7.5-4.2 7.5-11 7.5z"
      />
      <path fill="#2392E0" d="M16.5 14c-4.4 0-7 1.8-7 4.5s2.6 4.5 7 4.5 7-1.8 7-4.5-2.6-4.5-7-4.5z" />
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0" fill="#F05032">
      <path d="M21.707 10.293l-8-8a.999.999 0 0 0-1.414 0l-1.586 1.586 2.536 2.536c.655-.23 1.424-.08 1.943.439.52.52.67 1.289.44 1.944l2.44 2.44c.655-.23 1.424-.08 1.943.439a2.003 2.003 0 0 1 0 2.828 2.003 2.003 0 0 1-2.828 0c-.52-.52-.67-1.289-.44-1.944l-2.38-2.38v5.36c.23.11.44.27.61.44a2.003 2.003 0 0 1 0 2.828 2.003 2.003 0 0 1-2.828 0 2.003 2.003 0 0 1 0-2.828c.2-.2.43-.34.68-.43v-5.46c-.25-.09-.48-.23-.68-.43-.52-.52-.67-1.289-.44-1.944L8.414 7.293l-6.121 6.121a.999.999 0 0 0 0 1.414l8 8a.999.999 0 0 0 1.414 0l9.999-10a1 1 0 0 0 .001-1.415z" />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0" fill="#FFFFFF">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 0 0 .186-.186V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zM23.7 10.93a5.53 5.53 0 0 0-2.317-.61c-.13-.01-.258 0-.387.017a4.195 4.195 0 0 0-3.32-1.748l-.348.006c-.15.003-.27.12-.27.27v2.32c0 .13.09.24.22.26 1.48.24 2.65 1.34 2.87 2.79.03.2.2.34.4.34h1.79c.66 0 1.27.27 1.72.71.1.1.25.12.37.05a2.535 2.535 0 0 0 1.25-2.19c0-.85-.43-1.6-1.07-2.06a.23.23 0 0 1-.09-.2zm-3.02 4.14c-.05 0-.1 0-.16-.01a3.86 3.86 0 0 1-2.94-2.87H.81c-.45 0-.81.36-.81.81 0 3.83 2.1 6.94 5.92 7.79 1.94.43 4.18.33 6.37-.29 3.09-.88 5.75-2.73 7.55-5.26.15-.21.05-.51-.19-.51v.34z" />
    </svg>
  ),
  VSCode: () => (
    <svg viewBox="0 0 24 24" className="h-full w-full flex-shrink-0">
      <path
        fill="#0065A9"
        d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.276a1 1 0 0 0-.004 1.488l3.666 3.327L.323 15.42a1 1 0 0 0 .004 1.488l1.322 1.217a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.24V3.947a1.5 1.5 0 0 0-.85-1.36z"
      />
      <path fill="#007ACC" d="M18.21.21a1.494 1.494 0 0 0-1.705.29L7.045 9.13l2.84 2.87 7.785-5.96V1.75c0-.68-.38-1.3-1.02-1.54l1.56-.002z" />
      <path fill="#1F9CF0" d="M17.67 18.04l-7.785-5.96-2.84 2.87 9.46 8.63c.48.44 1.13.56 1.705.29l1.56-.75v-4.32l-2.1.76z" />
      <path fill="#0065A9" d="M17.67 6.04v12l-6.22-6 6.22-6z" />
    </svg>
  ),
  Postman: () => (
    <svg viewBox="0 0 32 32" className="h-full w-full flex-shrink-0">
      <circle cx="16" cy="16" r="14" fill="#FF6C37" />
      <path
        fill="#FFF"
        d="M20.9 9.8c-.3-.3-.8-.3-1.1 0l-5.6 5.6-2.2-1.4c-.4-.2-.8-.2-1.1.1l-1.9 1.9c-.3.3-.3.8 0 1.1l3.5 3.5c.3.3.8.3 1.1 0l7.3-9.7c.3-.4.3-.9 0-1.1zM11 19.5l-2.1 2.1c-.2.2-.2.5 0 .7l1.4 1.4c.2.2.5.2.7 0l2.1-2.1L11 19.5zm9.5-6.8-5 5 1.8 1.8 5-5-1.8-1.8z"
      />
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 38 57" className="h-full w-full flex-shrink-0">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  ),
};

const techCategories = [
  {
    title: "Frontend",
    description: "Building responsive and modern user interfaces.",
    badge: "Interactive UI & Web Apps",
    icon: Monitor,
    col1: [
      { name: "React", Icon: TechIcons.React },
      { name: "Tailwind CSS", Icon: TechIcons.TailwindCSS },
      { name: "HTML5", Icon: TechIcons.HTML5 },
    ],
    col2: [
      { name: "TypeScript", Icon: TechIcons.TypeScript },
      { name: "Vite", Icon: TechIcons.Vite },
      { name: "CSS3", Icon: TechIcons.CSS3 },
    ],
  },
  {
    title: "Backend",
    description: "Creating robust and scalable APIs.",
    badge: "Scalable Microservices",
    icon: Server,
    col1: [
      { name: "Java", Icon: TechIcons.Java },
      { name: "Node.js", Icon: TechIcons.NodeJS },
      { name: "JWT", Icon: TechIcons.JWT },
    ],
    col2: [
      { name: "Spring Boot", Icon: TechIcons.SpringBoot },
      { name: "REST APIs", Icon: TechIcons.RestAPI },
      { name: "Maven", Icon: TechIcons.Maven },
    ],
  },
  {
    title: "Database",
    description: "Storing and managing data efficiently.",
    badge: "High Performance Data",
    icon: Database,
    col1: [
      { name: "MySQL", Icon: TechIcons.MySQL },
      { name: "MongoDB", Icon: TechIcons.MongoDB },
      { name: "Redis", Icon: TechIcons.Redis },
    ],
    col2: [
      { name: "PostgreSQL", Icon: TechIcons.PostgreSQL },
      { name: "Firebase", Icon: TechIcons.Firebase },
      { name: "SQLite", Icon: TechIcons.SQLite },
    ],
  },
  {
    title: "Tools & Others",
    description: "Tools that improve development workflow.",
    badge: "Modern DevOps Tools",
    icon: Wrench,
    col1: [
      { name: "Git", Icon: TechIcons.Git },
      { name: "Docker", Icon: TechIcons.Docker },
      { name: "Postman", Icon: TechIcons.Postman },
    ],
    col2: [
      { name: "GitHub", Icon: TechIcons.GitHub },
      { name: "VS Code", Icon: TechIcons.VSCode },
      { name: "Figma", Icon: TechIcons.Figma },
    ],
  },
];

const TechSection = () => {
  return (
    <section id="tech" className="relative min-h-screen w-full overflow-hidden">
      {/* Background with tech.jpeg */}
      <div
        className="relative flex min-h-screen w-full flex-col justify-center bg-cover bg-center bg-no-repeat pt-20 pb-20 px-4 sm:px-6 lg:py-16 lg:pl-36 lg:pr-12 xl:pl-40 xl:pr-14"
        style={{ backgroundImage: `url(${techImage})` }}
      >
        {/* Ambient floating sakura petals */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute top-[18%] left-[22%] h-3 w-2 rotate-45 rounded-full bg-pink-400/40 blur-[0.5px] animate-pulse" />
          <span className="absolute top-[32%] left-[45%] h-3.5 w-2 -rotate-12 rounded-full bg-pink-300/40 blur-[0.5px]" />
          <span className="absolute top-[20%] right-[32%] h-2.5 w-1.5 rotate-12 rounded-full bg-pink-400/50" />
          <span className="absolute top-[12%] right-[18%] h-3 w-2 rotate-45 rounded-full bg-pink-300/40" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-col">
          {/* Header Row: Title & Subtitle with scroll reveal */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-6xl">
                Tools I Work{" "}
                <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                  With
                </span>
              </h2>

              <p className="mt-3 max-w-xl font-mono text-xs leading-relaxed text-gray-200 drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] sm:text-sm">
                Technologies and tools I use to build efficient, scalable and modern web applications.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Glassmorphism Feature Cards Grid with generous size and gaps */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {techCategories.map((cat, idx) => {
              const CategoryIcon = cat.icon;
              return (
                <ScrollReveal
                  key={cat.title}
                  animation="fade-up"
                  delay={(idx + 1) * 120}
                  duration={700}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-purple-400/30 bg-gradient-to-b from-[#110a24]/90 via-[#0a0618]/95 to-[#070412]/95 p-6 sm:p-7 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-pink-500/70 hover:shadow-[0_0_45px_rgba(236,72,153,0.35),0_0_90px_rgba(168,85,247,0.15)]">
                    {/* Top Section: Header & Interactive Tech Grid */}
                    <div>
                      {/* Category Header with Big Icon & Title */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-2xl border border-pink-500/40 bg-pink-500/15 p-2.5 text-fuchsia-400 shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]">
                          <CategoryIcon size={38} strokeWidth={2.2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-2xl transition-colors group-hover:text-pink-300">
                            {cat.title}
                          </h3>
                          <p className="mt-1 text-xs leading-snug text-purple-200/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)] sm:text-sm">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      {/* 2-Column Tech Items List with Tactile Glass Tiles */}
                      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-3.5">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-3">
                          {cat.col1.map((item) => {
                            const IconComponent = item.Icon;
                            return (
                              <div
                                key={item.name}
                                className="group/item relative flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-pink-500/60 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/15 hover:shadow-[0_0_22px_rgba(236,72,153,0.35)] cursor-pointer"
                              >
                                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center transition-transform duration-200 group-hover/item:scale-115 group-hover/item:rotate-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                                  <IconComponent />
                                </div>
                                <span className="truncate text-xs sm:text-[13px] font-semibold text-white transition-colors group-hover/item:text-pink-200 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                                  {item.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-3">
                          {cat.col2.map((item) => {
                            const IconComponent = item.Icon;
                            return (
                              <div
                                key={item.name}
                                className="group/item relative flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-pink-500/60 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/15 hover:shadow-[0_0_22px_rgba(236,72,153,0.35)] cursor-pointer"
                              >
                                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center transition-transform duration-200 group-hover/item:scale-115 group-hover/item:rotate-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                                  <IconComponent />
                                </div>
                                <span className="truncate text-xs sm:text-[13px] font-semibold text-white transition-colors group-hover/item:text-pink-200 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                                  {item.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status Footer (Grounded and Complete) */}
                    <div className="mt-6 flex items-center justify-between border-t border-purple-400/20 pt-4">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-purple-300/80">
                        {cat.badge}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-pink-400">
                        <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse shadow-[0_0_8px_rgba(236,72,153,0.9)]" />
                        Active
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;

