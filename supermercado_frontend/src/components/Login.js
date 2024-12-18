import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setRol }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  // Asegúrate de usar "password" aquí

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', { email, password });  // Envía "password"
            const { token, rol } = response.data;
            localStorage.setItem('token', token);
            setRol(rol);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default Login;
