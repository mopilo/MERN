import uuid from 'uuid';
import { GET_ITEMS, DELETE_ITEMS, ADD_ITEMS } from '../actions/types'


const initialState = {
    items: [
        { id: uuid(), name: 'Milk'},
        { id: uuid(), name: 'Eggs'},
        { id: uuid(), name: 'Oil'},
        { id: uuid(), name: 'Fish'},
        { id: uuid(), name: 'Beans'}


    ] 
}

export default function (state=initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            } 
        case DELETE_ITEMS:
            return{
                ...state,
                items: state.items.filter(item=> item.id !== action.payload)
            }
            case ADD_ITEMS:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}