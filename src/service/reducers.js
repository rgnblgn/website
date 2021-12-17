import { combineReducers } from 'redux';
import imagesReducer from './images/reducers';

export default combineReducers({
  images: imagesReducer
});