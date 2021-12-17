const initialState = {
    products: []
  };
  
export default function(state = initialState, action) {
    switch (action.type) {
      case "FETCH_PRODUCTS":
        return {
          ...state,
          images: action.payload
        };
        case "FETCH_DOGS":
          return {
            ...state,
            dogs: action.payload
          };
      default:
        return state;
    }
};
