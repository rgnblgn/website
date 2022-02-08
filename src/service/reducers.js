import { combineReducers } from 'redux';
import imagesReducer from './images/reducers';
import tabsReducer from './tab-panel/reducer'

export default combineReducers({
  images: imagesReducer,
  tabs:tabsReducer
});