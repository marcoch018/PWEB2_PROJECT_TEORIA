// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
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
        {/* Los enlaces de Login y Registro están visibles por defecto */}
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
        {/* muestra Navbar solo si el usuario ha iniciado sesión */}
        {rol && <Navbar rol={rol} />}
        {rol && <div className="user-info">Hola, {rol}</div>}

        <Routes>
          {/* rutas públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setRol={setRol} />} />
          <Route path="/registro" element={<Registro />} />
          
          {/* visible siempre (sin importar rol) */}
          <Route path="/productos" element={<Productos />} />

          {/* rutas para 'usuario' */}
          {rol === 'usuario' && (
            <Route path="/productos" element={<Productos />} />
          )}

          {/* rutas para 'empleado' */}
          {rol === 'empleado' && (
            <>
              <Route path="/producto-list" element={<ProductoList />} />
              <Route path="/crear-producto" element={<CrearProducto />} />
              <Route path="/detalle-ventas" element={<DetalleVentasList />} />
            </>
          )}

          {/* rutas para 'administrador' */}
          {rol === 'administrador' && (
            <>
              <Route path="/producto-list" element={<ProductoList />} />
              <Route path="/usuarios-list" element={<UsuariosList />} />
              <Route path="/ventas-list" element={<VentasList />} />
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
