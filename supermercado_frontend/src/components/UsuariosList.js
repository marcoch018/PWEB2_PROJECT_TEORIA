import React, { useEffect, useState } from 'react';
import { getUsuarios, deleteUsuario } from '../services/usuariosService';

const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);

  // Cargar usuarios al montar el componente
  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error('Error al cargar usuarios', error);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await deleteUsuario(id);
      cargarUsuarios(); // Recargar lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar usuario', error);
    }
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.email}
            <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosList;
