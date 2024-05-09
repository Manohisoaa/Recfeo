import {SaveAll, Sun, icons} from "lucide-react"

function Modal({text, name}) {
  
  const IconComponent = icons[name];
  
  
  return (

      <div className="bg-[#0A153B] h-52 w-64 rounded-xl flex items-center justify-center absolute right-0  ">
        
        {/* icône */}
         <div className=" flex flex-col ">
            <SaveAll color='white' size={40} className='m-1.5'/>
            <IconComponent color={"white"} size={40} className='m-1.5'/>  
            <Sun color='white' size={40} className='m-1.5'/>
        </div>

        {/* Lien icone */}
        <div className=" flex flex-col ">
            <a href="" className="text-white text-xl m-3.5 ">Enregistrement</a>
            <a href="" className="text-white text-xl m-3.5 ">{text}</a>
            <a href="" className="text-white text-xl m-3.5 ">Mode</a>
        </div>
      </div>
  )
}
export default Modal;