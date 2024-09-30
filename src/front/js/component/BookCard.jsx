import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/BookCard.css";

const BookCard = ({ book }) => {
    const imageUrl = book.image || "https://via.placeholder.com/150";  // Imagen de reserva si no hay disponible
    const title = book.title || "Título no disponible";  // Título por defecto si no hay título

    return (
        <div className="book-card">
            <img src={imageUrl} alt={title} className="book-image-card" />
            <div className="icons-container">
                <FontAwesomeIcon icon={faHeart} className="icon-book favorite-icon" title="Agregar a Favoritos" />
                <FontAwesomeIcon icon={faInfoCircle} className="icon-book info-icon" title="Más Información" />
            </div>
            <div className="book-title">{title}</div>
        </div>
    );
};

export default BookCard;
