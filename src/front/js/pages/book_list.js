/* lista de los libros*/


import React from "react";
import OneBookFantasia from "./one_book_fantasia.js";
import OneBookThriller from "./one_book_thriller.js";
import OneBookAccion from "./one_book_accion.js";
import OneBookRomance from "./one_book_romance.js";

const BookList = () => {

    return (
        <>
            <div className="pinterest-grid">
                <div className="pinterest-item"><OneBookAccion /></div>
                <div className="pinterest-item"><OneBookFantasia /></div>
                <div className="pinterest-item"><OneBookThriller /></div>
                <div className="pinterest-item"><OneBookRomance /></div>
            </div>

            {/* aqui irá un .map para cargar los libros */}
        </>
    )
}


export default BookList