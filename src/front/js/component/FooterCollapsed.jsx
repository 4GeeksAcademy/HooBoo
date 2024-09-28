// FooterCollapsed.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "../../styles/FooterCollapsed.css";

const FooterCollapsed = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer-collapsed-container">
      <button 
        className="footer-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      {isOpen && (
        <div className="footer-expanded">
          <h4>Acerca de Nosotros</h4>
          <h4>Contacto</h4>
          <h4>Servicios</h4>
        </div>
      )}
    </div>
  );
};

export default FooterCollapsed;
