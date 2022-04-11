const { SHOW_DETAILS } = require("../types");

const initialState = {
  movieDetails: [],
};

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DETAILS:
      return { ...state, movieDetails: action.payload };
    default:
      return { ...state };
  }
};

export default DetailsReducer;
