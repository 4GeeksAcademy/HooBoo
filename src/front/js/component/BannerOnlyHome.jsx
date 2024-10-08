import React from "react";
import BannerHome from "/workspaces/HooBoo/src/front/img/BannerHome.png";
import '../../styles/BannerStyleOnlyHome.css';
import Navbar from "./Navbar.jsx";

const BannerOnlyHome = () => {
    return (
        <div className="banner-container">
            <img src={BannerHome} alt="BannerOnlyHome" className="banner-image-only-home" />
            <div className="bannerHome-text">
                <h2><strong>HooBoo</strong> </h2>
                <p className="slogan">Hooked on Bookish</p>
            </div>
            <Navbar />
        </div>
    );
}
export default BannerOnlyHome;