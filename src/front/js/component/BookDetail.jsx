import React, { useContext } from "react"
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import "../../styles/BookDetail.css";

const BookDetail = () => {
    const { store } = useContext(Context);
    const { bookId } = useParams();
    console.log("ID del libro desde la URL:", bookId); // Verificar el ID
    console.log("Libros en el store:", store.books); // Verificar los libros en el store

    const book = store.books.find(b => b.id === bookId);

    if (!book) {
        return <div>Libro no encontrado. ID buscado: {bookId}</div>;
    }

    const handleAddToFavorites = () => {
        // Add functionality to add to favorites
        console.log(`Added ${book.title} to favorites`);
    }

    return (
<Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="book-detail-card">
                <Card.Img variant="top" src={book.image} className="book-detail-image" alt={book.title} />
                <Card.Body className="card-body">
                    <Card.Title className="book-detail-title">{book.title}</Card.Title>
                    <Card.Text className="book-detail-description">
                        {book.description || "Descripción no disponible."}
                    </Card.Text>
                    <Card.Text className="book-detail-author">
                        <strong>Autor:</strong> {book.author}
                    </Card.Text>
                    <div className="button-container">
                        <div className="icons-container" onClick={handleAddToFavorites}>
                            <FontAwesomeIcon icon={faHeart} className="icon-book favorite-icon" title="Agregar a Favoritos" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );;
};

export default BookDetail;