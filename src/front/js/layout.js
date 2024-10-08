import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BackendURL from "./component/backendURL.jsx";
import VistaExplorar from "./component/vista_EXPLORAR.jsx";
import BookDetail from "./component/BookDetail.jsx";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Registro from "./pages/Registro";
import Editarperfil from "./pages/Editarperfil";
import injectContext from "./store/appContext";
// import HoobooBanner from './component/hooboo_banner.jsx';
import Favoritos from './pages/Favoritos.js';
import RecuperarContraseña from "./component/recuperarcontraseña.jsx";
import ResetPassword from "./pages/ResetPassword.js";



const AppContent = () => {
    const location = useLocation(); 
    const isHomePage = location.pathname === "/";

    return (
        <div>
            
            {/* <HoobooBanner /> */}
            <Routes>
                <Route element={<Principal />} path="/" />
                <Route element={<Login />} path="/Login" />
                <Route element={<Registro />} path="/Registro" />
                <Route element={<VistaExplorar />} path="/vistaexplorar" />
                <Route element={<BookDetail />} path="/book/:bookId" />
                <Route element={<Editarperfil />} path="/Editarperfil" />
                <Route element={<Favoritos />} path="/Favoritos" />
                <Route element={<RecuperarContraseña />} path="/RecuperarContraseña" />
                <Route element={<ResetPassword />} path="/reset-password/:id" />
                <Route element={<h1>Not found!</h1>} />
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
