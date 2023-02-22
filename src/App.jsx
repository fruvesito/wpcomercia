import React from "react"
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar"
import ContenidoPrincipal from "./components/contenidoPrincipal";
import PieDePagina from "./components/footer";
import FormularioContacto from "./components/formularioContacto";

function App() {
  return (
      <div className="grid grid-rows-main grid-flow-col gap-4 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Contenido */}
        <Routes>
          <Route path="/" element={ <ContenidoPrincipal/> } />
          <Route path="/contacto" element={<FormularioContacto/>} />
        </Routes>

        {/* Footer */}
        <PieDePagina />
      </div>
  );
}

export default App;