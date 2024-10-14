import React from "react";
import LibrosMejor from "../../img/LibrosMejor.png";
import '../../styles/BannerStyleOnlyHome.css';
import Navbar from "./Navbar.jsx";

const BannerOnlyHome = () => {
    return (
        <div className="banner-container">
            <div className="banner-overlay"></div>
            <img src={LibrosMejor} alt="BannerOnlyHome" className="banner-image-only-home" />
            <div className="bannerHome-text">
                <h2><strong>HooBoo</strong> </h2>
                <p className="slogan">Hooked on Bookish</p>
            </div>
            <Navbar />
        </div>
    );
}
export default BannerOnlyHome;