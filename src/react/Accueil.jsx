import { useEffect , useState} from "react";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"
import  logovideo from "../assets/logovideo.mp4" 
// import { Button } from "../components/Bouton";


function Accueil() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  // fonction de navigation makany amle page
  const Importer = () => {
    navigate("/importer");
  }
  const Chanter = () => {
    navigate("/chanter")
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <div className="video bg[#0A132D] ">
      {
        // video animation logo
        loading ?
        <div className="bg-[#0A132D] h-screen fixed w-full">
            <video width="1000"   className="w-full " autoPlay loop muted playsInline>
              <source src={logovideo} type="video/mp4" />
            </video>
        </div>
        :

   
        <div className=" bg-cover h-screen bg-[url('/back.png')] ">      
          {/* // Logo sy Titre Recfeo */}
          <div className="flex flex-col items-center justify-center h-screen  ">
            <img src={logo} className="object-cover h-36 my-4 " />
                <h1 className="text-white text-3xl my-5 font-bold font-lato">Rec'Feo</h1>

            {/* Bouton Importer sy Chanter */}
            <button onClick={Importer} className=" font-lato font-bold bg-transparent h-16 w-60 rounded-full border-2 border-white m-30 text-white text-xl my-6 ">Importer</button>
            <button onClick={Chanter} className="font-lato font-bold bg-transparent h-16 w-60 rounded-full border-2 border-white m-30 text-white text-xl my-6 ">Chanter</button>
          </div>

        </div>
}
    
    </div>
  )
}

export default Accueil
