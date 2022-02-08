import axios from 'axios';

const tabHeaderApi = "http://localhost:8001/api/tabs"

export const fetchTabHeaders = () => dispatch => {
  return axios
    .get(tabHeaderApi)
    .then(res => {
      let { tabs } = res.data;

      return dispatch({
        type: "FETCH_TAB_PANEL",
        payload: tabs
      });
    })
    .catch(err => {
      console.log('Could not fetch tabs. Try again later.');
    });
};
