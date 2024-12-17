// ventasService.js
import api from '../api/api';

// Obtener todas las ventas
export const getVentas = async () => {
  const response = await api.get('ventas/');
  return response.data;
};

// Crear una venta
export const createVenta = async (venta) => {
  const response = await api.post('ventas/', venta);
  return response.data;
};

// Actualizar una venta
export const updateVenta = async (id, venta) => {
  const response = await api.put(`ventas/${id}/`, venta);
  return response.data;
};

// Eliminar una venta
export const deleteVenta = async (id) => {
  const response = await api.delete(`ventas/${id}/`);
  return response.data;
};
