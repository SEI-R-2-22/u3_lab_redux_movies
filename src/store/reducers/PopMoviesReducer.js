const {GET_POP_MOVIES, GET_MOVIE_DETAILS } = require('../types');

const initialState = {
  movies: [],
  details: [],
}

const PopMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POP_MOVIES:
      // console.log("reducer GET_POP_MOVIES payload", action.payload);
      return {...state, movies: action.payload }
    case GET_MOVIE_DETAILS:
      console.log("reducer DEETS", action.payload);
      return {...state, details: action.payload}
    default: 
      return {...state}
  }
}

export default PopMoviesReducer;