import React from "react";

const ProfileBanner = () => {
    return (
        <div>
            <div className="row">
                <img src="../../images/hd.jpeg" alt="" width={100} height={210}/>
            </div>

            <div className="">
                <img className="position-absolute rounded-circle"
                     src="../../images/fall.jpeg" alt=""
                     style={{
                         height: "auto",
                         width: "150px",
                         marginLeft: "15px",
                         marginTop: "-70px"
                     }}/>
            </div>
            <br/>
        </div>
    );
};

export default ProfileBanner;