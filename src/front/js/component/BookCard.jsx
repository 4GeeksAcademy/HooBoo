import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../styles/BookCard.css";


const BookCard = ({ book }) => {
    const navigate = useNavigate();
    const imageUrl = book.image || "https://via.placeholder.com/150";
    const title = book.title || "Título no disponible";

    const handleInfoClick = () => {
        navigate(`/book/${book.id}`);
    };

    return (
        <div className="book-card">
            <img src={imageUrl} alt={title} className="book-image-card" />
            <div className="icons-container">
                <FontAwesomeIcon icon={faHeart} className="icon-book favorite-icon" title="Agregar a Favoritos" />
                <FontAwesomeIcon icon={faInfoCircle} className="icon-book info-icon" title="Más Información" onClick={handleInfoClick} />
            </div>
            <div className="book-title">{title}</div>
        </div>
    );
};

export default BookCard;