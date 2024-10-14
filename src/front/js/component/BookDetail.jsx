import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../../styles/BookDetail.css';

const BookDetail = ({ bookId }) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    const getBookById = (id) => {
        let book = store.books.find(b => b.id === id);
        if (!book) {
            const flattenedBooks = flattenBaseRespaldo(store.base_respaldo);
            book = flattenedBooks.find(b => b.id === id);
        }
        return book;
    };

    const flattenBaseRespaldo = (baseRespaldo) => {
        return Object.values(baseRespaldo).flat();
    };

    const book = getBookById(bookId);  

    useEffect(() => {
        if (book && store.favorites.some((fav) => fav.id === book.id)) {
            setIsFavorite(true);
        }
    
        // Reinsertar el script de comentarios cada vez que el componente se monte
        const script = document.createElement('script');
        script.src = "https://cdn.commento.io/js/commento.js";
        script.async = true;
    
        // Aquí especificamos un identificador único para cada libro
        const commentoDiv = document.getElementById("commento");
    
        // Solo inserta el script si el contenedor existe
        if (commentoDiv) {
            commentoDiv.innerHTML = "";  // Limpia cualquier contenido anterior
            script.setAttribute('data-page-id', `book-${bookId}`); // Identificador único para cada libro
            commentoDiv.appendChild(script);
        }
    
        // Fase de limpieza (cleanup): elimina el script si aún existe en el DOM
        return () => {
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [book, store.favorites, bookId]);
    

    if (!book) {
        return <div>Libro no encontrado. ID buscado: {bookId}</div>;
    }

    const handleAddToFavorites = () => {
        if (isFavorite) {
            actions.removeFavoritos(book);
        } else {
            actions.addFavoritos(book);
        }
        setIsFavorite(!isFavorite);
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
        <div>

        <Container fluid className="d-flex flex-column">
            <div className="content flex-grow-1 d-flex justify-content-center align-items-center flex-column">
                <Card className="tarjetaDeLibroMar mb-4">
                    <Card.Img variant="top" src={book.volumeInfo.imageLinks?.thumbnail} className="imagenTarjetaLibroMar" alt={book.volumeInfo.title} />
                    <Card.Body className="cuerpoDetalleTarjetaLibroMar">
                        <div className="contenedorBotonesMar">
                            <div className="iconosContenedorMar" onClick={handleAddToFavorites}>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className={`favoritoIconoMar ${isFavorite ? "favorite-active" : ''}`}
                                    title="Agregar a Favoritos"
                                />
                            </div>
                            <div className="iconosContenedorMar" onClick={handleShare}>
                                <FontAwesomeIcon icon={faArrowUpFromBracket} className="shareIconMar" />
                            </div>
                        </div>
                        <h5 className="detalleLibroTituloMar">{book.volumeInfo.title}</h5>
                        <p className="detalleLibroDescripcionMar">{book.volumeInfo.description}</p>
                        <p className="detalleLibroAutorMar">Autor: {book.volumeInfo.authors?.join(', ')}</p>
                    </Card.Body>
                </Card>
                <Card className="tarjetaDeLibroMar comment-card">
                    <Card.Body className="cuerpoDetalleTarjetaLibroMar">
                        <h5 className="detalleLibroTituloMar">Comentarios</h5>
                        <div id="commento"></div>  {/* Div para el script de comentarios */}
                    </Card.Body>
                </Card>
            </div>
        </Container>
        </div>
    );
};

export default BookDetail;
