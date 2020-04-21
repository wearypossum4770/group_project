import {combineReducers} from 'redux'
import reduceFetchPost from './postReducers'
import reducerFetchError from './errorReducers'

export default combineReducers({
    posts: reduceFetchPost,
    errors: reducerFetchError,
})