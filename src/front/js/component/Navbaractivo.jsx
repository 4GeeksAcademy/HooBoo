import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaRegStar, FaUserCircle, FaCompass, FaPlus, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { Context } from "../store/appContext";
import "../../styles/Navbaractivo.css";

const Navbaractivo = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const { store, actions } = useContext(Context);
    const [favoriteCount, setFavoriteCount] = useState(0);

    useEffect(() => {
        actions.obtenerDatosUsuario(); // Cargar los datos del usuario al montar el componente
    }, []); // Elimina 'store.favorites' de las dependencias

    const handleProfileClick = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    return (
        <nav className="navbar-activo">
            <div className="menu">
                <Link to="/" className="logo-activo">
                    <h4>Logo</h4>
                </Link>
                <Link to="/vistaexplorar" className="menu-item">
                    <FaCompass /> <span>Explorar</span>
                </Link>
                <Link to="/crear" className="menu-item">
                    <FaPlus /> <span>Crear</span>
                </Link>
                <Link to="/notificaciones" className="menu-item">
                    <FaBell /> <span>Notificaciones</span>
                </Link>
                <Link to="/Favoritos" className="menu-item favoritos">
                    <FaRegStar /> 
                    <span>Favoritos</span>
                    {favoriteCount > 0 && (
                        <div className="favorite-count">
                            {favoriteCount}
                        </div>
                    )}
                </Link>

                <div className="menu-item profile" onClick={handleProfileClick}>
                    <FaUserCircle /> <span>Mi Perfil</span>
                    {showProfileMenu && (
                        <div className="profile-menu">
                            <img src={store.user?.profile_pic || "default_profile_pic_url"} alt="Foto" className="profile-picture" />
                            <p className="perfil_nombre">{store.user?.username || "Nombre de usuario"}</p>
                            <p className="perfil_correo">{store.user?.email || "Correo"}</p>
                            <Link to="/Editarperfil" className="edit-profile-btn">
                                <FaCog /> Editar perfil
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="logout">
                <Link to="/" className="logout-btn">
                        <FaSignOutAlt /> Cerrar sesión
                </Link>
            </div>
        </nav>
    );
};

export default Navbaractivo;