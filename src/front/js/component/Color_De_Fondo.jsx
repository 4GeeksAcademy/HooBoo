// Color_De_Fondo.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../../styles/colordefondo.css";

const ColorFondo = ({ children }) => {
    const [isDark, setIsDark] = useState(false); // Cambia de booleano

    const toggleBackgroundColor = () => {
        setIsDark(prev => !prev);
    };

    return (
        <div className={`colorFondo ${isDark ? 'active' : ''}`}> {/* Añadimos la clase activa */}
            <div className="colorSelector">
                <button onClick={toggleBackgroundColor} className="colorButton">
                    <FontAwesomeIcon icon={isDark ? faSun : faMoon} size="2x" className={isDark ? 'iconWhite' : 'iconBlack'} />
                </button>
            </div>
            {children}
        </div>
    );
}

export default ColorFondo;
