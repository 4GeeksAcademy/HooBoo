import React, { useState } from "react";
import "../../styles/ChatCollapsed.css"; // Asegúrate de que el archivo esté en el lugar correcto

const ChatCollapsed = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-container">
            <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
                <div className="chat-header">
                    <h4>Chat con IA</h4>
                    <button onClick={toggleChat} style={{ color: '#fff', background: 'transparent', border: 'none' }}>X</button>
                </div>
                <div className="chat-body">
                    <p>¡Hola! ¿En qué puedo ayudarte hoy?</p>
                    {/* Aquí puedes agregar más funcionalidad del chat */}
                </div>
            </div>
            <button className="chat-toggle-button" onClick={toggleChat}>
                {isOpen ? "Cerrar Chat" : "Chat"}
            </button>
        </div>
    );
};

export default ChatCollapsed;
