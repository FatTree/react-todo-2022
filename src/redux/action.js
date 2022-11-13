import * as types from './actionTypes';

export const addItem = (content) => {
    return {
        type: types.ADD_ITEM,
        content
    }
} 

export const deleteItem = (idx) => {
    return {
        type: types.DELETE_ITEM,
        idx
    }
}

export const setFilter = (filter) => {
    return {
        type: types.FILTER,
        filter
    }
}

export const toggleTodo = (idx) => {
    console.log("idx",idx);
    return {
        type: types.TOGGLE_ITEM,
        idx
    }
}