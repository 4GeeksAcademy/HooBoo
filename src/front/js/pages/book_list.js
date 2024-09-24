/* lista de los libros*/

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { OneBook, OneBookAcccion } from "./one_book._accion.js";
import OneBookFantasia from "./one_book_fantasia.js";
import OneBookThriller from "./one_book_thriller.js";
import OneBookAccion from "./one_book._accion.js";
import OneBookRomance from "./one_book_romance.js";

const BookList = () => {
    
    return (
        <div>
            <OneBookAccion></OneBookAccion>
            
            <OneBookFantasia></OneBookFantasia>

            <OneBookThriller></OneBookThriller>

            <OneBookRomance></OneBookRomance>
            {/* aqui irá un .map para cargar los libros */}
        </div>
    )
}


export default BookList