import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube, faSpotify, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import TeamPage from './TeamPage';
const Footer = () => {
  const rating = 4.5;
  const [showEmail, setShowEmail] = useState(false);
  const [showTeamPage, setShowTeamPage] = useState(false); // Cambia el estado para mostrar la página del equipo
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={styles.star} />);
    }
    if (halfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} style={styles.star} />);
    }
    while (stars.length < totalStars) {
      stars.push(<FontAwesomeIcon key={stars.length} icon={faStar} style={{ ...styles.star, color: '#444' }} />);
    }
    return stars;
  };
  return (
    <>
      {/* Si se activa el estado showTeamPage, mostramos la página del equipo */}
      {showTeamPage ? <TeamPage /> : null}
      <footer style={styles.footer}>
        <div style={styles.topSection}>
          <div style={styles.socialAndStars} className="socialAndStars">
            <div style={styles.socialIcons}>
              <a href="https://x.com/HookedonBookish" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={{ ...styles.icon, color: '#1DA1F2' }} />
              </a>
              <a href="https://www.instagram.com/hookedonbookish/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ ...styles.icon, color: '#C13584' }} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61566675358683" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ ...styles.icon, color: '#4267B2' }} />
              </a>
              <a href="https://www.youtube.com/@HookedonBookish" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} style={{ ...styles.icon, color: '#FF0000' }} />
              </a>
              <a href="https://open.spotify.com/user/31hbexieokicgypcsfkwcno3im34" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSpotify} style={{ ...styles.icon, color: '#1DB954' }} />
              </a>
              <a href="https://www.tiktok.com/@hooked_on_bookish" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} style={{ ...styles.icon, color: '#000000' }} />
              </a>
              <a href="https://es.pinterest.com/HookedonBookish/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPinterest} style={{ ...styles.icon, color: '#E60023' }} />
              </a>
            </div>
            <div style={styles.stars}>
              {renderStars()}
              <span style={styles.ratingText}>{rating} Excelente</span>
            </div>
          </div>
        </div>
        <div style={styles.contentSection}>
          <div style={styles.container}>
            {/* Al hacer clic, mostramos la página del equipo */}
            <h4 style={styles.clickableTitle} onClick={() => setShowTeamPage(!showTeamPage)}>
              Acerca de Nosotros
            </h4>
          </div>
          <div style={styles.container}>
            <h4 style={styles.clickableTitle} onClick={() => setShowEmail(!showEmail)}>
              Contacto
            </h4>
            {showEmail && <p style={styles.email}>hooboocontacto@gmail.com</p>}
          </div>
          <div style={styles.container}>
            <h4 style={styles.clickableTitle}>Servicios</h4>
          </div>
        </div>
      </footer>
    </>
  );
};