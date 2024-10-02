import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import HoobooBanner from '../component/hooboo_banner.jsx';
import '../../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await actions.iniciarSesion(email, password);

        if (response.success) {
            navigate('/vistaexplorar');
        } else {
            setError(response.error);
        }
    };

    return (
        <div>
            <HoobooBanner />
            <div className="form-page-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h2>Iniciar Sesión</h2>
                        {error && <div className="error-message">{error}</div>}
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo"
                            required
                        />
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                        <button type="submit">Ingresar</button>
                        <div className="forgot-password">
                            <a href="/RecuperarContraseña">¿Has olvidado tu contraseña?</a>
                        </div>
                        <div className="signup-redirect">
                            <p>¿No tienes una cuenta?</p>
                            <button onClick={() => navigate('/Registro')} className="cancel-button">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;