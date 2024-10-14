import React from "react";
import sincolor from "../../img/sincolor.png";

import '../../styles/hooboo_banner.css';


const HoobooBanner = () => {
    return (
        <div className="banner-containerHooBoo">
            <div className="banner-overlay"></div>
            <img src={sincolor} alt="bannerHoboo" className="banner-image-HooBoo" />
            <div className="bannerHooboo-text">
                <p className="textHooBOObanner"><strong>HooBoo</strong> </p>
                <p className="sloganTextHooboo">Hooked on Bookish</p>
            </div>
        </div>
    );
}

export default HoobooBanner;
