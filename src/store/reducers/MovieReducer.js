const { GET_MOVIES } = require('../types')

const mState = {
  movies: []
}

const MovieReducer = (state = mState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    default:
      return { ...state }
  }
}

export default MovieReducer
