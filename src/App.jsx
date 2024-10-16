import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Accueil from "./react/Accueil";
import Chanter from "./react/Chanter";
import Import from "./react/Import";
import Chronometre from "./react/Chronometre";

import Enregistrement from "./react/Enregistrement";
import Aide from "./react/Aide"

import "preline";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/chanter" element={<Chanter />} />
        <Route path="/importer" element={<Import />} />
        <Route path="/enregistrement" element={<Enregistrement />} />
        <Route path="/aide" element={<Aide />} />
        <Route path="/chronometre" element={<Chronometre />} />
      </Routes>

    </div>
  );
}

export default App;