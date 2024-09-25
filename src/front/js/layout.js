import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";

import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Registro from "./pages/Registro";
import Home from "./pages/Home";
import injectContext from "./store/appContext";

import Footer from "./component/footer";

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
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
