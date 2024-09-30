import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/BookCard.css";

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="icons-container">
                <FontAwesomeIcon icon={faHeart} className="icon-book favorite-icon" title="Agregar a Favoritos" />
                <FontAwesomeIcon icon={faInfoCircle} className="icon-book info-icon" title="Más Información" />
            </div>
            <div className="book-title">{book.title}</div>
        </div>
    );
};

export default BookCard;