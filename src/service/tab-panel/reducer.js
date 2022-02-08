const initialState = {
    tabs: []
  };
  
export default function(state = initialState, action) {
    switch (action.type) {
      case "FETCH_TAB_PANEL":
        return {
          ...state,
          tabs: action.payload
        };
      default:
        return state;
    }
};
