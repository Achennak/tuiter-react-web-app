import React from "react";
import "./index.css";

const TweetItem = (
    {
        tweet = {
            "profileName": "Robert Zabrina",
            "handleName": "@achennak",
            "date": "2h",
            "content": "Falcon in the winter, soldiers!",
            "profileImg": "../../images/moon.jpeg",
            "postImg": "../../images/falcon.jpeg",
            "postImgContentTitle": "SpaceX releases the FALCON 2023.JavaScript is programming language that can run on browsers as well as desktops.",
            "postImgContent": "SpaceX release enjoy.HTML and CSS on their own can create compelling static Web pages.We'll write JavaScript code that can react to user events, can generate dynamic HTML, and modify the DOM programmatically.",
            "postLink": "netflix.com",
            "postExternalLink": "@InspirationMission"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="wd-parent-flex-container2">
                <div className="wd-profile-image">
                    <img className="rounded-circle"
                         src={`${tweet.profileImg}`} width="48px" height="48px"/>
                </div>
                <div className="wd-profile-info">
                    <div className="wd-profile-outline">
                        <div className="wd-profile-name">
                            <h4 className="wd-text-beside-profile-p1">{tweet.profileName}
                                <i className="ms-1 text-primary fas fa-check-circle" aria-hidden="true"></i></h4>
                            <h4 className="wd-text-beside-profile-p2">{tweet.handleName}</h4>
                            <h4 className="wd-text-beside-profile-p2">&nbsp;<span
                                className="wd-dot">&#183;</span>&nbsp;{tweet.date}</h4>

                        </div>
                        <div className="wd-icon-1">...</div>
                    </div>

                    <div className="wd-profile-details">
                        <div className="wd-bio">
                            <p className="wd-text-bio"> {tweet.content}</p>
                            <span class="wd-text-bio text-primary"><span>{tweet.postExternalLink}</span></span>
                        </div>
                    </div>
                    <div className="wd-bookmark-info " id="image-info">
                            <img className="wd-rounded-top-corners-images"
                                 src={`/images/${tweet.postImg}`}
                                 width="100%"
                            />


                        <div className="wd-text-below-image-borders">
                            {tweet.postImgContentTitle
                              ? <p class="wd-title">  {tweet.postImgContentTitle}</p> : " "}

                            {tweet.postImgContent
                              ? <p class="wd-text-below-image">  {tweet.postImgContent}</p> : " "}

                            {tweet.postLink ? <p class ="wd-link-1"><i class="fa fa-solid fa-link"></i>{tweet.postLink}</p> : " "}

                        </div>
                    </div>
                    <div className="wd-emojis">
                        <div className="wd-reactions">
                            <p className="wd-icons">
                                <a href="#" className="wd-links"><i
                                    className="fa-regular fa-comment"></i>
                                </a>
                            </p>
                            <p className="wd-number">22 </p>
                            <p></p>

                        </div>
                        <div className="wd-reactions">
                            <p className="wd-icons">
                                <a href="#" className="wd-links">
                                    <i className="fa-solid fa-retweet"></i>

                                </a>
                            </p>
                            <p className="wd-number">9 </p>
                            <p></p>
                        </div>
                        <div className="wd-reactions">
                            <p className="wd-icons">
                                <a href="#" className="wd-links">
                                    <i className="fa-solid fa-heart red"></i>

                                </a>
                            </p>
                            <p className="wd-number">37 </p>
                            <p></p>
                        </div>
                        <div className="wd-reactions">
                            <p className="wd-icons">
                                <a href="#" className="wd-links">
                                    <i className="fa fa-solid fa-arrow-up-from-bracket"></i>
                                </a>
                            </p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TweetItem;
