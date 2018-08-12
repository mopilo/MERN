import {GET_ITEMS, DELETE_ITEMS, ADD_ITEMS, ITEMS_LOADING} from './types'
import axios from 'axios';
export const getItems = () => dispatch=> {
    dispatch(setItemLoading());
    axios
        .get('/api/item')
        .then(res=>dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
}

export const deleteItems = id => dispatch=> {
    axios.delete(`/api/item/${id}`).then(res => dispatch({
        type: DELETE_ITEMS,
        payload: id
    }))
    
}

export const addItem = item => dispatch=> {
        axios
            .post('/api/item', item)
            .then(res => dispatch({
                type: ADD_ITEMS,
                payload: res.data
            }))
}

export const setItemLoading = () => {
    return{
        type: ITEMS_LOADING
    }
}