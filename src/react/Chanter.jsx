import logo from "../assets/logo.png"
import { CircleStop, Headphones, Import, Menu, Mic, RotateCcw, Trash2, FileUp, Sun, Moon } from "lucide-react"
import ispm from "../assets/ispm.png"
import { Link } from "react-router-dom"
// import Modal from "../components/Modal"
import { useState, useEffect, useRef } from "react"

export default function Chanter() {
  const [showPret, setPret ] = useState(true);
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const commonProps = {
    className: darkMode? "flex justify-center gap-40  items-center  h-14" : "flex justify-center items-center gap-40 h-14 w-4/6 bg-[#0A132D] rounded-md"
  };

  const startRecording = async () => {
      setPret(false);
      setAudioURL("")
      setRecording(true);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = event => {
          audioChunks.current.push(event.data);
      };
      mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
          const url = URL.createObjectURL(audioBlob);
          setAudioURL(url);
          audioChunks.current = [];
      };
      mediaRecorder.current.start();
  };

  const stopRecording = () => {
      setRecording(false);
      mediaRecorder.current.stop();
  };


  return (
    // logo sy Menu 
    <div className={`${darkMode && "dark"}`}>
    <div className=" h-screen fixed w-full bg-white dark:bg-[#0A132D] "> 

      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav className="relative max-w-[66rem] w-full bg-[#0A132D] dark:bg-white/5 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
          <div className="flex items-center justify-between">

            <a className="flex justify-between rounded-md text-xl items-center font-semibold focus:outline-none focus:opacity-80" href="../templates/agency/index.html" aria-label="Preline">

              <img src={ispm} className="h-10 m-3 rounded-full" />
              <img src={logo} className="h-10 m-3" />
              <p className="text-black text-center text-white">Rec'feo</p>
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
              <Link className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" to="/enregistrement" aria-current="page" >Enregistrement</Link>
              <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Importer</a>
              <button onClick={toggleDarkMode}>{darkMode? <Sun size={20} color="white" /> : <Moon size={20} color="white"/>}</button>
              <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Aide</a>

            </div>
          </div>
        </nav>
      </header>

      {/* Micro sy bouton prêt   */}
      <div className="flex flex-col gap-16 items-center  h-5/6  ">
        <div className="p-10 bg-[#0A132D] dark:bg-white/5 rounded-full border-[#0A132D] dark:border-white border-4">
         <Mic size={100} color="white" /> 
        </div>
        {showPret && <button onClick={startRecording} className="dark:bg-transparent bg-[#0A132D] h-14 w-52  rounded-full border-4 border-[#0A132D] dark:border-white  text-white text-xl  ">Prêt</button>}

        {/* <button className="bg-[#FFFF]" onClick={recording ? stopRecording : startRecording}>
                {recording ? 'Stop Recording' : 'Start Recording'}
            </button> */}
            <div className="bg-[#0A132D]" >
              {audioURL && <audio src={audioURL} controls />}
            </div>
            
            
      
     <div className="flex justify-center gap-40" {...commonProps} >

          {/* eo amin io onClick io rehefa hanisy action amin ilay izy */}
          {/* Ireto ny icône eo ambany */}
          <Import size={40} color="white" onClick={() => {setPret(true); setAudioURL("")}} className="cursor-pointer"/> 
          <RotateCcw size={40} color="white" className="cursor-pointer"  onClick={startRecording}/> 
          <Headphones size={40} color="white"  className="cursor-pointer"/> 
          <CircleStop size={40} color="white" onClick={stopRecording} className="cursor-pointer"/> 
          <Trash2 size={40} color="white" className="cursor-pointer" onClick={() =>{setPret(true); setAudioURL("")}} /> 
    </div> 
  
    </div>

    </div>
    </div>
  )
}
