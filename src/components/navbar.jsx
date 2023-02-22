import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <a href='/' className='flex'>
          <img className="h-8 mr-2" src="src/assets/logo.svg" alt="Logo" />
          <span className="font-bold text-xl">wpComercia</span>
        </a>
      </div>

      {/* Menú */}
      <ul className="flex">
        <li className="mr-6"><a href="#" className="hover:text-gray-400">Inicio</a></li>
        <li className="mr-6"><a href="#" className="hover:text-gray-400">Acerca de</a></li>
        <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
