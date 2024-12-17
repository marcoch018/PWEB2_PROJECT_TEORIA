// src/components/VentasList.js

import React, { useEffect, useState } from 'react';
import { getVentas, deleteVenta } from '../services/ventasService';
import '../styles/VentasList.css';

const VentasList = () => {
  const [ventas, setVentas] = useState([]);

  // cargar ventas al montar el componente
  useEffect(() => {
    cargarVentas();
  }, []);

  // funcion para cargar ventas
  const cargarVentas = async () => {
    try {
      const data = await getVentas();
      console.log('Datos de ventas:', data); // Verificar los datos recibidos
      setVentas(data);
    } catch (error) {
      console.error('error al cargar ventas', error);
    }
  };

  // funcion para eliminar una venta
  const eliminarVenta = async (id) => {
    try {
      await deleteVenta(id);
      cargarVentas(); // recargar lista despues de eliminar
    } catch (error) {
      console.error('error al eliminar venta', error);
    }
  };

  return (
    <div className="ventas-list">
      <h2>lista de ventas</h2>
      <ul>
        {ventas.map((venta) => (
          <li key={venta.id}>
            venta #{venta.id} - total: ${venta.total}
            <button onClick={() => eliminarVenta(venta.id)}>eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VentasList;
