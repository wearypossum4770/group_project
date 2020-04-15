import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

const reduceFetchPost = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, items: action.payload }
        default:
            return state
        case NEW_POST:
            return {...state, item:action.payload}
    }
}
export default reduceFetchPost

