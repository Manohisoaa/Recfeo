
import logo from "../assets/logo.png"

import { CircleStop, Headphones, Import, Menu, Mic, RotateCcw, Trash2 } from "lucide-react"

export default function Chanter() {

  return (
    <div className="bg-[#0A132D] h-screen fixed w-full ">
      <div className="flex justify-between m-10">
        <img src={logo} className="h-20" />
        <div>
          <Menu color="white" size={40} />

        </div>
      </div>
      <div className="flex flex-col gap-16 items-center  h-5/6  ">
        <div className="p-10 bg-white/5 rounded-full border-white border-4">
          <Mic size={100} color="white" />
        </div>
        <button className="bg-transparent h-14 w-52 bg-[#09153B] rounded-full border-4 border-white  text-white text-xl  ">Prêt</button>
        <div className="flex gap-40">

          {/* eo amin io onClick io rehefa hanisy action amin ilay izy */}
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
