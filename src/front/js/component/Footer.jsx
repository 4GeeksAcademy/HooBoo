import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube, faSpotify, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import AcercaDeNosotros from './AcercaDeNosotros.jsx';
import "../../styles/Footer.css";

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showTeamPage, setShowTeamPage] = useState(false);

  const rating = 4.5;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const totalStars = 5;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    if (halfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
    }
    while (stars.length < totalStars) {
      stars.push(<FontAwesomeIcon key={stars.length} icon={faStar} />);
    }
    return stars;
  };

  return (
    <>
      {/* <AcercaDeNosotros isActive={showTeamPage} /> */}

      <footer className="footer">
        <div className="footer-content">
          <div className="section social-icons">
            <a href="https://x.com/HookedonBookish" target="_blank" rel="noopener noreferrer" className="icon twitter-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/hookedonbookish/" target="_blank" rel="noopener noreferrer" className="icon instagram-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566675358683" target="_blank" rel="noopener noreferrer" className="icon facebook-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.tiktok.com/@hooked_on_bookish" target="_blank" rel="noopener noreferrer" className="icon tiktok-icon">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://open.spotify.com/user/31hbexieokicgypcsfkwcno3im34" target="_blank" rel="noopener noreferrer" className="icon spotify-icon">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a href="https://es.pinterest.com/HookedonBookish/" target="_blank" rel="noopener noreferrer" className="icon pinterest-icon">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="https://www.youtube.com/@HookedonBookish" target="_blank" rel="noopener noreferrer" className="icon youtube-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <div className="section">
            <h4 onClick={() => setShowTeamPage(!showTeamPage)}>
              Acerca de Nosotros
            </h4>
          </div>

          <div className="section">
            <h4 onClick={() => setShowEmail(!showEmail)}>
              Contacto
            </h4>
            {showEmail && <p>hooboocontacto@gmail.com</p>}
          </div>

          <div className="section">
            <h4>Servicios</h4>
          </div>

          <div className="section rating">
            <div className="stars">
              {renderStars()}
            </div>
            <div className="rating-text">
              <p>{rating} Excelente</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;