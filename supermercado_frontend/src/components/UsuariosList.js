// src/components/UsuariosList.js

import React, { useEffect, useState } from 'react';
import { getUsuarios, deleteUsuario } from '../services/usuariosService';
import '../styles/UsuariosList.css';

const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);

  // cargar usuarios al montar el componente
  useEffect(() => {
    cargarUsuarios();
  }, []);

  // funcion para cargar usuarios
  const cargarUsuarios = async () => {
    try {
      const data = await getUsuarios();
      console.log('Datos de usuarios:', data); // Verificar los datos recibidos
      setUsuarios(data);
    } catch (error) {
      console.error('error al cargar usuarios', error);
    }
  };

  // funcion para eliminar un usuario
  const eliminarUsuario = async (id) => {
    try {
      await deleteUsuario(id);
      cargarUsuarios(); // recargar lista despues de eliminar
    } catch (error) {
      console.error('error al eliminar usuario', error);
    }
  };

  return (
    <div className="usuarios-list">
      <h2>lista de usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            nombre: {usuario.nombre} - correo: {usuario.email} - rol: {usuario.rol}
            <button onClick={() => eliminarUsuario(usuario.id)}>eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosList;
