import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext"; // Importamos el contexto global
import "../../styles/BookCard.css";

const BookCard = ({ book }) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(
        store.favorites.some((fav) => fav.title === book.title)
    );

    const handleFavoriteClick = () => {
        if (isFavorite) {
            actions.removeFavoritos(book); // Si ya es favorito, lo removemos
        } else {
            actions.addFavoritos(book); // Si no es favorito, lo añadimos
        }
        setIsFavorite(!isFavorite); // Cambiamos el estado del ícono
    };

    const imageUrl = book.image || "https://via.placeholder.com/150";
    const title = book.title || "Título no disponible";

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
                />
            </div>
            <div className="book-title">{title}</div>
        </div>
    );
};

export default BookCard;
