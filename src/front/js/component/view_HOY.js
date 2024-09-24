import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/view_hoy.css";
import BookList from "../pages/book_list";



export const VistaHoy = () => {

    const { store, actions } = useContext(Context);
    
    return (
        <div className="container-hoy">
            <h1> Estamos añadiendo los libros añadidos hoy a tu Panel :) </h1>
            <div className="grid">
            <BookList>

            </BookList>
</div>

        </div>
    );

}