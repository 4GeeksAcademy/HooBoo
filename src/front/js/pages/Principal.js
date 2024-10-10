import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';
import BannerOnlyHome from '../component/BannerOnlyHome.jsx';
import '../../styles/Principal.css';
import { Context } from "../store/appContext";

const Principal = () => {
    const [currentGenre, setCurrentGenre] = useState('fantasia');
    const [isVisible, setIsVisible] = useState(true);
    const [books, setBooks] = useState({ fantasia: [], romance: [], drama: [], thriller: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { store } = useContext(Context);
    
    const API_KEY = 'AIzaSyDWeHrvToJGuNVbZjPWHcP6C_QDdGNBlbg'; 
    const genres = ['fantasia', 'romance', 'drama', 'thriller'];
    const GENRE_SUBJECTS = {
        fantasia: 'fantasy',
        romance: 'romance',
        drama: 'drama',
        thriller: 'thriller'
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const getBooksFromApi = async () => {
            setLoading(true);
            setError(null);
            const gotBooksFromApi = {};
            try {
                for (const genre of genres) {
                    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${GENRE_SUBJECTS[genre]}&maxResults=40&key=${API_KEY}`);
                    
                    if (!response.ok) {
                        if (response.status === 429) {
                            console.error(`Error 429: Usando base de datos de respaldo para ${genre}.`);
                            gotBooksFromApi[genre] = store.base_respaldo[genre] || []; // Uso de base_respaldo
                        } else {
                            throw new Error(`Error en la solicitud para ${genre}: ${response.status}`);
                        }
                    } else {
                        const booksData = await response.json();
                        gotBooksFromApi[genre] = shuffleArray(booksData.items || []);
                    }
                }
                setBooks(gotBooksFromApi);
            } catch (error) {
                console.error('Error al obtener libros:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getBooksFromApi();
    }, [API_KEY, store.base_respaldo]); 

    useEffect(() => {
        const genreInterval = setInterval(() => {
            setIsVisible(false); // Animación de salida
            setTimeout(() => {
                setCurrentGenre((prevGenre) => {
                    const currentIndex = genres.indexOf(prevGenre);
                    const nextIndex = (currentIndex + 1) % genres.length;
                    return genres[nextIndex];
                });
                setIsVisible(true); // Animación de entrada
            }, 300); // Duración de la animación
        }, 5500); // Intervalo para cambiar de género

        return () => clearInterval(genreInterval);
    }, []);

    const handleGenreChange = (genre) => {
        setIsVisible(false);
        setTimeout(() => {
            setCurrentGenre(genre);
            setIsVisible(true);
        }, 500);
    };

    return (
        <div className='bodyHome'>
            <div className='headerHome'>
                <Navbar />
                <BannerOnlyHome />
            </div>
            <div className="main-content">
                <div className="principal-container">
                    <div className="header-text">
                        <h1 className='titulo_principalproyecto'>
                            Encuentra tu próxima lectura de
                            <div>{' '}</div>
                            <span className="dynamic-genre">
                                {currentGenre.toUpperCase()}
                            </span>
                        </h1>
                    </div>
                    <div className="genre-indicators">
                        {genres.map((genre) => (
                            <span
                                key={genre}
                                className={`indicator ${currentGenre === genre ? 'active' : ''}`}
                                onClick={() => handleGenreChange(genre)}
                            ></span>
                        ))}
                    </div>
                    <div className={`image-grid ${isVisible ? 'fade-in' : 'fade-out'}`}>
                        {loading ? (
                            <p>Cargando libros...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            books[currentGenre] && books[currentGenre].length > 0 ? (
                                books[currentGenre].slice(0, 7).map((book) => (
                                    <img
                                        key={book.id}
                                        src={book.volumeInfo.imageLinks?.thumbnail}
                                        alt={book.volumeInfo.title}
                                        className="book-image"
                                    />
                                ))
                            ) : (
                                <p>Agradecemos tu tiempo de espera.</p>
                            )
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Principal;