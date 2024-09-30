import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/view_explorar.css";
import BookList from "../pages/book_list.js";
import Navbaractivo from "./Navbaractivo.jsx";
import "../../styles/Navbaractivo.css";


export const VistaExplorar = () => {
    const { store } = useContext(Context);
    const books = store.books; // Asumiendo que hay un arreglo de libros en el store

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


