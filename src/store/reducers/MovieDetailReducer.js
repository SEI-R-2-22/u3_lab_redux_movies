const { GET_MOVIE_DETAIL } = require('../types')

const initialState = {
  movieDetail: {}
}

const MovieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return { ...state, movieDetail: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailReducer
