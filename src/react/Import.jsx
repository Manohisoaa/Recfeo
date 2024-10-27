import logo from "../assets/logo.png";
import logodark from "../assets/logodark.png";
import { Sun, Moon, FileDown, Play, Pause } from "lucide-react";
import ispm from "../assets/ispm.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MusicKeyFinder from "./../components/MusicKeyFinder";
import KeyImport from "./../components/KeyImport";
export default function Import() {
  const [darkMode, setDarkMode] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState(null);
  const [audioSrc, setAudioSrc] = useState("");

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSong(file);
      const audioURL = URL.createObjectURL(file);
      setAudioSrc(audioURL);
    }
  };

  //Music player
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  //dark mode et light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const commonProps = {
    color: darkMode ? "white" : "white",
  };

  return (
    // logo sy Menu
    <div className={`${darkMode && "dark"}`}>
      <MusicKeyFinder />
      <div className="dark: fixed h-screen w-full bg-[#C7CFE9] text-white dark:bg-[#0A132D]">
        <header className="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap md:flex-nowrap md:justify-start">
          <nav
            className="relative mx-2 w-full max-w-[66rem] rounded-[28px] bg-[#D5DAF3] p-3 dark:bg-white/5 md:flex md:items-center md:justify-between md:py-0 lg:mx-auto"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <a
                className="flex items-center justify-between rounded-md text-xl font-semibold focus:opacity-80 focus:outline-none"
                href="#"
                aria-label="Preline"
              >
                <img src={ispm} className="ml-2 mt-2 h-14 rounded-full" />
                {darkMode ? (
                  <img src={logo} className="m-2 h-12" />
                ) : (
                  <img src={logodark} className="m-3 h-10" />
                )}
                <p className="text-center font-bold text-[#0A132D] dark:text-white">
                  Rec'feo
                </p>
              </a>

              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle flex size-8 items-center justify-center rounded-full bg-neutral-800 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50"
                  data-hs-collapse="#navbar-collapse"
                  aria-controls="navbar-collapse"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden size-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden size-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="navbar-collapse"
              className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
            >
              <div className="md:ps- flex flex-col py-2 md:flex-row md:items-center md:justify-end md:py-0">
                <Link
                  className="group p-2 px-4 py-3 ps-px font-raleway text-sm font-bold text-[#0A132D] hover:text-black hover:text-white focus:text-black focus:text-white focus:outline-none dark:text-white dark:hover:text-[#C7CFE9] sm:px-3 md:py-4"
                  to="/chanter"
                >
                  Chanter
                  <div className="h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full dark:bg-[#C7CFE9]"></div>
                </Link>
                <Link
                  className="group p-2 px-4 py-3 ps-px font-raleway text-sm font-bold text-[#0A132D] hover:text-white focus:text-black focus:text-white focus:outline-none dark:text-white dark:hover:text-[#C7CFE9] sm:px-3 md:py-4"
                  to="/enregistrement"
                  aria-current="page"
                  state={[]}
                >
                  Enregistrement
                  <div className="h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full dark:bg-[#C7CFE9]"></div>
                </Link>
                <button onClick={toggleDarkMode}>
                  {darkMode ? (
                    <Sun size={20} color="white" />
                  ) : (
                    <Moon size={20} color="black" />
                  )}
                </button>
                <Link
                  className="group p-2 px-4 py-3 ps-px font-raleway text-sm font-bold text-[#0A132D] hover:text-white focus:text-black focus:text-white focus:outline-none dark:text-white dark:hover:text-[#C7CFE9] sm:px-3 md:py-4"
                  to="/aide"
                >
                  {" "}
                  Aide{" "}
                  <div className="h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full dark:bg-[#C7CFE9]"></div>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <KeyImport />

        {/* Micro sy bouton prêt   */}

      </div>
    </div>
  );
}
