// src/components/Ventas.js

import React, { useState, useEffect } from 'react';
import { fetchVentas } from '../api/api';
import '../styles/Ventas.css';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  // cargar ventas al montar el componente
  useEffect(() => {
    const obtenerVentas = async () => {
      const data = await fetchVentas();
      setVentas(data);
    };
    obtenerVentas();
  }, []);

  return (
    <div className="ventas">
      <h1>lista de ventas</h1>
      <ul>
        {ventas.map((venta) => (
          <li key={venta.id}>venta #{venta.id} - total: ${venta.total}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ventas;
