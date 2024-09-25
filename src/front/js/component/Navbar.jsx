import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <Link to="/Private" className="logo">
                    <img src="logo.png" alt="Logo" className="logo-img" />
                </Link>
                <Link to="/hoy" className="nav-link">Hoy</Link>
                <Link to="/explorar" className="nav-link">Explorar</Link>
            </div>
            <div className="navbar-right">
                <Link to="/Login" className="btn-login">
                    Iniciar Sesión
                </Link>
                <Link to="/Registro" className="btn-signup">
                    Registrarse
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
