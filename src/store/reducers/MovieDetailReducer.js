import { GET_MOVIE_DETAIL } from '../types'

const initialState = {
  detail: []
}

const MovieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return { ...state, detail: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailReducer
