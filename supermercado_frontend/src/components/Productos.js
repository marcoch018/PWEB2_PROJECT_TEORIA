// src/components/Productos.js

import React, { useState, useEffect } from 'react';
import api from '../api/api';
import '../styles/Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await api.get('productos/');
      setProductos(response.data);
    };
    fetchProductos();
  }, []);

  return (
    <div className="productos">
      <h1>Lista de productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
