import React, { useState } from 'react';
import '../../styles/Principal.css';
import Navbaractivo from '../component/Navbaractivo.jsx';


const genres = {
    fantasia: [
        { id: 1, src: 'https://www.unebook.es/blog/wp-content/uploads/2020/05/Juego_de_Tronos-657x1024.jpg', alt: 'Fantasy Book 1' },
        { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnAfPHMlcxUBPz31Vev5L_P6Vtm0Y_jU5Bg&s', alt: 'Fantasy Book 2' },
        { id: 3, src: 'https://www.centrallibrera.com/imagenes/9788419/978841925296.GIF', alt: 'Fantasy Book 3' },
        { id: 4, src: 'https://www.hola.com/horizon/original_aspect_ratio/e3d17acc42ec-los-dioses-del-norte-la-leyenda-del-bosque-de-jara-santamar-a-montena-.jpg', alt: 'Fantasy Book 4' },
        { id: 5, src: 'https://libroveolibroleo.com/wp-content/uploads/2020/04/La-viajera-del-tiempo.jpg', alt: 'Fantasy Book 5' },
    ],
    romance: [
        { id: 1, src: 'https://i.pinimg.com/originals/e8/ac/34/e8ac34630ecc6a080f79dfb607f827b8.png', alt: 'Romance Book 1' },
        { id: 2, src: 'https://img.remediosdigitales.com/89ed5a/a/450_1000.png', alt: 'Romance Book 2' },
        { id: 3, src: 'https://m.media-amazon.com/images/I/61Z2Zyp2TSL._AC_UF1000,1000_QL80_.jpg', alt: 'Romance Book 3' },
        { id: 4, src: 'https://img.wattpad.com/cover/5009239-256-k506520.jpg', alt: 'Romance Book 4' },
        { id: 5, src: 'https://images.cdn1.buscalibre.com/fit-in/360x360/1c/a3/1ca38b639ea1f3f6b49cdcb4bdf5c96d.jpg', alt: 'Romance Book 5' },
    ],
    drama: [
        { id: 1, src: 'https://www.planetadelibros.com/usuaris/libros/fotos/401/original/portada_con-la-luz-encendida_monica-de-cristobal_202407181015.jpg', alt: 'Drama Book 1' },
        { id: 2, src: 'https://www.planetadelibros.com/usuaris/libros/thumbs/1f9fb230-25be-4ef2-be0e-446fd74a8405/m_175_310/portada_todo-cambio-ese-verano_elena-pena-bilbao_202402290811.webp', alt: 'Drama Book 2' },
        { id: 3, src: 'https://st.booknet.com/uploads/covers/220/1677904704_94.jpg', alt: 'Drama Book 3' },
        { id: 4, src: 'https://www.nosolocine.net/wp-content/uploads/2014/01/La-Ladrona-de-Libros-20131.jpg', alt: 'Drama Book 4' },
        { id: 5, src: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2022/11/Yo-tu-y-un-quizas-666x1024.jpg', alt: 'Drama Book 5' },
    ],
    thriller: [
        { id: 1, src: 'https://vanidad.es/images/carpeta_gestor/archivos/2023/07/03/Vanidad_Articulo_libros_thriller_Foto_1.jpeg', alt: 'Thriller Book 1' },
        { id: 2, src: 'https://static.cegal.es/imagenes/marcadas/9788419/978841962004.gif', alt: 'Thriller Book 2' },
        { id: 3, src: 'https://www.clarin.com/2021/12/31/t3Ve6O-t0_1200x0__1.jpg', alt: 'Thriller Book 3' },
        { id: 4, src: 'https://www.estudioenescarlata.com/media/img/portadas/_visd_0001JPG01RNO.jpg', alt: 'Thriller Book 4' },
        { id: 5, src: 'https://www.emmaglondys.com/wp-content/uploads/2023/07/51bLxVui8hL.jpg', alt: 'Thriller Book 5' },
    ],
};

const Principal = () => {
    const [currentGenre, setCurrentGenre] = useState('fantasia');

    const handleGenreChange = (genre) => {
        setCurrentGenre(genre);
    };

    return (
        <>
            < Navbaractivo />
            <div className="principal-container">
                <div className="header-text">
                    <h1>
                        Encuentra tu próxima lectura de {' '}
                        <span className="dynamic-genre">
                            {currentGenre === 'fantasia' && 'FANTASÍA'}
                            {currentGenre === 'romance' && 'ROMANCE'}
                            {currentGenre === 'drama' && 'DRAMA'}
                            {currentGenre === 'thriller' && 'THRILLER'}
                        </span>
                    </h1>
                </div>
                <div className="genre-indicators">
                    <span
                        className={`indicator ${currentGenre === 'fantasia' ? 'active' : ''}`}
                        onClick={() => handleGenreChange('fantasia')}
                    ></span>
                    <span
                        className={`indicator ${currentGenre === 'romance' ? 'active' : ''}`}
                        onClick={() => handleGenreChange('romance')}
                    ></span>
                    <span
                        className={`indicator ${currentGenre === 'drama' ? 'active' : ''}`}
                        onClick={() => handleGenreChange('drama')}
                    ></span>
                    <span
                        className={`indicator ${currentGenre === 'thriller' ? 'active' : ''}`}
                        onClick={() => handleGenreChange('thriller')}
                    ></span>
                </div>
                <div className="image-grid">
                    {genres[currentGenre].map((book) => (
                        <img
                            key={book.id}
                            src={book.src}
                            alt={book.alt}
                            className="book-image"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Principal;