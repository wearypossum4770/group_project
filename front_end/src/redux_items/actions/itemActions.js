import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../types/types'


const getItems = () =>({type: GET_ITEMS})

const deleteItem = id => ({type: DELETE_ITEM, payload:id})

const addItem = item =>({type:ADD_ITEM, payload:item})

const setItemLoading = () => ({type:ITEMS_LOADING})

export {getItems, deleteItem, addItem, setItemLoading}