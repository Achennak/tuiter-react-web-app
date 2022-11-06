import {createSlice} from "@reduxjs/toolkit";


const userProfile={
    "firstName": "Akshaya",
    lastName: 'Chennakeshava',
    handle: '@achennak',
    "profilePicture": "../../images/fall.jpeg",
    "bannerPicture": "../../images/hd.jpeg",
    bio: 'Student,Northeastern University , AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1997',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223,
    numberOfTweets:6114
}


const profileSlice = createSlice({
                                     name: 'userProfile',
                                     initialState: userProfile,
                                     reducers: {
                                         editProfile(state, action) {
                                             return action.payload;
                                         }
                                     }
                                 });

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;