import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaRegStar, FaUserCircle, FaCompass, FaPlus, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { Context } from "../store/appContext";
import "../../styles/Navbaractivo.css";

const Navbaractivo = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    const handleExplorarClick = () => {
        actions.traerTodosLosLibros();
        navigate("/vistaexplorar");
    };

    return (
        <nav className="navbar-activo">
            <div className="menu">
                <Link to="/" className="logo-activo">
                    <h4>Logo</h4>
                </Link>
                <button className="menu-item" onClick={handleExplorarClick}>
                    <FaCompass /> <span>Explorar</span>
                </button>
                <Link to="/crear" className="menu-item">
                    <FaPlus /> <span>Crear</span>
                </Link>
                <Link to="/notificaciones" className="menu-item">
                    <FaBell /> <span>Notificaciones</span>
                </Link>
                <Link to="/Favoritos" className="menu-item favoritos">
                    <FaRegStar />
                    <span>Favoritos</span>
                    {store.favorites.length > 0 && (  // Usar directamente store.favorites.length
                        <div className="favorite-count">
                            {store.favorites.length} {/* Mostrar la cantidad de favoritos */}
                        </div>
                    )}
                </Link>

                <div className="menu-item profile" onClick={handleProfileClick}>
                    <FaUserCircle /> <span>Mi Perfil</span>
                    {showProfileMenu && (
                        <div className="profile-menu">
                            <img src="data:image/jpeg;base64,..." alt="Perfil" className="profile-picture" />
                            <p className="perfil_nombre">Chloe Castilla</p>
                            <p className="perfil_correo">Chloe_Castilla0776@gmail.com</p>
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
