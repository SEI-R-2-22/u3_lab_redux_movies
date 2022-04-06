import { SEARCH } from '../types'
import { GetSearchResult } from '../../services/MovieService'

export const SearchResult = (query) => {
  return async (dispatch) => {
    try {
      const search = await GetSearchResult(query)

      dispatch({
        type: SEARCH,
        payload: search
      })
    } catch (error) {
      throw error
    }
  }
}
