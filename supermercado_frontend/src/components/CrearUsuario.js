// src/components/CrearUsuario.js
import React, { useState } from 'react';
import api from '../api/api';

const CrearUsuario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [rol, setRol] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post('usuarios/', { nombre, email, contraseña, rol });
            // Aquí puedes redirigir o limpiar el formulario
        } catch (error) {
            console.error('Error al crear usuario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Usuario</h2>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" required />
            <select value={rol} onChange={(e) => setRol(e.target.value)} required>
                <option value="">Seleccionar rol</option>
                <option value="administrador">Administrador</option>
                <option value="empleado">Empleado</option>
            </select>
            <button type="submit">Crear</button>
        </form>
    );
};

export default CrearUsuario;
