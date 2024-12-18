// src/components/DetalleVentasList.js

import React, { useEffect, useState } from 'react';
import { getDetalleVentas, deleteDetalleVenta } from '../services/detalleVentasService';
import '../styles/DetalleVentasList.css';

const DetalleVentasList = () => {
  const [detalleVentas, setDetalleVentas] = useState([]);

  // cargar detalles de ventas al montar el componente
  useEffect(() => {
    cargarDetalleVentas();
  }, []);

  // funcion para cargar detalles de ventas
  const cargarDetalleVentas = async () => {
    try {
      const data = await getDetalleVentas();
      setDetalleVentas(data);
    } catch (error) {
      console.error('error al cargar detalles de ventas', error);
    }
  };

  // funcion para eliminar un detalle de venta
  const eliminarDetalleVenta = async (id) => {
    try {
      await deleteDetalleVenta(id);
      cargarDetalleVentas(); // recargar lista despues de eliminar
    } catch (error) {
      console.error('error al eliminar detalle de venta', error);
    }
  };

  return (
    <div className="detalle-ventas-list">
      <h2>Lista de Detalles de Ventas</h2>
      <ul>
        {detalleVentas.map((detalle) => (
          <li key={detalle.id}>
            detalle #{detalle.id} - subtotal: ${detalle.subtotal}
            <button onClick={() => eliminarDetalleVenta(detalle.id)}>eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetalleVentasList;
