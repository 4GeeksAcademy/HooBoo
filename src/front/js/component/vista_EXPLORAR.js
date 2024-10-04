
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import BookCard from "./BookCard.jsx";
import "../../styles/BookCard.css";
import Footercolapsado from "./Footercolapsado.jsx"
import Navbaractivo from "./Navbaractivo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../../styles/buscador_explorar.css";

const VistaExplorar = () => {
    const { store } = useContext(Context);
    const [searchBox, setSearchBox] = useState("");

    const handleSearch = (event) => {
        setSearchBox(event.target.value);
    };

    const filteredBooks = store.books.filter((book) => {
        const title = book.volumeInfo.title.toLowerCase();// en caso de que el usuario busque por el titulo
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(" ").toLowerCase() : ""; // en caso de que el usuario busque por autores
        const description = book.volumeInfo.description ? book.volumeInfo.description.toLowerCase() : ""; // en caso de que el usuario busque por alguna palabra de la descripcion
        return title.includes(searchBox.toLowerCase()) ||
            authors.includes(searchBox.toLowerCase()) ||
            description.includes(searchBox.toLowerCase());
    });
    return (
        <>
            <Navbaractivo />
            <div className="searchBoxMar">
                <div className="searchContainer">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchBox}
                        onChange={handleSearch}
                        className="searchInput"
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
                </div>
            </div>

            <div className="book-list">
                {filteredBooks.map((book, index) => (
                    <BookCard
                        key={index}
                        book={book} 
                    />
                ))}
            </div>
            <Footercolapsado />
        </>
    );
};
export default VistaExplorar;
