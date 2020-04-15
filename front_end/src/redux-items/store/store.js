import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const initialState = {}

const middleware = [ReduxThunk]

const store =createStore(rootReducer, initialState, applyMiddleware(...middleware))


export default store