import React, { useState } from "react";
import "../../styles/ChatCollapsed.css";

const ChatCollapsed = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-container">
            <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
                <div className="chat-header">
                    <h5>Chat con IA</h5>
                    
                </div>
                <div className="chat-body">
                    <p>¡Hola! ¿Qué te apetece leer hoy?</p>
                    {/*funcionalidades del chat? */}
                </div>
                <div className="chat-x">
             <button className="chat-fa-regular" onClick={toggleChat}><i class="fa-regular fa-circle-xmark"></i></button>
               </div>
            </div>
            
            <button className="chat-toggle-button" onClick={toggleChat}>
          <i class="fa-regular fa-comment"></i>
            </button>
        </div>
    );
};

export default ChatCollapsed;
