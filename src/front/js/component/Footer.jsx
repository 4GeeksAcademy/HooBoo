import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import EstrellasValoracion from './EstrellasValoracion.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube, faSpotify, faTiktok, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import AcercaDeNosotros from './AcercaDeNosotros.jsx';
import "../../styles/Footer.css";

const Footer = () => {
  const [showTeamPage, setShowTeamPage] = useState(false);
  const { store, actions } = useContext(Context);
  const rating = 4.5;

  const handleRating = (rate) => {
    actions.submitRating(rate);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
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
            <h4 onClick={() => setShowTeamPage(!showTeamPage)}>
              Acerca de Nosotros
            </h4>
            <div className="quitar-espacios-footer">
              <p>
                ~ Conoce a Nuestro Equipo.
              </p>
              <p>
                ~ A que Nos Dedicamos.
              </p>
            </div>
            {showTeamPage && <AcercaDeNosotros isActive={showTeamPage} />}
          </div>

          <div className="section">
            <h4 >
              Contacto
            </h4>
            <div className="quitar-espacios-footer">
              <p>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', color: 'white' }} /> {/* Icono de Mensaje */}
                hooboocontacto@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', color: 'white' }} /> {/* Icono de Mensaje */}
                hooboo4geeks@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '8px', color: 'green' }} /> {/* Icono de WhatsApp */}
                +34 641 99 2406
              </p>
            </div>
          </div>

          <div className="section">
            <h4>Servicios</h4>
            <div className="quitar-espacios-footer">
              <p>
                ~ Recomendación De Libros.
              </p>
              <p>
                ~ Soporte:
              </p>
              <p>
                de Lunes a Viernes de 10:00 AM a 7:00 PM.
              </p>
            </div>
            {/* Aquí puedes añadir más detalles sobre los servicios */}
          </div>

          <div className="section rating">
            <EstrellasValoracion
              rating={rating}
              onRate={handleRating}
              isAuthenticated={!!store.token}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
