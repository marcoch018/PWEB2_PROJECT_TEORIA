// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// Configuracion base para  solicitudes HTTP
const api = axios.create({ 
    baseURL: API_URL, 
    headers: { 'Content-Type': 'application/json', 
    }, 
}); 

export default api;

export const fetchProductos = async () => {
    const response = await axios.get(`${API_URL}/productos/`);
    return response.data;
};

export const fetchUsuarios = async () => {
    const response = await axios.get(`${API_URL}/usuarios/`);
    return response.data;
};

export const fetchVentas = async () => {
    const response = await axios.get(`${API_URL}/ventas/`);
    return response.data;
};

// Nuevas funciones a futuro para solicitudes