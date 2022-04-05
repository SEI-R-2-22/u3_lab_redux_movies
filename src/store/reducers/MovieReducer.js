const { GET_MOVIES, MOVIE_LOADING_TYPE } = require('../types')

const iState = {
    movies: [],
    moviesLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
}
const MovieReducer = (state = iState, action) => {
    switch (action.type) {
        case MOVIE_LOADING_TYPE:
             return {...state, moviesLoading: action.payload}
        case GET_MOVIES:
            return{ ...state, movies: action.payload }
        default:
            return { ...state }
    }
}
export default MovieReducer