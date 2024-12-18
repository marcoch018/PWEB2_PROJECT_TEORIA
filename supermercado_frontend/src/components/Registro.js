// src/components/Registro.js
import React, { useState } from 'react';
import api from '../api/api';

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('usuario');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post('registro/', { nombre, email, password, rol });
            // redirigir al usuario o limpiar el formulario
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <select value={rol} onChange={(e) => setRol(e.target.value)} required>
                <option value="usuario">Usuario</option>
            </select>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default Registro;
