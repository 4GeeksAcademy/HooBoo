import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2';
import BookModal from './BookModal.jsx';
import "../../styles/BookCard.css";

const BookCard = ({ book, onModalToggle }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const imageUrl = book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150";
    const title = book.volumeInfo.title || "Título no disponible";
    const [isFavorite, setIsFavorite] = useState(store.favorites.some(fav => fav.id === book.id));
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showLoginAlert = () => {
        Swal.fire({
            title: '¡Hola Booklover!',
            text: 'Para disfrutar de nuestro contenido, te invitamos a que te registres o inicies sesión',
            icon: 'warning',
            iconColor: "#7029ab",
            confirmButtonText: 'Iniciar sesión',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            confirmButtonColor: '#7029ab',
            cancelButtonColor: '#7029ab',
            background: 'whitesmoke',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login');
            }
        });
    };

    const handleFavoriteClick = () => {
        if (!store.token) {
            showLoginAlert();
            return;
        }
        if (isFavorite) {
            actions.removeFavoritos(book);
        } else {
            actions.addFavoritos(book);
        }
        setIsFavorite(!isFavorite);
    };

    const handleInfoClick = () => {
        if (!store.token) {
            showLoginAlert();
            return;
        }
        setIsModalOpen(true);
        onModalToggle(true);
    };

    const closeModal = () => {
        setIsModalOpen(false); 
        onModalToggle(false);
    };

    return (
        <div className="book-card">
            <img src={imageUrl} alt={title} className="book-image-card" />
            <div className="icons-container">
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="icon-book info-icon"
                    title="Más Información"
                    onClick={handleInfoClick} 
                />
                <FontAwesomeIcon
                    icon={faHeart}
                    className={`icon-book favorite-icon ${isFavorite ? "favorite-active" : ""}`}
                    title="Agregar a Favoritos"
                    onClick={handleFavoriteClick}
                />
            </div>
            <div className="book-title">{title}</div>

            <BookModal show={isModalOpen} handleClose={closeModal} bookId={book.id} />
        </div>
    );
};

export default BookCard;
