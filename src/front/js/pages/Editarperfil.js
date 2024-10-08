import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/Editarperfil.css";

const Editarperfil = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSaveChanges = (e) => {
        e.preventDefault();
        console.log("Cambios guardados:", { username, email, password });
    };

    return (
        <div className="edit-form-container">
            <div className="profile-pic-section">
                <div className="profile-pic-box">
                    <p>Editar foto de perfil</p>
                </div>
            </div>

            <div className="profile-edit-section">
                <form onSubmit={handleSaveChanges}>
                    <div className="dit-form-group">
                        <label htmlFor="username">Editar nombre de usuario</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Nombre de usuario"
                            required
                        />
                    </div>

                    <div className="dit-form-group">
                        <label htmlFor="email">Editar correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo electrónico"
                            required
                        />
                    </div>

                    <div className="dit-form-group">
                        <label htmlFor="password">Cambiar contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nueva contraseña"
                            required
                        />
                    </div>
                    <Link to="/Home" >
                        <button type="submit" className="edit-save-button">
                            Guardar cambios
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Editarperfil;