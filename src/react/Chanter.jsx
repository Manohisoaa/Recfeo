import logo from "../assets/logo.png"
import { CircleStop, Headphones, Import, Menu, Mic, RotateCcw, Trash2, FileUp } from "lucide-react"
import Modal from "../components/Modal"
import { useState, useEffect, useRef} from "react"

export default function Chanter() {
const [showModal, setModal] = useState(false);
const [showMenu, setMenu] = useState(true);

// fonction Menu manokatra ilay modal
const functionOuvrir = () =>{
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
      <div className="flex justify-between m-10">
        <img src={logo} className="h-20" />
        <div>
          {showMenu && <Menu onClick={functionOuvrir} color="white" size={40} className="cursor-pointer"/> }
        </div>
        { showModal && <Modal functionOuvrir={functionOuvrir} text={"Importer"} name="FileUp"/> }
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
