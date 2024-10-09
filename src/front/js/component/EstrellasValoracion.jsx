import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "../../styles/EstrellasValoracion.css";

const EstrellasValoracion = ({ rating, onRate, isAuthenticated }) => {
  const [hoveredRating, setHoveredRating] = useState(null);
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleRating = (rate) => {
    if (isAuthenticated) {
      setSelectedRating(rate);
      onRate(rate);
    } else {
      alert("Debes resgistarte o iniciar sesión para poder calificar.");
    }
  };

  const getRatingText = () => {
    if (selectedRating === 5) return "Excelente";
    if (selectedRating === 4) return "Muy buena";
    if (selectedRating === 3) return "Buena";
    if (selectedRating === 2) return "Regular";
    if (selectedRating === 1) return "Mala";
    return "";
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          className={`star-icon ${star <= (hoveredRating || selectedRating) ? "filled" : ""}`}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(null)}
          onClick={() => handleRating(star)}
        />
      ))}
      <p className="rating-text">{getRatingText()}</p>
    </div>
  );
};

EstrellasValoracion.propTypes = {
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default EstrellasValoracion;
