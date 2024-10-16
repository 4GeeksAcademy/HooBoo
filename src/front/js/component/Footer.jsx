import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import EstrellasValoracion from './EstrellasValoracion.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube, faSpotify, faTiktok, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Footer.css";

const Footer = () => {
  const { store, actions } = useContext(Context);

  const ratings = store.ratings || []; 
  const totalVotes = ratings.length;
  const averageRating = totalVotes > 0 ? (ratings.reduce((acc, rating) => acc + rating.rating, 0) / totalVotes).toFixed(1) : 0;

  const handleRating = (rate) => {
    actions.submitRating(rate); 
  };

  return (
    <footer className="footer">
      <div className="section social-icons">
        <a href="https://x.com/HookedonBookish" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="icon twitter-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/hookedonbookish/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon instagram-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61566675358683" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon facebook-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.tiktok.com/@hooked_on_bookish" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="icon tiktok-icon">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="https://open.spotify.com/user/31hbexieokicgypcsfkwcno3im34" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="icon spotify-icon">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a href="https://es.pinterest.com/HookedonBookish/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="icon pinterest-icon">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a href="https://www.youtube.com/@HookedonBookish" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="icon youtube-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <div className="section">
        <Link to="/acerca-de-nosotros" className="link-acerca" style={{ textDecoration: 'none' }}>
          <h4 style={{ cursor: 'pointer' }}>Acerca de Nosotros</h4>
        </Link>
        <div className="quitar-espacios-footer">
          <p>~ Conoce a Nuestro Equipo.</p>
          <p>~ A qué Nos Dedicamos.</p>
        </div>
      </div>

      <div className="section">
        <h4>Contacto</h4>
        <div className="quitar-espacios-footer">
          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', color: 'white' }} />
            hooboocontacto@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', color: 'white' }} />
            hooboo4geeks@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '8px', color: 'green' }} />
            +34 641 99 2406
          </p>
        </div>
      </div>

      <div className="section">
        <h4>Servicios</h4>
        <div className="quitar-espacios-footer">
          <p>~ Recomendación De Libros.</p>
          <p>~ Soporte:</p>
          <p>de Lunes a Viernes de 10:00 AM a 7:00 PM.</p>
        </div>
      </div>

      <div className="section rating">
        <EstrellasValoracion
          rating={averageRating}
          onRate={handleRating}
          isAuthenticated={!!store.token}
        />
        <div className="rating-text">
          <p>Valoración Media: {averageRating} / 5</p>
          <p>{totalVotes} Usuarios han votado</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
