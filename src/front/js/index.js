import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import "../styles/index.css";
import Layout from "./layout";


Modal.setAppElement('#app');

ReactDOM.render(<Layout />, document.querySelector("#app"));
