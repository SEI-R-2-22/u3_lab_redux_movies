import { GET_MOVIES, GET_MOVIES_LIST, GET_MOVIE_DETAIL } from '../types'

const initialState = {
  movies: []
}

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return { ...state, movies: action.payload }

    default:
      return { ...state }
  }
}

export default MovieReducer
