import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="">
            <h2 className="">Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="correo" className="form-label">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="correo"
                        className="form-input"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="Ingresa tu correo"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contrasena" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        id="contrasena"
                        className="form-input"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                        required
                    />
                </div>
                <div className="">
                    <button type="submit" className="">Registrarse</button>
                </div>
            </form>
        </div>
    );
};

export default Registro;