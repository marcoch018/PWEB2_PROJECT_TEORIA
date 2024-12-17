import React, { useEffect, useState } from 'react';
import { getProductos, deleteProducto } from '../services/productosService';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  // Cargar productos al montar el componente
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
    <div>
      <h2>Lista de Productos</h2>
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
