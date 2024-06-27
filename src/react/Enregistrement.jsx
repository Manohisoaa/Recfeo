import logo from "../assets/logo.png"
import { Sun, Play, Volume2, Pause} from "lucide-react"
import ispm from "../assets/ispm.png"
import { useState, useRef} from "react"

export default function Enregistrement() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume (0 to 1)
  const audioRef = useRef(null);



  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    // logo sy Menu
    
    <div className="bg-[#0A132D] h-screen fixed w-full  ">

      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav className="relative max-w-[66rem] w-full bg-white/5 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
          <div className="flex items-center justify-between">

            <a className="flex justify-between rounded-md text-xl items-center font-semibold focus:outline-none focus:opacity-80" href="../templates/agency/index.html" aria-label="Preline">

              <img src={ispm} className="h-10 m-3 rounded-full" />
              <img src={logo} className="h-10 m-3" />
              <p className="text-white text-center ">Rec'feo</p>
            </a>

            <div className="md:hidden">
              <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>

          <div id="navbar-collapse" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block ">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
              <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Importer</a>
              <Sun size={20} color="white"/>
              <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Aide</a>

            </div>
          </div>
        </nav>
      </header>

      {/* Micro sy bouton prêt   */}
      <div className="flex flex-col gap-16 items-center  h-5/6 m-10 ">
        <div className="bg-[#0A153B] h-20 w-full flex items-center justify-between p-10  ">
          <button onClick={togglePlay}>
            {isPlaying ? <Pause size={24} color="white" /> : <Play size={24} color="white" />}
          </button>
            <h1 className="text-white ">Until I Found you</h1>
            <Volume2 size={30} color="white"/>
        </div>
      </div>
        <audio ref={audioRef} loop src="../audio/Salut.wav"/>
    </div>

  )
}
