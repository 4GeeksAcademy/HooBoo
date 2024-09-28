import React from "react";
import "../../styles/view_explorar.css";
import BookList from "../pages/book_list.js";
import Navbaractivo from "./Navbaractivo.jsx";
import "../../styles/Navbaractivo.css";


export const VistaExplorar = () => {

    return (
        <>
            <Navbaractivo />
            <div className="container-hoy">
                <div className="grid">
                    <BookList/>
                </div>

            </div>
        </>
    );

}


