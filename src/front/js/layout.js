import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import injectContext from "./store/appContext";

import { VistaHoy } from "./component/view_HOY";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <VistaHoy>
                    <Routes>
                        <Route element={<VistaHoy />} path="/vistahoy" />
                        {/* <Route element={</>} path="/" />
                        <Route element={< />} path="/single/:theid" /> */}
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    </VistaHoy>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
