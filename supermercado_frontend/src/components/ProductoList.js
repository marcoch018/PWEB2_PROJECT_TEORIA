// src/components/ProductoList.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductos, deleteProducto } from '../services/productosService';
import '../styles/ProductoList.css';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

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

  const eliminarProducto = async (id) => {
    try {
      await deleteProducto(id);
      cargarProductos(); // Recargar lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar producto', error);
    }
  };

  return (
    <div className="producto-list">
      <h2>Lista de productos</h2>
      <button onClick={() => navigate('/crear-producto')}>Agregar Producto</button>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;
