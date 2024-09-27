import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="social-icons">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </div>

        <div className="stars">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="star" />
            ))}
        </div>
      </div>

      <div className="bottom-section">
        <div className="container">
          <h4>Acerca de Nosotros</h4>
        </div>

        <div className="container">
          <h4>Contacto</h4>
        </div>

        <div className="container">
          <h4>Servicios</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
