const { GET_ALL_MOVIES, MOVIES_LOADING_TYPE } = require('../types')

const iState = {
    allMovies: []
}

const MovieReducer = (state = iState, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES: 
            return { ...state, allMovies: action.payload }
        default:
            return { ...state }
    }
}

export default MovieReducer