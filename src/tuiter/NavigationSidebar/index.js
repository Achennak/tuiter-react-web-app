import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a href="#" className="list-group-item">
                <div className="d-flex">
                    <i className="fab fa-twitter"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">
                        Tuiter
                    </div>
                </div>

            </a>
            <Link to="/tuiter/Home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <div className="d-flex">
                    <div><i className="fas fa-home"></i></div>
                    <div className="d-none d-xl-block d-xxl-block ms-1">
                        Home
                    </div>
                </div>
            </Link>

            <Link  to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="d-flex align-items-center ">
                    <i className="fas fa-hashtag"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">Explore</div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <div className="d-flex align-items-center ">
                    <i className="fa-solid fa-computer"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">Labs</div>
                </div>
            </Link>
            <a href="../notifications.html" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-bell"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">Notifications</div>
                </div>
            </a>
            <a href="../messages.html" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="d-flex align-items-center ">
                    <i className="fas fa-envelope"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">Messages</div>
                </div>
            </a>
            <a href="../bookmarks/index.html" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-bookmark"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">
                        Bookmarks
                    </div>
                </div>
            </a>
            <a href="../lists.html" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-list"></i>
                    <div className="d-none  d-xl-block d-xxl-block ms-1">
                        Lists
                    </div>
                </div>
            </a>
            <a href="../profile.html" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-user"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">
                        Profile
                    </div>
                </div>
            </a>
            <a href="more.html" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-ellipsis-h"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">
                        More
                    </div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;