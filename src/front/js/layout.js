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
import ChatCollapsed from './component/ChatCollapsed.jsx';

const AppContent = () => {
    const location = useLocation(); // Utilizamos useLocation dentro de un componente envuelto por BrowserRouter
    
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
            {/* Mostrar el Footer y Chat correspondientes dependiendo de la ruta */}
            {isHomePage ? (
                <Footer />
            ) : (
                <>
                    <FooterCollapsed />
                    <ChatCollapsed /> {/* Muestra el chat colapsado */}
                </>
            )}
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
