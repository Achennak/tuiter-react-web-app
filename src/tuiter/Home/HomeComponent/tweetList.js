import React from "react";

import tweets from './tweets.json';
import TweetItem from "./tweetItem";


const TweetList = () => {
    return(
        <ul className="list-group">
            {
                tweets.map(tweet => <TweetItem key={tweet._id} tweet={tweet}/>)
            }
        </ul>
);
};

export default TweetList;