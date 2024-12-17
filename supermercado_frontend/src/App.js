import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoList from './components/ProductoList';
import UsuariosList from './components/UsuariosList';
import VentasList from './components/VentasList';
import DetalleVentasList from './components/DetalleVentasList';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Gestión de Supermercado</h1>
        <Routes>
          <Route path="/productos" element={<ProductoList />} />
          <Route path="/usuarios" element={<UsuariosList />} />
          <Route path="/ventas" element={<VentasList />} />
          <Route path="/detalle-ventas" element={<DetalleVentasList />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
