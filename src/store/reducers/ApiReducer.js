const initialState = {
    apiLoading : false
}

const ApiReducer = (state = initialState,action) =>{
    switch(action.type) {
        case 'API_LOADED':
            return{ ...state, appLoading:action.payload}
        default:
            return {...state}
    }
}
export default ApiReducer