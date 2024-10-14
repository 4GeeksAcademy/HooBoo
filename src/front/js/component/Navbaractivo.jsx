import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaRegStar, FaUserCircle, FaCompass, FaPlus, FaSignOutAlt, FaCog, FaBars } from 'react-icons/fa';
import { Context } from "../store/appContext";
import defaultAvatar from '../../img/default.png';
import "../../styles/Navbaractivo.css";
import logoHooBoo from "../../img/logoHooBoo.png";

const Navbaractivo = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [isSidebarActive, setSidebarActive] = useState(false);
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.obtenerDatosUsuario();
    }, []);

    const handleProfileClick = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    const handleExplorarClick = () => {
        actions.traerTodosLosLibros();
        navigate("/vistaexplorar");
    };

    const handleLogout = () => {
        actions.cerrarSesion();
        navigate("/");
    };

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
    };

    return (
        <>
            <button className="menu-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>
            <nav className={`navbar-activo ${isSidebarActive ? 'active' : ''}`}>
                <div className="menu">
                    <div className="logo-activo">
                        <img src={logoHooBoo} alt="Logo" className="logo-img-explorar" />
                    </div>

                    <button className="menu-item" onClick={handleExplorarClick}>
                        <FaCompass /> <span>Explorar</span>
                    </button>

                    <Link to="/Favoritos" className="menu-item favoritos">
                        <FaRegStar />
                        <span>Favoritos</span>
                        {store.favorites.length > 0 && (
                            <div className="favorite-count">
                                {store.favorites.length}
                            </div>
                        )}
                    </Link>

                    <div className="menu-item profile" onClick={handleProfileClick}>
                        <FaUserCircle /> <span>Mi Perfil</span>
                        {showProfileMenu && (
                            <div className="profile-menu">
                                <img 
                                    src={store.user?.profile_pic || defaultAvatar} 
                                    alt="Foto" 
                                    className="profile-picture" 
                                />
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
                    <button className="logout-btn" onClick={handleLogout}>
                        <FaSignOutAlt className="logout-icon" />
                        <span className="logout-text">Cerrar sesión</span>
                    </button>
                </div>

            </nav>
        </>
    );
};

export default Navbaractivo;
