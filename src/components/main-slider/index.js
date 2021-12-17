import React , {useEffect}from "react";
import Slider from "react-slick";
import style from './index.scss'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts ,fetchDogs } from '../../service/images/action';

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
    props.fetchDogs();

  },[]);

  console.log(props.dogs)

  return (
    <div className="main-page-slider">
      <Slider {...settings}>

      {props.images && props.images.map((item,index)=>{
        return <div key={"e"+index} className="slick-slide-blocks">
        <img alt={"e"+index} src={item.url}></img>
      </div>
      })}
    </Slider>
    </div>
  );
}

SimpleSlider.propTypes = {
  fetchProducts: PropTypes.func,
  images: PropTypes.array,
  dogs: PropTypes.object
}

function mapStateToProps(state) {
  return {images: state.images.images,
  dogs:state}
} 

export default connect(mapStateToProps,{fetchProducts,fetchDogs})(SimpleSlider);