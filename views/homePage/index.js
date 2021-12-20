import React from "react";
import HomePageComponent from "../../components/home";
import MainSliderComponent from "../../components/main-slider"
import CountComponent from '../../components/count'
import TabPanel from "../../components/tab-panel";

function HomePage () {
    return (<div>
            <HomePageComponent/>
            <MainSliderComponent/>
            <CountComponent />
            <TabPanel />
    </div>)
    
}

export default HomePage;