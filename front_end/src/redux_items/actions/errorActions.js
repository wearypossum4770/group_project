import { GET_ERRORS, CLEAR_ERRORS } from '../types/types'

const initialState = {
    msg: {},
    status: null,
    id: null
}

export const returnErrors = (...errors) => ({type:GET_ERRORS, payoad(msg, status,id)})
    
export  const clearErrors = () => ({type:CLEAR_ERRORS})