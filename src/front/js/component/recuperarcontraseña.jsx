import React, { useState, useContext } from 'react';
import HoobooBanner from '../component/hooboo_banner.jsx';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/RecuperarContraseña.css';

const RecuperarContraseña = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const response = await actions.recuperarContraseña(email);
        if (response.success) {
            setMessage("Correo de recuperación enviado. Por favor, revisa tu bandeja de entrada.");
        } else {
            setMessage("Error al enviar el correo de recuperación: " + response.error);
        }
    };

    const handleCancel = () => {
        navigate("/Login");
    };

    return (
        <div>
            <HoobooBanner />
            <div className='login-page-container'>
                <div className="recuperar-container">
                    <h2>Recuperar Contraseña</h2>
                    {message && <div className="recuperar-message">{message}</div>}
                    <form onSubmit={handlePasswordReset}>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo"
                            required
                        />
                        <div className="button-group200">
                            <button type="submit" className="recuperar-btn">Recuperar Contraseña</button>
                            <button type="button" className="cancel-btn" onClick={handleCancel}>Cancelar</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default RecuperarContraseña;