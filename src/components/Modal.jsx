import {SaveAll, Sun, icons} from "lucide-react"

function Modal({text, name}) {
  
  const IconComponent = icons[name];
  
  
  return (

      <div className="bg-[#0A153B] h-64 w-72 rounded-xl flex items-center justify-center absolute right-16   ">
        
        {/* icône */}
         <div className=" flex flex-col ">
            <SaveAll color='white' size={40} className='m-4'/>
            <IconComponent color={"white"} size={40} className='m-4'/>  
            <Sun color='white' size={40} className='m-4'/>
        </div>

        {/* Lien icone */}
        <div className=" flex flex-col ">
            <a href="" className="text-white text-2xl m-6 ">Enregistrement</a>
            <a href="" className="text-white text-2xl m-6 ">{text}</a>
            <a href="" className="text-white text-2xl m-6 ">Mode</a>
        </div>
      </div>
  )
}
export default Modal;