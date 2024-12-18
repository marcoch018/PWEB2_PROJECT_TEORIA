// src/components/CrearProducto.js
import React, { useState } from 'react';
import api from '../api/api';

const CrearProducto = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post('productos/', { nombre, precio, descripcion, stock, categoria });
            // Aquí puedes redirigir o limpiar el formulario
        } catch (error) {
            console.error('Error al crear producto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Producto</h2>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
            <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" required />
            <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" required />
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" required />
            <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoría" />
            <button type="submit">Crear</button>
        </form>
    );
};

export default CrearProducto;
