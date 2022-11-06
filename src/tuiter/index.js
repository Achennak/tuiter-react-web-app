import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./who-to-follow-list/index";
import ExploreComponent from "./ExploreComponent/index";
import React from "react";
import {Routes, Route} from "react-router";
import HomeComponent from "./Home/index";
import TuitsList from "./tuits/TuitsList";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {configureStore}
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile/ProfileComponentMenu";
import profileReducer from "./profile/profile-reducer";
import EditProfile from "./edit-profile/EditProfileComponent";

const store = configureStore(
    {
        reducer: {
            who: whoReducer,
            tuits: tuitsReducer,
            profile: profileReducer
        }
    });

function Tuiter() {
    return (
        <Provider store={store}>

            <div className="row mt-2">
                <div className="col-xl-2 col-xxl-2 col-sm-2 col-md-2 col-lg-1">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block d-xl-block d-xxl-block col-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;