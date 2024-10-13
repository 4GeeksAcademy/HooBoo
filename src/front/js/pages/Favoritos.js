import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbaractivo from "../component/Navbaractivo.jsx";
import Footercolapsado from "../component/Footercolapsado.jsx";
import BookModal from "../component/BookModal.jsx"; 
import "../../styles/Favoritos.css";

const Favoritos = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false); 
    const [selectedBookId, setSelectedBookId] = useState(null); 

    useEffect(() => {
        if (!store.token) {
            navigate("/");
        }
    }, [store.token, navigate]);

    const handleRemoveFavorito = (book) => {
        if (!store.token) {
            navigate("/");
            return;
        }
        actions.removeFavoritos(book);
    };

    const handleOpenModal = (bookId) => {
        setSelectedBookId(bookId); 
        setShowModal(true); 
    };

    const handleCloseModal = () => {
        setShowModal(false); 
        setSelectedBookId(null); 
    };

    return (
        <div className="vista-favoritos">
            <Navbaractivo />
            <h2 className="favoritos-titulo">Mis Libros Favoritos</h2>
            <div className="favoritos-list">
                {store.favorites.length > 0 ? (
                    store.favorites.map((book, index) => (
                        <div key={index} className="favorito-card">
                            <div className="icons-container">
                                <button
                                    className="info-iicon derecha"
                                    onClick={() => handleOpenModal(book.id)} // Abre el modal con el ID del libro
                                >
                                    <i className="fa fa-info-circle"></i>
                                </button>

                                <button className="trash-iicon derecha" onClick={() => handleRemoveFavorito(book)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                                alt={book.volumeInfo.title}
                                className="favorito-image"
                            />
                            <h2 className="favorito-title">{book.volumeInfo.title}</h2>
                        </div>
                    ))
                ) : (
                    <p className="sin-favoritos">No hay favoritos guardados</p>
                )}
            </div>
            {selectedBookId && (
                <BookModal show={showModal} handleClose={handleCloseModal} bookId={selectedBookId} />
            )}

            <Footercolapsado />
        </div>
    );
};

export default Favoritos;
