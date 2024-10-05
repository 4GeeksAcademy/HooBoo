import React, { useState, useContext } from 'react';
import HoobooBanner from '../component/hooboo_banner.jsx';
import { Context } from '../store/appContext.js';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/ResetPassword.css'

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const { actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        const response = await actions.cambiarcontraseña(id, newPassword);
        if (response.success) {
            setMessage("Contraseña actualizada con éxito.");
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } else {
            setMessage("Error al cambiar la contraseña: " + response.error);
        }
    };

    return (
        <div>
            <HoobooBanner />
            <div className="reset-container">
                <h2 className="reset-titulo">Cambiar Contraseña</h2>
                {message && <div className="reset-message">{message}</div>}
                <form onSubmit={handlePasswordChange}>
                    <label className="reset-form-label" htmlFor="newPassword">Nueva contraseña:</label>
                    <input
                        className="reset-form-input"
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Ingresa tu nueva contraseña"
                        required
                    />
                    <button className="reset-form-button" type="submit">Cambiar Contraseña</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;