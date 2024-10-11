import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import BookCard from "./BookCard.jsx";
import "../../styles/BookCard.css";
import Footercolapsado from "./Footercolapsado.jsx";
import Navbaractivo from "./Navbaractivo.jsx";
import HoobooBanner from '../component/hooboo_banner.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons"; // Agregamos faTimes
import "../../styles/buscador_explorar.css";
import "../../styles/view_explorar.css";

const VistaExplorar = () => {
    const { store, actions } = useContext(Context); 
    const [searchBox, setSearchBox] = useState("");

    useEffect(() => {
        if (!store.user || Object.keys(store.user).length === 0) {
            actions.obtenerDatosUsuario();
        }

        const loadChatra = () => {
            window.ChatraID = 't5fKP896w9NNZy7GZ';
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://call.chatra.io/chatra.js';
            document.head.appendChild(script);

            script.onload = () => {
                if (window.Chatra) {
                    window.Chatra('set', 'widgetSize', {
                        width: '200px',
                        height: '400px'
                    });
                }
            };
        };

        loadChatra();

        return () => {
            const chatraScript = document.querySelector('script[src="https://call.chatra.io/chatra.js"]');
            if (chatraScript) {
                document.head.removeChild(chatraScript);
            }
        };
    }, []); 

    const handleSearch = (event) => {
        setSearchBox(event.target.value);
    };

    const clearSearch = () => {
        setSearchBox('');
    };

    const flattenBaseRespaldo = (baseRespaldo) => {
        return Object.values(baseRespaldo).flat();
    };

    const booksToDisplay = store.books && store.books.length > 0 ? store.books : flattenBaseRespaldo(store.base_respaldo);

    const filteredBooks = booksToDisplay.filter((book) => {
        const title = book.volumeInfo.title.toLowerCase();
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(" ").toLowerCase() : "";
        const description = book.volumeInfo.description ? book.volumeInfo.description.toLowerCase() : "";
        return title.includes(searchBox.toLowerCase()) ||
            authors.includes(searchBox.toLowerCase()) ||
            description.includes(searchBox.toLowerCase());
    });

    const nombreUsuario = store.user?.username || "usuario";

    return (
        <>
            <HoobooBanner />
            <Navbaractivo />
            <div className="searchBoxMar">
                <p className="welcome-messageEXPLORAR">Tu viaje literario empieza aquí, {nombreUsuario}!</p>
                <div className="searchContainer">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchBox}
                        onChange={handleSearch}
                        className="searchInput"
                    />
                    {searchBox && (
                        <FontAwesomeIcon
                            icon={faTimes} // Agregamos ícono de "X" para limpiar
                            className="clearSearchIcon" // Estilo para el ícono
                            onClick={clearSearch} // Limpiar la búsqueda al hacer clic
                        />
                    )}
                    {!searchBox && (
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
                    )}
                </div>
            </div>
            {store.loading ? (
                <div className="loading-container">
                    <p>Cargando libros...</p>
                </div>
            ) : (
                <div className="book-list">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <BookCard
                                key={index}
                                book={book}
                            />
                        ))
                    ) : (
                        <p className="no-results">No se encontraron resultados</p>
                    )}
                </div>
            )}
            <Footercolapsado />
        </>
    );
};

export default VistaExplorar;
