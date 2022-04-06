import { SEARCH } from '../types'

const initialState = {
  search: ''
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.payload }
    default:
      return { ...state }
  }
}

export default SearchReducer
