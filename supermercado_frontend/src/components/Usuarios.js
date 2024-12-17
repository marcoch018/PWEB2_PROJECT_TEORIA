import React, { useState, useEffect } from 'react';
import { fetchUsuarios } from '../api/api';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const getUsuarios = async () => {
            const data = await fetchUsuarios();
            setUsuarios(data);
        };
        getUsuarios();
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nombre} - {usuario.rol}</li>
                ))}
            </ul>
        </div>
    );
};

export default Usuarios;
