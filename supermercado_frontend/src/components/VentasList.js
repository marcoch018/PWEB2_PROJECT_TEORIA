import React, { useEffect, useState } from 'react';
import { getVentas, deleteVenta } from '../services/ventasService';

const VentasList = () => {
  const [ventas, setVentas] = useState([]);

  // Cargar ventas al montar el componente
  useEffect(() => {
    cargarVentas();
  }, []);

  const cargarVentas = async () => {
    try {
      const data = await getVentas();
      setVentas(data);
    } catch (error) {
      console.error('Error al cargar ventas', error);
    }
  };

  const eliminarVenta = async (id) => {
    try {
      await deleteVenta(id);
      cargarVentas(); // Recargar lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar venta', error);
    }
  };

  return (
    <div>
      <h2>Lista de Ventas</h2>
      <ul>
        {ventas.map((venta) => (
          <li key={venta.id}>
            Venta #{venta.id} - Total: ${venta.total}
            <button onClick={() => eliminarVenta(venta.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VentasList;
