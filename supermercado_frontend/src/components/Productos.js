// src/components/Productos.js
import React, { useState, useEffect } from 'react';
import { getProductos } from '../services/productosService';
import '../styles/ProductoList.css'; // Usa los mismos estilos que ProductoList

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const data = await getProductos();
      setProductos(data);
    } catch (error) {
      console.error('Error al cargar productos', error);
    }
  };

  return (
    <div className="producto-list">
      <h2>Lista de productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
