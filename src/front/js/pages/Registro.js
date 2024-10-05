import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import HoobooBanner from '../component/hooboo_banner.jsx'; 
import '../../styles/Registro.css';

const Registro = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [username, setUsername] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.crear_usuario(correo, contrasena, username).then(() => {
            navigate('/Login');
        });
    };

    const handleVolver = () => {
        navigate('/');
    };

    return (
        <div>
            <HoobooBanner />
            <div className="registro-page-container">
                <div className="registro-form-container">
                    <h2 className='supertituloxm'>Crear Usuario</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="registro-form-group">
                            <label htmlFor="username" className="registro-form-label">Nombre de Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                className="registro-form-input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Ingresa tu nombre"
                                required
                            />
                        </div>
                        <div className="registro-form-group">
                            <label htmlFor="correo" className="registro-form-label">Correo Electrónico:</label>
                            <input
                                type="email"
                                id="correo"
                                className="registro-form-input"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                placeholder="Ingresa tu correo"
                                required
                            />
                        </div>
                        <div className="registro-form-group">
                            <label htmlFor="contrasena" className="registro-form-label">Contraseña:</label>
                            <input
                                type="password"
                                id="contrasena"
                                className="registro-form-input"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                        </div>
                        <div className="registro-button-group">
                            <button type="submit" className="registro-form-button">Registrarse</button>
                            <button type="button" className="registro-volver-button" onClick={handleVolver}>Volver</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registro;