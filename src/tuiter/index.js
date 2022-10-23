import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./who-to-follow-list/index";
import ExploreComponent from "./ExploreComponent/index";
import React from "react";
import {Routes, Route} from "react-router";
import HomeComponent from "./Home/index";
function Tuiter() {
    return(

        <div className="row mt-2">
            <div className="col-xl-2 col-xxl-2 col-sm-2 col-md-2 col-lg-1">
            <NavigationSidebar active="explore"/>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10" style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block d-xl-block d-xxl-block col-4">
            <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter;