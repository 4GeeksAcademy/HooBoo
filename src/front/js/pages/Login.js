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

    const handleVolver = () => {
        navigate('/');
    };

    return (
        <div>
            <HoobooBanner />
            <div className="login-page-container">
                <div className="login-form-container">
                    <form onSubmit={handleSubmit}>
                        <h2 className='megaipertitulito'>Iniciar Sesión</h2>
                        {error && <div className="login-error-message">{error}</div>}
                        <label htmlFor="email" className="login-form-label">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo"
                            required
                            className="login-form-input" 
                        />
                        <label htmlFor="password" className="login-form-label">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            required
                            className="login-form-input" 
                        />
                        <button type="submit" className="login-form-button">Ingresar</button>
                        <button type="button" className="login-volver-button" onClick={handleVolver}>Volver</button>
                        <div className="login-forgot-password">
                            <a href="/RecuperarContraseña">¿Has olvidado tu contraseña?</a>
                        </div>
                        <div className="login-signup-redirect">
                            <p>¿No tienes una cuenta?</p>
                            <button onClick={() => navigate('/Registro')} className="login-cancel-button">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;