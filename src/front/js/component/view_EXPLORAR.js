import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Navbaractivo from "../component/Navbaractivo.jsx";
import Footercolapsado from "../component/Footercolapsado.jsx";
import BookCard from "../component/BookCard.jsx";
import "../../styles/view_explorar.css";

export const VistaExplorar = () => {
    const { store } = useContext(Context);
    const books = store.books; // Asumiendo que hay un arreglo de libros en el store

    return (
        <div className="vista-explorar">
            <Navbaractivo />
            <div className="hooboobaner">Hooked and Bookish</div>
            <div className="book-list">
                {books && books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
            <Footercolapsado />
        </div>
    );
}


