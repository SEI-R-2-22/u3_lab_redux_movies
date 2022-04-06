const { GET_REVIEWS } = require('../types')

const initialState = {
  reviews: []
}

const ReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, reviews: action.payload }
    default:
      return { ...state }
  }
}

export default ReviewsReducer