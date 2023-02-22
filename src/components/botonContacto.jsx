import React from 'react';
import { Link } from 'react-router-dom';

function BotonContacto() {
  return (
    <div className="text-white text-center">
      <p>¿Necesitas ayuda?</p>
      <Link to="/contacto" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block">
        Contacta con nosotros
      </Link>
    </div>
  );
}

export default BotonContacto;
