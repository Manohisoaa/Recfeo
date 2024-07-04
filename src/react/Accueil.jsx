import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"
// import { Button } from "../components/Bouton";


function Accueil() {

  const navigate = useNavigate();
 
  // fonction de navigation makany amle page
  const Importer = () => {
    navigate("/importer");
  }
  const Chanter = () => {
    navigate("/chanter")
  }

  return (
    <div className=" bg-cover h-screen bg-[url('/back.png')] ">
      
      {/* // Logo sy Titre Recfeo */}
      <div className="flex flex-col items-center justify-center h-screen  ">
        <img src={logo} className="object-cover h-40 my-4 " />
        <h1 className="text-white text-3xl my-5 font-bold font-lato">Rec'Feo</h1>
        {/* <Button>
          Importer
        </Button>
        */}

        {/* Bouton Importer sy Chanter */}
        <button onClick={Importer} className=" font-lato font-bold bg-transparent h-16 w-60 rounded-full border-2 border-white m-30 text-white text-xl my-6 ">Importer</button>
        <button onClick={Chanter} className="font-lato font-bold bg-transparent h-16 w-60 rounded-full border-2 border-white m-30 text-white text-xl my-6 ">Chanter</button>
      </div>

    </div>
  )
}

export default Accueil
