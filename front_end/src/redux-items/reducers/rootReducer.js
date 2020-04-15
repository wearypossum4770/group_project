import {combineReducers} from 'redux'
import reduceFetchPost from './postReducers'

export default combineReducers({
    posts: reduceFetchPost,
})