import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import "../../styles/EstrellasValoracion.css";

const EstrellasValoracion = ({ rating, onRate }) => {
    const [hoveredRating, setHoveredRating] = useState(null);
    const [selectedRating, setSelectedRating] = useState(rating);
    const { store } = useContext(Context);

    const showLoginAlert = () => {
        Swal.fire({
            title: "¡Hola Booklover!",
            text: "Si deseas valorar la página, te invitamos a que te registres o inicies sesión",
            icon: "warning",
            iconColor: "#7029ab",
            confirmButtonText: "Iniciar sesión",
            cancelButtonText: "Cancelar",
            showCancelButton: true,
            confirmButtonColor: "#7029ab",
            cancelButtonColor: "#7029ab",
            background: 'whitesmoke',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/login";
            }
        });
    };

    const handleRating = (rate) => {
        if (!store.token) {
            showLoginAlert();
            return;
        }
        setSelectedRating(rate);
        onRate(rate);
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
        <div>
            <div>
                <p className="rating-text">{getRatingText()}</p>
            </div>
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
        </div>
    );
};

EstrellasValoracion.propTypes = {
    rating: PropTypes.number.isRequired,
    onRate: PropTypes.func.isRequired,
};

export default EstrellasValoracion;
