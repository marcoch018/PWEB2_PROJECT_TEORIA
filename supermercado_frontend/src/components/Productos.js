import React, { useState, useEffect } from 'react';
import { fetchProductos } from '../api/api';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = async () => {
            const data = await fetchProductos();
            setProductos(data);
        };
        getProductos();
    }, []);

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>{producto.nombre} - ${producto.precio}</li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;
