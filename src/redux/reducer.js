import {checkList} from './todo';
import * as types from './actionTypes';

export const todoReducer = (state = checkList, action) => {
    switch (action.type) {
        case (types.ADD_ITEM):
            state = [
                ...state,
                {
                    id: Date.now(),
                    content: action.content,
                    isChecked: false
                }
            ];
            return state;

        case (types.DELETE_ITEM):
            state = [
                ...state.slice(0, action.idx),
                ...state.slice(action.idx + 1)
            ];
            return state;

        case (types.TOGGLE_ITEM):
            let newList = [...state];
            newList[action.idx].isChecked = !newList[action.idx].isChecked;
            return newList;

        default:
            return state;
    }
}

export const filterReducer = (state = types.FILTER_ALL, action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
}
