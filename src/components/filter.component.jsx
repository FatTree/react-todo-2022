import * as actions from '../redux/action';
import * as types from '../redux/actionTypes';

import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(actions.setFilter(types.FILTER_ALL)) }>ALL</button>
            <button onClick={() => dispatch(actions.setFilter(types.FILTER_DONE))}>DONE</button>
            <button onClick={() => dispatch(actions.setFilter(types.FILTER_TODO))}>TODO</button>
        </div>
    )
}

export default Filter;