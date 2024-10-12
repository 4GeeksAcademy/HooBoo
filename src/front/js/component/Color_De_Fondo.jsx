// Color_De_Fondo.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../../styles/colordefondo.css";

const ColorFondo = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleBackgroundColor = () => {
        setIsDark(prev => !prev);
    };

    // Efecto que añade o elimina la clase "dark-mode" al body
    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDark]);

    return (
        <div className={`colorFondo ${isDark ? 'active' : ''}`}>
            <div className="colorSelector">
                <button onClick={toggleBackgroundColor} className={`colorButton ${isDark ? 'darkMode' : ''}`}>
                    <FontAwesomeIcon icon={isDark ? faSun : faMoon} size="2x" className="icon" />
                </button>
            </div>
            {children}
        </div>
    );
}

export default ColorFondo;
