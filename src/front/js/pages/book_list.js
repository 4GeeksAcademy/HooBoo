/* lista de los libros*/
import "../../styles/view_explorar.css";
import React from "react";
import OneBookFantasia from "./one_book_fantasia.js";
import OneBookThriller from "./one_book_thriller.js";
import OneBookAccion from "./one_book._accion.js";
import OneBookRomance from "./one_book_romance.js";

const BookList = () => {

    return (
        <div className="pinterest-grid">
            <OneBookAccion />
            <OneBookFantasia />
            <OneBookThriller />
            <OneBookRomance />
        </div>
    )
}

export default BookList