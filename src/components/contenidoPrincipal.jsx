import React from 'react';

function ContenidoPrincipal() {
  return (
    <main className="bg-white py-4 px-6 grid grid-cols-3 gap-4">
      <h1 className="text-2xl font-bold mb-4 col-span-3">Mi Sitio Web</h1>
      
      {/* Columna 1 */}
      <div className="bg-gray-200 p-4">
        {/* Contenido de la columna 1 */}
      </div>

      {/* Columna 2 */}
      <div className="bg-gray-300 p-4">
        {/* Contenido de la columna 2 */}
      </div>

      {/* Columna 3 */}
      <div className="bg-gray-400 p-4">
        {/* Contenido de la columna 3 */}
      </div>
    </main>
  );
}

export default ContenidoPrincipal;
