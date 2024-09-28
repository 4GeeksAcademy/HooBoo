import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Footer.jsx"; // Importa el componente Footer
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
            {/* Icono de signo de pregunta en la parte inferior derecha */}
            <div className="footer-colapsado">
                <div className="question-icon" onClick={toggleFooter}>
                    <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
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