import { GET_MOVIES } from "../types"


const iState = []

const MovieReducer = (state = iState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return action.payload
        default:
            return state
    }
}

export default MovieReducer