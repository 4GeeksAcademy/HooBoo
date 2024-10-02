import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal'; // Asegúrate de importar Modal
import "../styles/index.css";
import Layout from "./layout";

// Establece el elemento principal de la aplicación (por ejemplo, #app)
Modal.setAppElement('#app');

ReactDOM.render(<Layout />, document.querySelector("#app"));
