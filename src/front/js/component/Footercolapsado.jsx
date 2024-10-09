import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer.jsx";
import "../../styles/Footercolapsado.css";

const Footercolapsado = () => {
    // Estado para manejar la visibilidad del footer
    const [isFooterVisible, setFooterVisible] = useState(false);
    // Función para alternar la visibilidad del footer
    const toggleFooter = () => {
        setFooterVisible(!isFooterVisible);
    };
    
    return (
        <div>
            <div className="footer-colapsado">
                <div className="toggle-icon" onClick={toggleFooter}>
                    <FontAwesomeIcon icon={isFooterVisible ? faChevronDown : faChevronUp} size="2x" className={isFooterVisible ? 'icon-white' : 'icon-moradito'} />
                </div>
            </div>
            {/* Footer que se despliega al hacer clic */}
            <div className={`footer-container ${isFooterVisible ? 'visible' : ''}`}>
                <Footer /> {/* Renderiza el componente Footer */}
            </div>
        </div>
    );
};
export default Footercolapsado;