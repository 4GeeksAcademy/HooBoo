import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const EstrellasValoracion = ({ rating, onRate, isAuthenticated }) => {
  const [hoveredRating, setHoveredRating] = useState(null);
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleRating = (rate) => {
    if (isAuthenticated) {
      setSelectedRating(rate);
      onRate(rate);
    } else {
      alert("Debes iniciar sesión para poder calificar.");
    }
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
    </div>
  );
};

EstrellasValoracion.propTypes = {
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default EstrellasValoracion;
