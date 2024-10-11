import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer.jsx";
import "../../styles/Footercolapsado.css";

const Footercolapsado = () => {
    const [isFooterVisible, setFooterVisible] = useState(false);
    const toggleFooter = () => {
        setFooterVisible(!isFooterVisible);
    };
    
    return (
        <div>
            <div className="footer-colapsado">
                <div className="toggle-icon" onClick={toggleFooter}>
                    {/* Usar faEye cuando el footer NO es visible, y faEyeSlash cuando es visible */}
                    <FontAwesomeIcon 
                        icon={isFooterVisible ? faEye : faEyeSlash } 
                        size="2x" 
                        className={isFooterVisible ? 'icon-moradito' : 'icon-moradito'} 
                    />
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
