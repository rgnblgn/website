import axios from 'axios';
import { API_KEY } from '../util';

const imagesApi = "http://localhost:8001/api/images"
//const dogApi = "https://official-joke-api.appspot.com/random_joke";

const lat = 41.091072;
const lng = 29.01278721;
const params = 'waveHeight,airTemperature';

export const fetchProducts = () => dispatch => {
  return axios
    .get(imagesApi)
    .then(res => {
      let { images } = res.data;

      return dispatch({
        type: "FETCH_PRODUCTS",
        payload: images
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};

export const fetchWeather = () => dispatch => {
  return axios
    .get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,{
      headers: {
        Authorization: API_KEY
      }
     })
    .then(res => {
      let  weather  = res.data.hours;

      return dispatch({
        type: "FETCH_WEATHER",
        payload: weather
      });
    })
    .catch(err => {
      console.log('Could not fetch weather. Try again later.');
      console.log(err)
    });
};