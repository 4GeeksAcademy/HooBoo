import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BackendURL from "./component/backendURL.jsx";
import VistaExplorar from "./component/vista_EXPLORAR.jsx";
import VistaInvitados from "./component/vista_INVITADOS.jsx";
import BookDetail from "./component/BookDetail.jsx";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Registro from "./pages/Registro";
import Editarperfil from "./pages/Editarperfil";
import injectContext from "./store/appContext";
import Favoritos from './pages/Favoritos.js';
import RecuperarContraseña from "./component/recuperarcontraseña.jsx";
import ResetPassword from "./pages/ResetPassword.js";
import AcercaDeNosotros from "./component/AcercaDeNosotros.jsx"; // Importa el componente AcercaDeNosotros

const AppContent = () => {
    const location = useLocation(); 
    const isHomePage = location.pathname === "/";

    return (
        <div>
            <Routes>
                <Route element={<Principal />} path="/" />
                <Route element={<Login />} path="/Login" />
                <Route element={<Registro />} path="/Registro" />
                <Route element={<VistaExplorar />} path="/vistaexplorar" />
                <Route element={<VistaInvitados />} path="/vistainvitados" />
                <Route element={<BookDetail />} path="/book/:bookId" />
                <Route element={<Editarperfil />} path="/Editarperfil" />
                <Route element={<Favoritos />} path="/Favoritos" />
                <Route element={<RecuperarContraseña />} path="/RecuperarContraseña" />
                <Route element={<ResetPassword />} path="/reset-password/:id" />
                <Route element={<AcercaDeNosotros />} path="/acerca-de-nosotros" /> {/* Nueva ruta para Acerca de Nosotros */}
                <Route element={<h1>Not found!</h1>} path="*" /> {/* Ruta para manejar páginas no encontradas */}
            </Routes>
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
