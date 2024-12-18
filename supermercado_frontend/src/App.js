// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Productos from './components/Productos';  // Cambiado a Productos
import ProductoList from './components/ProductoList';
import UsuariosList from './components/UsuariosList';
import VentasList from './components/VentasList';
import DetalleVentasList from './components/DetalleVentasList';
import CrearProducto from './components/CrearProducto';
import CrearUsuario from './components/CrearUsuario';
import Registro from './components/Registro';
import Login from './components/Login';
import './styles/App.css';

const HomePage = () => (
  <div className="home-page">
    <header className="App-header">
      <h1>Supermercado Plaza Vea</h1>
      <nav className="navbar">
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/registro">Registrarse</Link>
      </nav>
    </header>
    <div className="welcome-text">
      <h2>Bienvenido a Supermercado Plaza Vea</h2>
      <p>Por favor, inicie sesión o regístrese para continuar.</p>
    </div>
  </div>
);

function App() {
  const [rol, setRol] = useState(null);

  return (
    <Router>
      <div className="App">
        {rol && <div className="user-info">Hola, {rol}</div>}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setRol={setRol} />} />
          <Route path="/registro" element={<Registro />} />
          {rol === 'usuario' && (
            <Route path="/productos" element={<Productos />} />
          )}
          {rol === 'empleado' && (
            <>
              <Route path="/productos" element={<ProductoList />} />
              <Route path="/crear-producto" element={<CrearProducto />} />
              <Route path="/detalle-ventas" element={<DetalleVentasList />} />
            </>
          )}
          {rol === 'administrador' && (
            <>
              <Route path="/productos" element={<ProductoList />} />
              <Route path="/usuarios" element={<UsuariosList />} />
              <Route path="/ventas" element={<VentasList />} />
              <Route path="/detalle-ventas" element={<DetalleVentasList />} />
              <Route path="/crear-producto" element={<CrearProducto />} />
              <Route path="/crear-usuario" element={<CrearUsuario />} />
            </>
          )}
        </Routes>
        <footer className="footer">
          © 2024 Supermercado Plaza Vea
        </footer>
      </div>
    </Router>
  );
}

export default App;
