import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaRegStar, FaWhatsapp, FaUserCircle, FaCompass, FaPlus, FaSignOutAlt, FaCog } from 'react-icons/fa';
import "../../styles/Navbaractivo.css";

const Navbaractivo = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleProfileClick = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    return (
        <nav className="navbar-activo">
            <div className="menu">
                <Link to="/main" className="logo-activo">
                    <h1>Logo</h1>
                </Link>
                <Link to="/busqueda" className="menu-item">
                    <FaSearch /> <span>Búsqueda</span>
                </Link>
                <Link to="/explorar" className="menu-item">
                    <FaCompass /> <span>Explorar</span>
                </Link>
                <Link to="/crear" className="menu-item">
                    <FaPlus /> <span>Crear</span>
                </Link>
                <Link to="/notificaciones" className="menu-item">
                    <FaBell /> <span>Notificaciones</span>
                </Link>
                <Link to="/favoritos" className="menu-item">
                    <FaRegStar /> <span>Favoritos</span>
                </Link>
                <Link to="/chat" className="menu-item">
                    <FaWhatsapp /> <span>Chat</span>
                </Link>

                <div className="menu-item profile" onClick={handleProfileClick}>
                    <FaUserCircle /> <span>Mi Perfil</span>
                    {showProfileMenu && (
                        <div className="profile-menu">
                            <img src="data:image/jpeg;base64,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" alt="Perfil" className="profile-picture" />
                            <p>Chloe Castilla</p>
                            <button className="edit-profile-btn">
                                <FaCog /> Editar perfil
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="logout">
                <Link to="/Login" className="logout-btn">
                        <FaSignOutAlt /> Cerrar sesión
                </Link>
            </div>
        </nav>
    );
};

export default Navbaractivo;