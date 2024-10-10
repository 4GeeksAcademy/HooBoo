import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Navbar.css";
import logoHooBoo from "/workspaces/HooBoo/src/front/img/logoHooBoo.png";

const Navbar = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleExplorarClick = () => {
        actions.traerTodosLosLibros();
        navigate("/vistainvitados");
    };

    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-left">
                    <button className="btn-logo" onClick={() => navigate("/")}>
                        <img src={logoHooBoo} alt="Logo" className="logo-img" />
                    </button>
                </div>
                <div className="navbar-right">
                    <button className="btn-login" onClick={() => navigate("/Login")}>Inicio Sesión</button>
                    <button className="btn-signup" onClick={() => navigate("/Registro")}>Registro</button>
                    <button className="btn-explorar" onClick={handleExplorarClick}>Explorar</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
