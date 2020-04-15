import { 
    USER_LOADING, USER_LOADED, AUTH_ERROR, 
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, REGISTER_FAIL } from '../types/types'

const initialState = ({
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
})

const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return { ...state, isLoading: true }
        case USER_LOADED:
            return { ...state, isAuthenticated: true, isLoading: false, user: action.payload }
        case AUTH_ERROR: case LOGIN_FAIL: case LOGOUT_SUCCESS: case REGISTER_FAIL:
            return { ...state, token: false, user: null, isAuthenticated: false, isLoading: false, }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { ...state, ...action.payload, isLoading: false, isAuthenticated: true }
        default:
            return state;
    }
}
export default AuthenticationReducer;