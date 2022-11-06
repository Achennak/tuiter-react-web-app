import React from "react";

const ProfileBanner = () => {
    return (
        <div>
            <div className="row">
                <img src="../../images/whale.jpeg" alt="" width={100} height={210}/>
            </div>

            <div className="">
                <img className="position-absolute rounded-circle"
                     src="../../images/ls.jpeg" alt=""
                     style={{
                         height: "100px",
                         width: "100px",
                         marginLeft: "15px",
                         marginTop: "-70px"
                     }}/>
            </div>
            <br/>
        </div>
    );
};

export default ProfileBanner;