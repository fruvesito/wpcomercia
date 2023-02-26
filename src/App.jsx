import React from "react"
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar"
import ContenidoPrincipal from "./components/contenidoPrincipal";
import PieDePagina from "./components/footer";
import FormularioContacto from "./components/formularioContacto";
import SobreNosotros from "./components/sobreNosotros";

function App() {
  return (
      <div className="grid grid-rows-main gap-4 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Contenido */}
        <Routes>
          <Route path="/" element={ <ContenidoPrincipal/> } />
          <Route path="/contacto" element={<FormularioContacto/>} />
          <Route path="/info" element={<SobreNosotros/>} />
        </Routes>

        {/* Footer */}
        <PieDePagina />
      </div>
  );
}

export default App;