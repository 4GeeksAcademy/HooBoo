import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Navbaractivo from '../component/Navbaractivo.jsx';
import Footercolapsado from '../component/Footercolapsado.jsx';
import "../../styles/Editarperfil.css";

const Editarperfil = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [selectedFile, setSelectedFile] = useState(null); // Para almacenar la imagen seleccionada
    const navigate = useNavigate();

    useEffect(() => {
        const loadUserData = async () => {
            const token = localStorage.getItem("jwt-token");
            if (!token) {
                console.error("Token no encontrado. Asegúrate de que el usuario haya iniciado sesión.");
                return;
            }
            try {
                const res = await fetch(`${process.env.BACKEND_URL}/api/perfil`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    setUsername(data.username);
                    setEmail(data.email);
                    setProfilePic(data.profile_pic);
                } else {
                    const errorText = await res.text();
                    console.error("Error al obtener los datos del usuario:", res.status, errorText);
                    if (res.status === 401) {
                        console.error("Token expirado. Por favor, inicia sesión de nuevo.");
                    }
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };

        loadUserData();
    }, []);

    // Manejar la selección de imagen
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
    
        const token = localStorage.getItem("jwt-token");
        if (!token) {
            console.error("Token no encontrado. No se pueden guardar los cambios.");
            return;
        }
    
        // Usamos FormData para enviar tanto los datos como la imagen
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        if (password) formData.append('password', password); // Solo enviamos si el usuario ha cambiado la contraseña
        if (selectedFile) formData.append('profile_pic', selectedFile); // Adjuntamos la imagen si se seleccionó
    
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/perfil`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // No ponemos 'Content-Type', el navegador lo hará automáticamente con `FormData`
                },
                body: formData,
            });
    
            if (res.ok) {
                console.log("Cambios guardados");
                navigate("/login"); // Navegar o recargar para ver los cambios
            } else {
                const errorText = await res.text();
                console.error("Error al guardar los cambios:", res.status, errorText);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <div>
            < Navbaractivo />
            <h2 className="nombre-editar-perfil">Editar Perfil</h2>
            <div className="edit-form-container">
                <div className="profile-pic-section">
                <div className="profile-pic-box">
                        {profilePic ? (
                            console.log(profilePic),
                            <img 
                                src={`https://glorious-zebra-jjr544wgv59whj7rg-3000.app.github.dev/static/profile_pics/${profilePic}`} 
                                alt="Foto de perfil" 
                                className="profile-pic" 
                            />
                        ) : (
                            <div>
                                <div className="dit-form-group">
                                    <label htmlFor="profilePic">Subir nueva foto de perfil</label>
                                    <input
                                        type="file"
                                        id="profilePic"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                        )}
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