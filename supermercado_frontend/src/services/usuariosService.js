import api from '../api/api';

// Obtener todos los usuarios
export const getUsuarios = async () => {
  const response = await api.get('usuarios/');
  return response.data;
};

// Crear un usuario
export const createUsuario = async (usuario) => {
  const response = await api.post('usuarios/', usuario);
  return response.data;
};

// Actualizar un usuario
export const updateUsuario = async (id, usuario) => {
  const response = await api.put(`usuarios/${id}/`, usuario);
  return response.data;
};

// Eliminar un usuario
export const deleteUsuario = async (id) => {
  const response = await api.delete(`usuarios/${id}/`);
  return response.data;
};
