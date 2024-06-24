import logo from "../assets/logo.png"
import ispm from "../assets/ispm.png"
import { CircleStop, Headphones, Import, Menu, Mic, RotateCcw, Trash2, FileUp } from "lucide-react"
import Modal from "../components/Modal"
import { useState, useEffect, useRef } from "react"

export default function Chanter() {
  const [showModal, setModal] = useState(false);
  const [showMenu, setMenu] = useState(true);



  // fonction Menu manokatra ilay modal
  const functionOuvrir = () => {
    setModal(!showModal);
    setMenu(false)
  }

  //  menuRef = useRef()
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)){
  //       setModal(false);
  //     }

  //   };
  //   document.addEventListener("mousedown", handler);

  //   return() =>{
  //     document.removeEventListener("mousedown", handler);
  //   };
  // },[])


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
              <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#" aria-current="page">Enregistrement</a>
              <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Importer</a>
              <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Thème</a>
              <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Aide</a>



            </div>
          </div>
        </nav>
      </header>




      <div className="flex justify-between m-10">
        {/* <img src={logo} className="h-20" /> */}
        {/* <div>
          {showMenu && <Menu onClick={functionOuvrir} color="white" size={40} className="cursor-pointer" />}
        </div>
        {showModal && <Modal functionOuvrir={functionOuvrir} text={"Importer"} name="FileUp" />} */}
      </div>

      {/* Micro sy bouton prêt   */}
      <div className="flex flex-col gap-16 items-center  h-5/6  ">
        <div className="p-10 bg-white/5 rounded-full border-white border-4">
          <Mic size={100} color="white" />
        </div>
        <button className="bg-transparent h-14 w-52 bg-[#09153B] rounded-full border-4 border-white  text-white text-xl  ">Prêt</button>
        <div className="flex gap-40">

          {/* eo amin io onClick io rehefa hanisy action amin ilay izy */}
          {/* Ireto ny icône eo ambany */}
          <Import size={40} color="white" onClick={() => alert("Import")} />
          <RotateCcw size={40} color="white" />
          <Headphones size={40} color="white" />
          <CircleStop size={40} color="white" />
          <Trash2 size={40} color="white" />
        </div>
      </div>

    </div>
  )
}
