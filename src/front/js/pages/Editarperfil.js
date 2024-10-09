import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbaractivo from '../component/Navbaractivo.jsx';
import Footercolapsado from '../component/Footercolapsado.jsx';
import avatar1 from '../../img/avatar1.png';
import avatar2 from '../../img/avatar2.png';
import avatar3 from '../../img/avatar3.png';
import avatar4 from '../../img/avatar4.png';
import "../../styles/Editarperfil.css";

const Editarperfil = () => {
    const { store } = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.token) {
            navigate("/");
        }

        const loadUserData = async () => {
            try {
                const res = await fetch(`${process.env.BACKEND_URL}/api/perfil`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${store.token}`,
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    setUsername(data.username);
                    setEmail(data.email);
                    setSelectedAvatar(data.profile_pic || avatar1);
                } else {
                    console.error("Error al obtener los datos del usuario:", res.status);
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };

        loadUserData();
    }, [store.token, navigate]); // Solo ejecutamos si el token cambia

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('profile_pic', selectedAvatar);
        if (password) formData.append('password', password);

        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/perfil`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${store.token}`,
                },
                body: formData,
            });

            if (res.ok) {
                console.log("Cambios guardados");
                navigate("/login");
            } else {
                console.error("Error al guardar los cambios:", res.status);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <div>
            <Navbaractivo />
            <h2 className="nombre-editar-perfil">Editar Perfil</h2>
            <div className="edit-form-container">
                <div className="profile-pic-section">
                    <h3 className="titulito-avataress">Selecciona tu Avatar</h3>
                    {selectedAvatar && (
                        <img src={selectedAvatar} alt="Avatar Seleccionado" className="selected-avatar" />
                    )}
                    <div className="avatar-selection">
                        {[avatar1, avatar2, avatar3, avatar4].map((avatar, index) => (
                            <div key={index} className="avatar-option" onClick={() => handleAvatarSelect(avatar)}>
                                <img
                                    src={avatar}
                                    alt={`Avatar ${index + 1}`}
                                    className={`avatar-image ${selectedAvatar === avatar ? "selected" : ""}`}
                                />
                            </div>
                        ))}
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
                            />
                        </div>

                        <div className="button-group">
                            <button type="submit" className="edit-save-button">
                                Guardar cambios
                            </button>
                            <Link to="/vistaexplorar">
                                <button type="button" className="edit-cancel-button">
                                    Cancelar
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footercolapsado />
        </div>
    );
};

export default Editarperfil;
