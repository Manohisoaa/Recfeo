import "../css/Accueil.css"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"


function Accueil() {

  const navigate=useNavigate();
  
  const Importer = () =>{
    console.log('Mety');
  }
  const Chanter = () =>{
    navigate("/chanter")
  }

  return (
   <div className="fond bg-cover h-screen  ">
    <div className="flex flex-col items-center justify-center h-screen  ">
      <img src={logo} className="object-cover h-40 my-4 "/>
      <h1 className="text-white text-2xl my-5">Rec'Feo</h1>
      <button  onClick={Importer} className="bg-transparent h-16 w-60 rounded-full border-2 border-white m-30 text-white text-xl my-6 ">Importer</button>
      <button  onClick={Chanter} className="bg-transparent h-16 w-60 rounded-full border-2 border-white m-30 text-white text-xl my-6 ">Chanter</button>
    </div>

   </div>
  )
}

export default Accueil
