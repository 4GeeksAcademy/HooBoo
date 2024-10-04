import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
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
                <div className="question-icon" onClick={toggleFooter}>
                    <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
                </div>
            </div>

            <div className={`footer-container ${isFooterVisible ? 'visible' : ''}`}>
                <Footer />
            </div>
        </div>
    );
};

export default Footercolapsado;