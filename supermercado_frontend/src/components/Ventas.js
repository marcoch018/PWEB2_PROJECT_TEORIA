import React, { useState, useEffect } from 'react';
import { fetchVentas } from '../api/api';

const Ventas = () => {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        const getVentas = async () => {
            const data = await fetchVentas();
            setVentas(data);
        };
        getVentas();
    }, []);

    return (
        <div>
            <h1>Lista de Ventas</h1>
            <ul>
                {ventas.map((venta) => (
                    <li key={venta.id}>Venta #{venta.id} - Total: ${venta.total}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ventas;
