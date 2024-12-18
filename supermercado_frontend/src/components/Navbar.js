// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ rol }) => {
  return (
    <nav>
      <ul>
        {/* enlace todos los roles */}
        <li><Link to="/productos">Productos</Link></li>

        {/* solo para empleados o administradores */}
        {(rol === 'empleado' || rol === 'administrador') && (
          <>
            <li><Link to="/producto-list">ProductoList</Link></li>
            <li><Link to="/ventas">Ventas</Link></li>
            <li><Link to="/usuarios-list">UsuariosList</Link></li>
          </>
        )}

        {/* solo para administradores */}
        {rol === 'administrador' && (
          <li><Link to="/crear-usuario">CreaUsuario</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
