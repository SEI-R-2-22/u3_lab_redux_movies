const { SHOW_LOADING_TYPE, GET_SHOWS } = require('../types')

const iState = {
  shows: [],
  showsLoading: '' 
}

const ShowReducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_LOADING_TYPE:
      return { ...state, showsLoading: action.payload }
    case GET_SHOWS:
      return { ...state, shows: action.payload }
    default:
      return { ...state }
  }
}

export default ShowReducer
