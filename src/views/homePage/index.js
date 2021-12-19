import React from "react";
import HomePageComponent from "../../components/home";
import MainSliderComponent from "../../components/main-slider"
import CountComponent from '../../components/count'


function HomePage () {
    return (<div>
            <HomePageComponent/>
            <MainSliderComponent/>
            <CountComponent />
    </div>)
    
}

export default HomePage;