const { SHOW_LIST } = require("../types");

const initialState = {
  movieList: [],
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LIST:
      return { ...state, movieList: action.payload };
    default:
      return { ...state };
  }
};

export default ListReducer;
