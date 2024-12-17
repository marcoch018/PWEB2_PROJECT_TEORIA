import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Bienvenido al Dashboard</h1>
      <div className="stats">
        <div className="stat">
          <h2>Productos</h2>
          <p>50</p>
        </div>
        <div className="stat">
          <h2>Usuarios</h2>
          <p>20</p>
        </div>
        <div className="stat">
          <h2>Ventas</h2>
          <p>100</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
