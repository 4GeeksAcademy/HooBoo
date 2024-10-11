import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"; // Cambiado a faPlus y faMinus
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
                    <FontAwesomeIcon icon={isFooterVisible ? faMinus : faPlus} size="2x" className={isFooterVisible ? '' : 'icon-moradito'} />
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
