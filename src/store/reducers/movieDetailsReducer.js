const { GET_MOVIEDETAILS } = require('../types')

const iState = {
  details: {}
}

const ProductReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIEDETAILS:
      state.details = { ...action.payload }
      return { ...state }
    default:
      return { ...state }
  }
}

export default ProductReducer
