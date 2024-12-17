// src/components/Usuarios.js

import React, { useState, useEffect } from 'react';
import { fetchUsuarios } from '../api/api';
import '../styles/Usuarios.css';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  // cargar usuarios al montar el componente
  useEffect(() => {
    const obtenerUsuarios = async () => {
      const data = await fetchUsuarios();
      setUsuarios(data);
    };
    obtenerUsuarios();
  }, []);

  return (
    <div className="usuarios">
      <h1>lista de usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nombre} - {usuario.rol}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
