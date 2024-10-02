
import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import BookCard from "./BookCard.jsx";  // Asegúrate de importar correctamente el componente BookCard
import "../../styles/BookCard.css";
import Footercolapsado from "./Footercolapsado.jsx"
import Navbaractivo from "./Navbaractivo.jsx";

const VistaExplorar = () => {
    const { store } = useContext(Context);

    return (
        <>
        <Navbaractivo />
        <div className="book-list">
            {store.books.map((book, index) => (
                <BookCard 
                    key={index}
                    book={book} // Pasamos el libro completo como prop
                />
            ))}
        </div>
        <Footercolapsado/>
        </>
    );
};

export default VistaExplorar;

