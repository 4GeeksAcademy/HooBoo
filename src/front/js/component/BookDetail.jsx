import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Navbaractivo from "./Navbaractivo.jsx";
import '../../styles/BookDetail.css';

const BookDetail = () => {
    const [profilePicture] = useState('https://via.placeholder.com/50');
    const { store, actions } = useContext(Context);
    const { bookId } = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    const book = store.books.find(b => b.id === bookId);

    useEffect(() => {
        if (book && store.favorites.some((fav) => fav.id === book.id)) {
            setIsFavorite(true);
        }

        // Integración de Commento
        const script = document.createElement('script');
        script.src = "https://cdn.commento.io/js/commento.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [book, store.favorites]);

    if (!book) {
        return <div>Libro no encontrado. ID buscado: {bookId}</div>;
    }

    const handleAddToFavorites = () => {
        if (!isFavorite) {
            actions.addFavoritos(book);
            setIsFavorite(true);
        } else {
            console.log("El libro ya está en favoritos");
        }
    };

    const handleShare = () => {
        const url = window.location.href;
        const message = `Echa un vistazo a este libro: ${book.volumeInfo.title}\n${url}`;
        if (navigator.share) {
            navigator.share({
                title: book.volumeInfo.title,
                text: message,
                url: url
            }).catch((err) => console.error('Error al compartir', err));
        } else {
            navigator.clipboard.writeText(url)
                .then(() => alert('Enlace copiado: ' + url))
                .catch(err => console.error('Error al copiar: ', err));
        }
    };

    return (
        <Container fluid className="d-flex flex-column">
            <div className="navbar">
                <Navbaractivo />
            </div>
            <div className="content flex-grow-1 d-flex justify-content-center align-items-center">
                <Card className="tarjetaDeLibroMar">
                    <Card.Img variant="top" src={book.volumeInfo.imageLinks?.thumbnail} className="imagenTarjetaLibroMar" alt={book.volumeInfo.title} />
                    <Card.Body className="cuerpoDetalleTarjetaLibroMar">
                        <div className="contenedorBotonesMar">
                            <div className="iconosContenedorMar" onClick={handleAddToFavorites}>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className={`favoritoIconoMar ${isFavorite ? 'favorito-activo' : ''}`}
                                    title="Agregar a Favoritos"
                                />
                            </div>
                            <div className="iconosContenedorMar" onClick={handleShare}>
                                <FontAwesomeIcon icon={faArrowUpFromBracket} className="shareIconMar" title="Compartir" />
                            </div>
                        </div>
                        <Card.Title className="detalleLibroTituloMar">{book.volumeInfo.title}</Card.Title>
                        <Card.Text className="detalleLibroDescriptionMar">
                            {book.volumeInfo.description || 'Descripción no disponible.'}
                        </Card.Text>
                        <Card.Text className="detalleLibroAutorMar">
                            <strong>Autor:</strong> {book.volumeInfo.authors}
                        </Card.Text>
                        
                        {/* Contenedor de comentarios */}
                        <div id="commento"></div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default BookDetail;
