import axios from 'axios';

const imagesApi = "http://localhost:8001/api/images"
const dogApi = "https://official-joke-api.appspot.com/random_joke";

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

export const fetchDogs = () => dispatch => {
  return axios
    .get(dogApi)
    .then(res => {
      let  dogs  = res.data;

      return dispatch({
        type: "FETCH_DOGS",
        payload: dogs
      });
    })
    .catch(err => {
      console.log('Could not fetch dogs. Try again later.');
    });
};