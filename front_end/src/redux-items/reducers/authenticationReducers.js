import {FETCH_JSONWEBTOKEN} from '../actions/types'


const initialState = {
    accessJWT: "",
    refreshJWT: ""
}


const authenticationReducers = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default authenticationReducers

const fetchJWT="http://192.168.86.144:8000/api&minustoken&minusauth/"