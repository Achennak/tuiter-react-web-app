import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ProfileBanner from "./profile-banner";

const ProfileComponentMenu = () => {
    const profileInfo = useSelector(state => state.profile)
    const [profile] = useState(profileInfo);
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className="col-11">
                    <h5> {profile.firstName} {profile.lastName} </h5>
                    <span className="text-secondary" style={{fontSize: "0.9em"}}>
                        {profile.numberOfTweets} Tweets
                    </span>
                </div>
            </div>
            <ProfileBanner/>
            <Link to={"/tuiter/edit-profile"}
                  className="btn btn-light rounded-pill float-end fw-bold"
                  style={{marginTop: "-15px"}}>
                Edit Profile
            </Link>
            <div>
                <br/> <br/>
                <span className="fw-bold"> <h5>{profile.firstName} {profile.lastName}</h5> </span>
                <span className="text-secondary" style={{fontSize: "0.875em"}}>
                        {profile.handle}
                </span> <br/>
                <div className="mt-2">
                    <p className="text-black" style={{fontSize: "0.875em"}}>
                        {profile.bio}
                    </p>
                </div>
                <div>
                    <i className="bi bi-geo-alt"></i>
                    <span className="text-secondary"
                          style={{fontSize: "15px"}}> {profile.location} </span>
                    &nbsp;&nbsp;&nbsp;
                    <i className="bi bi-balloon"></i>
                    <span className="text-secondary"
                          style={{fontSize: "15px"}}> Born {profile.dateOfBirth} </span>
                    &nbsp;&nbsp;&nbsp;
                    <i className="bi bi-calendar3"></i>
                    <span className="text-secondary"
                          style={{fontSize: "15px"}}> Joined {profile.dateJoined} </span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold"
                          style={{fontSize: "0.875em"}}>{profile.followingCount}</span>
                    <span className="text-secondary" style={{fontSize: "0.875em"}}> Following</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="fw-bold"
                          style={{fontSize: "0.875em"}}>{profile.followersCount}</span>
                    <span className="text-secondary" style={{fontSize: "0.875em"}}> Followers</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponentMenu;