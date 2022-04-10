const { GET_DETAILS } = require('../types')


const DetailReducer = (state = initialState, action) =>{
    switch(action.type) {
        case 'API_LOADED':
            return{ ...state, appLoading:action.payload}
            default:
                return {...state}
    }
}

export default DetailReducer


//// very hard to understand this!!!!