import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../types/types'
import uuid from 'uuid'


const initialState = {
    items: [
        {id:uuid(), name:'Eggs'}
    ]
}


const ItemReducer = (state = initialState, action) => {
    switch(action) {
    case GET_ITEMS:
        return {...state,      }
     case ADD_ITEM:
         return {...state, items:[action.payload, ...state.items]     }
     case DELETE_ITEM:
         return {...state , 
        items:state.items.filter(item =>item.id !== action.payload )}
     case ITEMS_LOADING:
         return {...state , loading:true}
    default:
        return state
}
}

export default ItemReducer;