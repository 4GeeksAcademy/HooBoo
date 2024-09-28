import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { BackendURL } from "./component/backendURL";
import { VistaExplorar } from "./component/vista_EXPLORAR.js";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Registro from "./pages/Registro";
import Home from "./pages/Home";
import Editarperfil from "./pages/Editarperfil";
import injectContext from "./store/appContext";
import HoobooBanner from './component/hooboo_banner.jsx';
import Footer from './component/Footer.jsx';
import FooterCollapsed from './component/FooterCollapsed.jsx';

// Componente para manejar el enrutamiento y la lógica de footers
const AppContent = () => {
    const location = useLocation(); // Utilizamos useLocation dentro de un componente envuelto por BrowserRouter
    
    // Verificamos si estamos en la página principal
    const isHomePage = location.pathname === "/";

    return (
        <div>
            <HoobooBanner />
            <Routes>
                <Route element={<Principal />} path="/" />
                <Route element={<Login />} path="/Login" />
                <Route element={<Registro />} path="/Registro" />
                <Route element={<Home />} path="/Home" />
                <Route element={<VistaExplorar />} path="/vistaexplorar" />
                <Route element={<Editarperfil />} path="/Editarperfil" />
                <Route element={<h1>Not found!</h1>} />
            </Routes>
            {/* Mostrar el Footer correspondiente dependiendo de la ruta */}
            {isHomePage ? <Footer /> : <FooterCollapsed />}
        </div>
    );
};

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <BrowserRouter basename={basename}>
            <AppContent />
        </BrowserRouter>
    );
};

export default injectContext(Layout);
