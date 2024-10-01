import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Card, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Navbaractivo from "./Navbaractivo.jsx";
import '../../styles/BookDetail.css';

const BookDetail = () => {
    const { store, actions } = useContext(Context);
    const { bookId } = useParams();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]); // Almacenar comentarios
    const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/50'); // URL de la foto del perfil

    console.log('ID del libro desde la URL:', bookId);
    console.log('Libros en el store:', store.books);

    const book = store.books.find((b) => b.id === parseInt(bookId, 10));

    if (!book) {
        return <div>Libro no encontrado. ID buscado: {bookId}</div>;
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario
        if (comment.trim()) { // Solo agregar si el comentario no está vacío
            const newComment = {
                text: comment,
                userProfilePic: profilePicture,
            };
            setComments([...comments, newComment]); // Agregar el nuevo comentario a la lista
            setComment(''); // Limpiar el campo de entrada
        }
    };

    const handleAddToFavorites = () => {
        actions.añadirFavorito('Mis Favoritos', book.title); // Usa la acción para añadir a favoritos
        console.log(`Added ${book.title} to favorites`);
    };

    const handleShare = () => {
        const url = window.location.href; // Obtiene la URL actual
        navigator.clipboard.writeText(url) // Copia la URL al portapapeles
            .then(() => alert('Enlace copiado: ' + url)) // Alerta al usuario que se copió
            .catch(err => console.error('Error al copiar: ', err)); // Manejo de errores
    };

    return (
        <Container fluid className="d-flex flex-column">
            <div className="navbar">
                <Navbaractivo />
            </div>
            <div className="content flex-grow-1 d-flex justify-content-center align-items-center">
                <Card className="tarjetaDeLibroMar">
                    <Card.Img variant="top" src={book.image} className="imagenTarjetaLibroMar" alt={book.title} />
                    <Card.Body className="cuerpoDetalleTarjetaLibroMar">
                        <div className="contenedorBotonesMar">
                            <div className="iconosContenedorMar" onClick={handleAddToFavorites}>
                                <FontAwesomeIcon icon={faHeart} className="icon-book favorite-icon" title="Agregar a Favoritos" />
                            </div>
                            <div className="iconosContenedorMar" onClick={handleShare}>
                                <FontAwesomeIcon icon={faArrowUpFromBracket} className="shareIconMar" title="Compartir" />
                            </div>
                        </div>
                        <Card.Title className="detalleLibroTituloMar">{book.title}</Card.Title>
                        <Card.Text className="detalleLibroDescriptionMar">
                            {book.description || 'Descripción no disponible.'}
                        </Card.Text>
                        <Card.Text className="detalleLibroAutorMar">
                            <strong>Autor:</strong> {book.author}
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