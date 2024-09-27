import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";

import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Registro from "./pages/Registro";
import Home from "./pages/Home";
import Editarperfil from "./pages/Editarperfil";
import injectContext from "./store/appContext";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Routes>
                        <Route element={<Principal />} path="/" />
                        <Route element={<Login />} path="/Login" />
                        <Route element={<Registro />} path="/Registro" />
                        <Route element={<Home />} path="/Home" />
                        <Route element={<Editarperfil />} path="/Editarperfil" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
