import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import HoobooBanner from '../component/hooboo_banner.jsx'; // Importar el banner
import '../../styles/Registro.css';

const Registro = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.crear_usuario(correo, contrasena).then(() => {
            navigate('/Login');
        });
    };

    return (
        <div>
            <HoobooBanner /> {/* Banner en la parte superior */}
            <div className="form-page-container"> {/* Contenedor para centrar el formulario verticalmente */}
                <div className="form-container">
                    <h2>Crear Usuario</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
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
                        <div className="form-group">
                            <button type="submit" className="form-button">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registro;