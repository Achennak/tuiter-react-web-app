import React from "react";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/TuitsList";

function Home() {
    return(
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    );

}

export default Home;