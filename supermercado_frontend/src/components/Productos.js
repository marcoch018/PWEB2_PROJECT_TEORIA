// src/components/Productos.js

import React, { useState, useEffect } from 'react';
import { fetchProductos } from '../api/api';
import '../styles/Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  // cargar productos al montar el componente
  useEffect(() => {
    const obtenerProductos = async () => {
      const data = await fetchProductos();
      setProductos(data);
    };
    obtenerProductos();
  }, []);

  return (
    <div className="productos">
      <h1>lista de productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
