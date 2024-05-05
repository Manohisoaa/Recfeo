import Accueil from "./react/Accueil"
import Chanter from "./react/Chanter"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <div >
      <BrowserRouter>
       <Routes>
         <Route path="/" Component={Accueil}/>
         <Route path="/chanter" Component={Chanter}/>
         </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
