import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbaractivo from "../component/Navbaractivo.jsx";
import Footercolapsado from "../component/Footercolapsado.jsx";
import "../../styles/Favoritos.css";

const Favoritos = () => {
    const { store, actions } = useContext(Context);

    const handleRemoveFavorito = (book) => {
        actions.removeFavoritos(book);
    };

    return (
        <div className="vista-favoritos">
            <Navbaractivo />
            <h2 className="favoritos-titulo">Mis Libros Favoritos</h2>
            <div className="favoritos-list">
                {store.favorites.length > 0 ? (
                    store.favorites.map((book, index) => (
                        <div key={index} className="favorito-card">
                            <button
                                className="trash-iicon derecha"
                                onClick={() => handleRemoveFavorito(book)}
                            >
                                <i className="fa fa-trash"></i>
                            </button>

                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                                alt={book.volumeInfo.title}
                                className="favorito-image"
                            />

                            <h2 className="favorito-title">{book.volumeInfo.title}</h2>

                            <Link to={`/book/${index}`}>
                                <button className="info-iicon derecha">
                                    <i className="fa fa-info-circle"></i>
                                </button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="sin-favoritos">No hay favoritos guardados</p>
                )}
            </div>
            <Footercolapsado />
        </div>
    );
};

export default Favoritos;