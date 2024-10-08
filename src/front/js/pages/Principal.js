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
    const { store, actions } = useContext(Context); 

    const API_KEY = 'AIzaSyDWeHrvToJGuNVbZjPWHcP6C_QDdGNBlbg';
    const genres = ['fantasia', 'romance', 'drama', 'thriller'];
    const GENRE_SUBJECTS = {
        fantasia: 'fantasy',
        romance: 'romance',
        drama: 'drama',
        thriller: 'thriller'
    };

    const mezclarLibrosPorCategoria = (mezcla) => {
        for (let i = mezcla.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mezcla[i], mezcla[j]] = [mezcla[j], mezcla[i]];
        }
        return mezcla;
    };

    const flattenBaseRespaldo = (baseRespaldo) => {
        return Object.values(baseRespaldo).flat();
    };

    const booksToDisplay = store.books && store.books.length > 0 ? store.books : flattenBaseRespaldo(store.base_respaldo);

    useEffect(() => {
        const getBooksFromApi = async () => {
            try {
                const gotBooksFromApi = {};
                for (const genre of genres) {
                    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${GENRE_SUBJECTS[genre]}&maxResults=40&key=${API_KEY}`, {
                        headers: {
                            'Authorization': '55948_25703fc2113e4aece39188c265f17591'
                        }
                    });

                    const data = await response.json();
                    gotBooksFromApi[genre] = booksToDisplay
                        .filter(item => item.volumeInfo.imageLinks?.thumbnail)
                        .map(item => ({
                            id: item.id,
                            src: item.volumeInfo.imageLinks.thumbnail,
                            alt: item.volumeInfo.title
                        }));

                    gotBooksFromApi[genre] = mezclarLibrosPorCategoria(gotBooksFromApi[genre]);
                }
                setBooks(gotBooksFromApi);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        getBooksFromApi();
    }, []);

    useEffect(() => {
        const genreInterval = setInterval(() => {
            setIsVisible(false); // Inicia la animación de salida
            setTimeout(() => {
                setCurrentGenre((prevGenre) => {
                    const currentIndex = genres.indexOf(prevGenre);
                    const nextIndex = (currentIndex + 1) % genres.length;
                    return genres[nextIndex];
                });
                setIsVisible(true);
            }, 500);
        }, 5500);

        return () => clearInterval(genreInterval);
    }, []);

    const handleGenreChange = (genre) => {
        setIsVisible(false);
        setTimeout(() => {
            setCurrentGenre(genre);
            setBooks(prevBooks => ({
                ...prevBooks,
                [genre]: mezclarLibrosPorCategoria([...prevBooks[genre]]) // Mezcla los libros del género actual
            }));
            setIsVisible(true);
        }, 500);
    };

    return (
        <div className='bodyHome'>
            <BannerOnlyHome />
            <Navbar />
            <div className="main-content">
                <div className="principal-container">
                    <div className="header-text">
                        <h1 className='titulo_principalproyecto'>
                            Encuentra tu próxima lectura de
                            <div>{' '}</div>
                            <span className="dynamic-genre">
                                {currentGenre === 'fantasia' && 'FANTASÍA'}
                                {currentGenre === 'romance' && 'ROMANCE'}
                                {currentGenre === 'drama' && 'DRAMA'}
                                {currentGenre === 'thriller' && 'THRILLER'}
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
                        {books[currentGenre] && books[currentGenre].length > 0 ? (
                            books[currentGenre].slice(0, 7).map((book) => (
                                <img
                                    key={book.id}
                                    src={book.src}
                                    alt={book.alt}
                                    className="book-image"
                                />
                            ))
                        ) : (
                            <p>No hay libros disponibles para este género.</p>
                        )}
                    </div>
                </div>
            </div>
            < Footer />
        </div>
    );
};

export default Principal;