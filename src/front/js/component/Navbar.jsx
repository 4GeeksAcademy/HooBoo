import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import logoHooBoo from "/workspaces/HooBoo/src/front/img/logoHooBoo.png";

const Navbar = () => {
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="btn-logo">
                        <img src={logoHooBoo} alt="Logo" className="logo-img" />
                    </Link>
                    <Link to="/vistaexplorar" className="btn-explorar">Explorar</Link>
                </div>
                <div className="navbar-right">
                    <Link to="/Login" className="btn-login">Inicio Sesión</Link>
                    <Link to="/Registro" className="btn-signup">Registro</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
