import menu from "../assets/menu.svg"
import logo from"../assets/logo.png"
import micro from "../assets/microphone.svg"
import save from "../assets/save.svg"
import restart from "../assets/restart.svg"
import casque from "../assets/casque.svg"
import stop from "../assets/stop.svg"
import supprimer from "../assets/delete.svg"

export default function Chanter() {
  return (
    <div className="bg-[#0A132D] h-screen fixed w-full ">
        <div className="flex justify-between m-10">
            <img src={logo} className="h-20"/>
            <img src={menu} className="h-10"/>
        </div>
        <div className="flex flex-col justify-evenly items-center  h-5/6  ">
            <img src={micro} className="h-52 " />
            <button className="bg-transparent h-14 w-52 bg-[#09153B] rounded-full border-4 border-white  text-white text-xl  ">Prêt</button>
            <div className="flex">
              <img src={save} className="px-20"/>
              <img src={restart} className="px-20" />
              <img src={casque} className="px-20"/>
              <img src={stop} className="px-20"/>
              <img src={supprimer} className="px-20"/>
            </div>
        </div>
        
    </div> 
  )
}
