import logo from "../assets/logo.png"
import logodark from "../assets/logodark.png"
import { Sun, Play, Volume2, Pause, Moon } from "lucide-react"
import ispm from "../assets/ispm.png"
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"


export default function Enregistrement() {
  const {state} = useLocation()
  const [listeAudio, setListeAudio] = useState([])
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume (0 to 1)
  const audioRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setListeAudio(state)
    console.log(listeAudio)
  },[])
   //dark Mode light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
 
  //dark Mode light mode
  const commonProps = {
    color: darkMode ? "white" : "#0A132D"
  };
 
   //Music player

  // const togglePlay = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  
  
  return (
    // logo sy Menu
    <div className={`${darkMode && "dark"}`}>
      <div className=" h-screen fixed w-full bg-[#C7CFE9]  dark:bg-[#0A132D] dark: text-white">

        <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
          <nav className="relative max-w-[66rem] w-full bg-[#D5DAF3] dark:bg-white/5 rounded-[28px] p-3 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">

            <div className="flex items-center justify-between">

              <a className="flex justify-between rounded-md text-xl items-center font-semibold focus:outline-none focus:opacity-80" href="../templates/agency/index.html" aria-label="Preline">

                <img src={ispm} className="h-14 ml-2 mt-2 rounded-full" />
                {darkMode ? <img src={logo} className="h-12 m-2 " /> : <img src={logodark} className="h-10 m-3 " />}

                <p className="text-black text-center text-black dark:text-white font-bold  ">Rec'feo</p>
              </a>

              <div className="md:hidden">
                <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                  <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
            </div>

            <div id="navbar-collapse" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block ">
              <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-">

                <Link className="font-bold  font-raleway py-3 ps-px sm:px-3 md:py-4 text-sm text-[#0A132D] hover:text-white focus:outline-none focus:text-white dark:text-white hover:text-black focus:outline-none focus:text-black dark:hover:text-[#C7CFE9] focus:outline-none focus:text-black group p-2 px-4" to="/chanter">Chanter
                <div className="bg-white dark:bg-[#C7CFE9] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
                <Link className="font-bold  font-raleway py-3 ps-px sm:px-3 md:py-4 text-sm text-[#0A132D] hover:text-white focus:outline-none focus:text-white dark:text-white dark:hover:text-[#C7CFE9] focus:outline-none focus:text-black group p-2 px-4" to="/importer" state={listeAudio}>Importer
                <div className="bg-white dark:bg-[#C7CFE9] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
                <button onClick={toggleDarkMode}>{darkMode ? <Sun size={20} color="white" /> : <Moon size={20} color="black" />}</button>
                <Link className=" font-bold  font-raleway py-3 ps-px sm:px-3 md:py-4 text-sm text-[#0A132D]  dark:text-white hover:text-white focus:outline-none focus:text-white dark:hover:text-[#C7CFE9] focus:outline-none focus:text-black group p-2 px-4" to="/aide" state={listeAudio}>Aide
                <div className="bg-white dark:bg-[#C7CFE9] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>

              </div>
            </div>
          </nav>
        </header>


        {/* Micro sy bouton prêt   */}
        {listeAudio.map((audio, index)=> {
          const togglePlay = () => {
            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
          };
          return (
            <div key={index}>
            <div className="flex flex-col gap-16 items-center  h-5/6 m-10 ">
            <div className="dark:bg-[#0A153B] bg-[#B7C0E7] h-20 w-full flex items-center justify-between p-10  ">
              <button onClick={togglePlay}>
                {isPlaying ? <Pause size={24} {...commonProps} /> : <Play size={24} {...commonProps} />}
              </button>
              <h1 className="dark:text-white text-black">{audio.titre}</h1>
              <Volume2 size={30} {...commonProps} />
            </div>
            <audio ref={audioRef}  >
              <source src={audio.audio}/>
            </audio>
          </div>
          </div>
          )
        }) }
       

        
      </div>

    </div >
  )
}

