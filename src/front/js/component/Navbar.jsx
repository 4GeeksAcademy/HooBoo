import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Navbar.css";
import logoHooBoo from "../../img/logoHooBoo.png";

const Navbar = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false); // Maneja la apertura del menú

    const handleExplorarClick = () => {
        actions.traerTodosLosLibros();
        navigate("/vistainvitados");
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Alternar el estado del menú
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <button className="btn-logo" onClick={() => navigate("/")}>
                    <img src={logoHooBoo} alt="Logo" className="logo-img" />
                </button>
            </div>
            <div className="navbar-right">
                <div className="navbar-links">
                    {/* Para mostrar los botones en pantallas grandes */}
                    <button className="btn-login" onClick={() => navigate("/Login")}>Inicio Sesión</button>
                    <button className="btn-signup" onClick={() => navigate("/Registro")}>Registro</button>
                    <button className="btn-explorar" onClick={handleExplorarClick}>Explorar</button>
                </div>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    &#9776; {/* Icono de menú */}
                </button>
                <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                    {/* Estos botones son para pantallas pequeñas */}
                    <button className="btn-login" onClick={() => navigate("/Login")}>Inicio Sesión</button>
                    <button className="btn-signup" onClick={() => navigate("/Registro")}>Registro</button>
                    <button className="btn-explorar" onClick={handleExplorarClick}>Explorar</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;