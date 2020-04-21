import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types"

const initialState = {
    msg: {},
    status: null,
}


const reducerFetchError = (state =initialState, action) =>{
    switch(action.type){
        case GET_ERRORS:
            return {...state, msg:action.payload.msg, status: action.payload.status}
        case CLEAR_ERRORS:
            return {...state, msg:{}, status:null}
        default:
            return state
    }
}

export default reducerFetchError