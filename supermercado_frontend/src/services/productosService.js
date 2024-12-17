// productosService.js
import api from '../api/api';

// Obtener todos los productos
export const getProductos = async () => {
  const response = await api.get('productos/');
  return response.data;
};

// Crear un producto
export const createProducto = async (producto) => {
  const response = await api.post('productos/', producto);
  return response.data;
};

// Actualizar un producto
export const updateProducto = async (id, producto) => {
  const response = await api.put(`productos/${id}/`, producto);
  return response.data;
};

// Eliminar un producto
export const deleteProducto = async (id) => {
  const response = await api.delete(`productos/${id}/`);
  return response.data;
};
