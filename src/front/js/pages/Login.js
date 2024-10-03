import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import HoobooBanner from '../component/hooboo_banner.jsx';
import '../../styles/Login.css';
import Modal from 'react-modal'; // Paquete para modales (puedes usar otro si prefieres)

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar modal de contraseña
    const [recoveryEmail, setRecoveryEmail] = useState(''); // Para el email de recuperación
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

    const handleSignupRedirect = () => {
        navigate('/Registro');
    };

    // Lógica para manejar la recuperación de contraseña
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const response = await actions.recuperarContraseña(recoveryEmail);
        if (response.success) {
            alert("Correo de recuperación enviado. Por favor, revisa tu bandeja de entrada.");
            setIsModalOpen(false); // Cerrar el modal después de enviar
        } else {
            alert("Error al enviar el correo de recuperación: " + response.error);
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
                            <a href="#" onClick={() => setIsModalOpen(true)}>¿Has olvidado tu contraseña?</a>
                        </div>
                        <div className="signup-redirect">
                            <p>¿No tienes una cuenta?</p>
                            <button onClick={handleSignupRedirect} className="cancel-button">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal para recuperación de contraseña */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>Recuperar Contraseña</h2>
                <form onSubmit={handlePasswordReset}>
                    <label htmlFor="recoveryEmail">Ingresa tu correo electrónico:</label>
                    <input
                        type="email"
                        id="recoveryEmail"
                        value={recoveryEmail}
                        onChange={(e) => setRecoveryEmail(e.target.value)}
                        placeholder="Correo de recuperación"
                        required
                    />
                    <button type="submit">Enviar</button>
                    <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                </form>
            </Modal>
        </div>
    );
};

export default Login;
