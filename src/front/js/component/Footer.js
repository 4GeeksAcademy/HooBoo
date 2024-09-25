import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Parte superior del footer */}
      <div style={styles.topSection}>
        {/* Iconos de redes sociales */}
        <div style={styles.socialIcons}>
          <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
          <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
        </div>

        {/* Estrellas de valoración */}
        <div style={styles.stars}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} style={styles.star} />
            ))}
        </div>
      </div>

      {/* Parte inferior del footer */}
      <div style={styles.bottomSection}>
        {/* Contenedor de Acerca de Nosotros */}
        <div style={styles.container}>
          <h4>Acerca de Nosotros</h4>
        </div>

        {/* Contenedor de Contacto */}
        <div style={styles.container}>
          <h4>Contacto</h4>
        </div>

        {/* Contenedor de Servicios */}
        <div style={styles.container}>
          <h4>Servicios</h4>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1000px',
    paddingBottom: '20px',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
    color: '#fff',
  },
  stars: {
    display: 'flex',
    gap: '5px',
  },
  star: {
    fontSize: '24px',
    color: '#f0c419',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1000px',
    borderTop: '1px solid #444',
    paddingTop: '20px',
  },
  container: {
    flex: 1,
    margin: '0 50px',
    textAlign: 'left',
  },
};

export default Footer;
