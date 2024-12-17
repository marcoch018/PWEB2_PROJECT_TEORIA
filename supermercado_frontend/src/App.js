// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductoList from './components/ProductoList';
import UsuariosList from './components/UsuariosList';
import VentasList from './components/VentasList';
import DetalleVentasList from './components/DetalleVentasList';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Supermercado Plaza Vea</h1>
          <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/ventas">Ventas</Link>
            <Link to="/detalle-ventas">Detalles de Ventas</Link>
          </nav>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/productos" element={<ProductoList />} />
            <Route path="/usuarios" element={<UsuariosList />} />
            <Route path="/ventas" element={<VentasList />} />
            <Route path="/detalle-ventas" element={<DetalleVentasList />} />
          </Routes>
        </div>
        <footer className="footer">
          © 2024 Supermercado Plaza Vea
        </footer>
      </div>
    </Router>
  );
}

export default App;
