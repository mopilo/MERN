import uuid from 'uuid';
import { GET_ITEMS } from '../actions/types'


const initialState = {
    items: [
        { id: uuid(), name: 'Milk'},
        { id: uuid(), name: 'Eggs'},
        { id: uuid(), name: 'Oil'}
    ] 
}

export default function (state=initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            } 
        default:
            return state
    }
}