import {combineReducers} from 'redux'
import itemReducer from './itemReducer'
import authenticationReducer from './authenticationReducer'
import errorReducer from './errorReducer'


const rootReducer = combineReducers({
    item:itemReducer,
    auth: authenticationReducer,
    err: errorReducer
})

export default rootReducer