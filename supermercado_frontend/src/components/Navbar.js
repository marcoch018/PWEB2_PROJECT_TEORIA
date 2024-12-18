// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ rol }) => {
    return (
        <nav>
            <ul>
                {rol === 'usuario' && (
                    <li><Link to="/productos">Productos</Link></li>
                )}
                {rol === 'empleado' || rol === 'administrador' ? (
                    <>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/producto-list">ProductoList</Link></li>
                        <li><Link to="/ventas">Ventas</Link></li>
                        <li><Link to="/usuarios-list">UsuariosList</Link></li>
                    </>
                ) : null}
                {rol === 'administrador' ? (
                    <li><Link to="/crear-usuario">CreaUsuario</Link></li>
                ) : null}
            </ul>
        </nav>
    );
};

export default Navbar;
