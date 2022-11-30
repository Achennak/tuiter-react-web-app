import React from "react";

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' }
    }

) => {
    return(
        <li className="list-group-item">
            <div className="d-flex">
                <div className="align-items-stretch">
                    <img alt="description of image" className="rounded-circle" height={48} src={`${who.avatarIcon}`}/>
                </div>
                <div className="w-75 ms-2">
                    <div className="fw-bold">{who.userName}</div>
                    <div className="text-secondary">@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
