import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import MenuDesplegable from './menuDesplegable';

function Navbar() {

  return (
    <nav className="bg-blue-600 text-white py-1 px-2 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <a href='/' className='flex'>
          <img className="h-8 mr-2" src="logo.svg" alt="Logo" />
          <span className="font-bold text-xl">wpComercia</span>
        </a>
      </div>

      {/* Menú */}
      <MenuDesplegable></MenuDesplegable>
    </nav>
  );
}

export default Navbar;
