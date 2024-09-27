import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/view_explorar.css";
import BookList from "../pages/book_list";
import Navbaractivo from "./Navbaractivo.jsx";

import "../../styles/Navbaractivo.css";




export const VistaExplorar = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
        <Navbaractivo />
            <div className="container-hoy">
                <div className="grid">
                    <BookList>

                    </BookList>
                </div>

            </div>
        </>
    );

}


