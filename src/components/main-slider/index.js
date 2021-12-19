import React , {useEffect}from "react";
import Slider from "react-slick";
import style from './index.scss'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts ,fetchWeather } from '../../service/images/action';

function SimpleSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };  

  useEffect(() => {
    props.fetchProducts();
    props.fetchWeather();

  },[]);

  console.log(props.weather)

  let currentTime = new Date().getHours()
  let tempTexts = ["Mevcut Sıcaklık","Yarın","Sonraki Gün"];

  return (
    <div className="main-page-slider">
      <Slider {...settings}>

      {props.images && props.images.map((item,index)=>{
        return <div key={"e"+index} className="slick-slide-blocks">
        <img alt={"e"+index} src={item.url}></img>
      </div>
      })}
    </Slider>
    { props.weather &&  tempTexts.map((item,index) =>{
        return <div>{item} = {Math.floor(props.weather[(index*24) + currentTime]['airTemperature']['noaa'])} C</div>
    })}
    </div>
  );
}

SimpleSlider.propTypes = {
  fetchProducts: PropTypes.func,
  images: PropTypes.array,
  weather: PropTypes.array
}

function mapStateToProps(state) {
  return {
    images: state.images.images,
    weather:state.images.weather}
} 

export default connect(mapStateToProps,{fetchProducts,fetchWeather})(SimpleSlider);