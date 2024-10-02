import React, { useState, useContext } from 'react';
import HoobooBanner from '../component/hooboo_banner.jsx';
import { Context } from '../store/appContext';
import '../../styles/RecuperarContraseña.css';

const RecuperarContraseña = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { actions } = useContext(Context);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const response = await actions.recuperarContraseña(email);
        if (response.success) {
            setMessage("Correo de recuperación enviado. Por favor, revisa tu bandeja de entrada.");
        } else {
            setMessage("Error al enviar el correo de recuperación: " + response.error);
        }
    };

    return (
        <div>
            <HoobooBanner />
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
                    <button type="submit">Recuperar Contraseña</button>
                </form>
            </div>
        </div>
    );
};

export default RecuperarContraseña;