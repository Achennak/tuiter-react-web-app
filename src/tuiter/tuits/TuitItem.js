import React from "react";
import "./index.css";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "../../images/falcon.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "disliked":false,
            "dislikes":20,
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars."
        }
    }
) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="wd-parent-flex-container2">
                <div className="wd-profile-image">
                    <img alt="description of image" className="rounded-circle"
                         src={`${tuit.image}`} width="48px" height="48px"/>
                </div>
                <div className="wd-profile-info">
                    <div className="wd-profile-outline wd-profile-name">
                        <div className="wd-profile-name">
                            <h4 className="wd-text-beside-profile-p1 fw-bold">{tuit.userName}
                                <i className="ms-1 text-primary fas fa-check-circle"
                                   aria-hidden="true"></i></h4>
                            <h4 className="wd-text-beside-profile-p2">{tuit.handle}</h4>
                            <h4 className="wd-text-beside-profile-p2">&nbsp;<span
                                className="wd-dot">&#183;</span>&nbsp;{tuit.time}</h4>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>
                    <div className="wd-text-align" id="image-info">
                        <span className="wd-text-below-image">  {tuit.tuit}</span>
                    </div>

                    <TuitStats tuits={tuit}/>
                </div>
            </div>
        </li>

    );
};
export default TuitItem;