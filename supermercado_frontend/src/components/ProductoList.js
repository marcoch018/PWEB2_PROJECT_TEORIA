// src/components/ProductoList.js

import React, { useEffect, useState } from 'react';
import { getProductos, deleteProducto } from '../services/productosService';
import '../styles/ProductoList.css';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  // cargar productos al montar el componente
  useEffect(() => {
    cargarProductos();
  }, []);

  // funcion para cargar productos
  const cargarProductos = async () => {
    try {
      const data = await getProductos();
      console.log('Datos de productos:', data); // Verificar los datos recibidos
      setProductos(data);
    } catch (error) {
      console.error('error al cargar productos', error);
    }
  };

  // funcion para eliminar un producto
  const eliminarProducto = async (id) => {
    try {
      await deleteProducto(id);
      cargarProductos(); // recargar lista despues de eliminar
    } catch (error) {
      console.error('error al eliminar producto', error);
    }
  };

  return (
    <div className="producto-list">
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => eliminarProducto(producto.id)}>eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;
