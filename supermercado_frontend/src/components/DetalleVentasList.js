import React, { useEffect, useState } from 'react';
import { getDetalleVentas, deleteDetalleVenta } from '../services/detalleVentasService';

const DetalleVentasList = () => {
  const [detalleVentas, setDetalleVentas] = useState([]);

  // Cargar detalles de ventas al montar el componente
  useEffect(() => {
    cargarDetalleVentas();
  }, []);

  const cargarDetalleVentas = async () => {
    try {
      const data = await getDetalleVentas();
      setDetalleVentas(data);
    } catch (error) {
      console.error('Error al cargar detalles de ventas', error);
    }
  };

  const eliminarDetalleVenta = async (id) => {
    try {
      await deleteDetalleVenta(id);
      cargarDetalleVentas(); // Recargar lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar detalle de venta', error);
    }
  };

  return (
    <div>
      <h2>Lista de Detalles de Ventas</h2>
      <ul>
        {detalleVentas.map((detalle) => (
          <li key={detalle.id}>
            Detalle #{detalle.id} - Subtotal: ${detalle.subtotal}
            <button onClick={() => eliminarDetalleVenta(detalle.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetalleVentasList;
