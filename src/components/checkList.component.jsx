import { useSelector } from "react-redux";
import * as types from '../redux/actionTypes';

import TodoItem from './todoItem.component';


const CheckList = () => {
    const checkList = useSelector( store => store.todoReducer);
    const filterAction = useSelector( store => store.filterReducer);
    return (
        <div className="checkList">
            {
                checkList.map( (todo, idx) => {
                    if ((filterAction === types.FILTER_ALL) ||
                        (filterAction === types.FILTER_DONE && todo.isChecked === true) || 
                        (filterAction === types.FILTER_TODO && todo.isChecked === false))
                    {
                        const props = {...todo, idx}
                        return (<TodoItem key={idx} props={props} />)
                    }
                    return null;
                })
            }
        </div>
    )
}

export default CheckList;