import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Accueil from "./react/Accueil";
import Chanter from "./react/Chanter";
import Import from "./react/Import";
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
      </Routes>
    </div>
  );
}

export default App;