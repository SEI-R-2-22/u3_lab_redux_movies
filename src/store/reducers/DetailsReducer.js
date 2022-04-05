const { GET_DETAILS } = require('../types')

const mState = {
  details: []
}

const DetailsReducer = (state = mState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return { ...state, details: action.payload }
    default:
      return { ...state }
  }
}

export default DetailsReducer
