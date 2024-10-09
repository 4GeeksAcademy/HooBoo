import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/BookCard.css";

const BookCard = ({ book }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const imageUrl = book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150";
    const title = book.volumeInfo.title || "Título no disponible";
    const [isFavorite, setIsFavorite] = useState(store.favorites.some(fav => fav.id === book.id));

    const handleFavoriteClick = () => {
        if (!store.user || Object.keys(store.user).length === 0) {
            alert("Para agregar libros a favoritos, debes registrarte o iniciar sesión.");
        } else {
            if (isFavorite) {
                actions.removeFavoritos(book);
            } else {
                actions.addFavoritos(book);
            }
            setIsFavorite(!isFavorite);
        }
    };

    const handleInfoClick = () => {
        if (!store.user || Object.keys(store.user).length === 0) {
            alert("Para ver la información del libro, debes registrarte o iniciar sesión.");
        } else {
            navigate(`/book/${book.id}`);
        }
    };

    return (
        <div className="book-card">
            <img src={imageUrl} alt={title} className="book-image-card" />
            <div className="icons-container">
                <FontAwesomeIcon
                    icon={faHeart}
                    className={`icon-book favorite-icon ${isFavorite ? "favorite-active" : ""}`}
                    title="Agregar a Favoritos"
                    onClick={handleFavoriteClick}
                />
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="icon-book info-icon"
                    title="Más Información"
                    onClick={handleInfoClick}
                />
            </div>
            <div className="book-title">{title}</div>
        </div>
    );
};

export default BookCard;
