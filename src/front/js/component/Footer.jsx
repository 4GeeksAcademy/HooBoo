import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faInstagram, faFacebook, faTiktok, faTelegram, faYoutube, faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección de Iconos Sociales */}
        <div className="section social-icons">
          {/* Icono de Twitter */}
          <div className="icon twitter-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          {/* Icono de Instagram */}
          <div className="icon instagram-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          {/* Icono de Facebook */}
          <div className="icon facebook-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          {/* Icono de TikTok */}
          <div className="icon tiktok-icon">
            <FontAwesomeIcon icon={faTiktok} />
          </div>
          {/* Icono de Telegram */}
          <div className="icon telegram-icon">
            <FontAwesomeIcon icon={faTelegram} />
          </div>
          {/* Icono de WhatsApp */}
          <div className="icon whatsapp-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          {/* Icono de YouTube */}
          <div className="icon youtube-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>

        {/* Sección de Información */}
        <div className="section">
          <h4>Acerca de Nosotros</h4>
          <ul>
            <li>Información</li>
            <li>Ubicación</li>
            <li>Años de Experiencia</li>
            <li>Nuestros Objetivos</li>
            <li>Qué Queremos</li>
          </ul>
        </div>

        {/* Sección de Contacto */}
        <div className="section">
          <h4>Contacto</h4>
          <ul>
            <li>WhatsApp: 641 25 18</li>
            <li>WhatsApp: 642 78 16</li>
            <li>Fijo: 888 88 888</li>
            <li>Local: 320 458 15 922</li>
          </ul>
        </div>

        {/* Sección de Servicios */}
        <div className="section">
          <h4>Servicios</h4>
          <ul>
            <li>Libros</li>
            <li>Experiencia</li>
            <li>Información</li>
            <li>Comunidad</li>
          </ul>
        </div>

        {/* Sección de Rating */}
        <div className="section rating">
          <div className="stars">
            {Array(5).fill(0).map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="star" />
            ))}
          </div>
          <div className="rating-text">
            <p>4.5</p>
            <p>Excelente</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
