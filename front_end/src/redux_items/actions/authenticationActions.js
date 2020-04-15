import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../types/types' 



const initialState = {
    toke:localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:false,
    user:null
}

const loadUser  = () => {

}

const authenticationActions = null
export default authenticationActions