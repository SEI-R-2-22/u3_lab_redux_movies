const { GET_DETAILS } = require('../types')

const initialState = {
  details: []
}

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return { ...state, details: action.payload }
    default:
      return { ...state }
  }
}

export default DetailsReducer