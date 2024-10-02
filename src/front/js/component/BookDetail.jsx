import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Card, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Navbaractivo from "./Navbaractivo.jsx";
import '../../styles/BookDetail.css';

const BookDetail = () => {
    const [profilePicture] = useState('https://via.placeholder.com/50');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const { store, actions } = useContext(Context);
    const { bookId } = useParams();
    const [isFavorite, setIsFavorite] = useState(false);  //verificar
    const book = store.books.find(b => b.id === bookId);

    useEffect(() => {
        // Verificar si el libro ya está en favoritos
        if (book && store.favorites.some((fav) => fav.id === book.id)) {
            setIsFavorite(!isFavorite);
        }
    }, [book, store.favorites]);

    if (!book) {
        return <div>Libro no encontrado. ID buscado: {bookId}</div>;
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            const newComment = {
                text: comment,
                userProfilePic: profilePicture,
            };
            setComments([...comments, newComment]);
            setComment('');
        }
    };

    const handleAddToFavorites = () => {
        if (!isFavorite) {
            actions.addFavoritos(book); // Agregar libro a favoritos
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
                        <div className="comment-container">
                            <div className="comment-input">
                                <img src="ruta/a/tu/icono.png" alt="Icono" className="comment-icon" />
                                <textarea
                                    value={comment}
                                    onChange={handleCommentChange}
                                    placeholder="Escribe tu comentario aquí...">
                                </textarea>
                            </div>
                            <div className="button-container">
                                <button className="send-button" onClick={handleCommentSubmit}>Publicar</button>
                            </div>
                            <div className="comments-list">
                                {comments.map((comment, index) => (
                                    <div className="comment" key={index}>
                                        <img src={profilePicture} alt="Perfil" className="profile-picture" />
                                        <div className="comment-text">
                                            <span>{comment.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};
export default BookDetail;