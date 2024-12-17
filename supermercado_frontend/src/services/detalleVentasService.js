import api from '../api/api';

// Obtener todos los detalles de ventas
export const getDetalleVentas = async () => {
  const response = await api.get('detalle_ventas/');
  return response.data;
};

// Crear un detalle de venta
export const createDetalleVenta = async (detalleVenta) => {
  const response = await api.post('detalle_ventas/', detalleVenta);
  return response.data;
};

// Actualizar un detalle de venta
export const updateDetalleVenta = async (id, detalleVenta) => {
  const response = await api.put(`detalle_ventas/${id}/`, detalleVenta);
  return response.data;
};

// Eliminar un detalle de venta
export const deleteDetalleVenta = async (id) => {
  const response = await api.delete(`detalle_ventas/${id}/`);
  return response.data;
};
