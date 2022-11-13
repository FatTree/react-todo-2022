import { useDispatch } from "react-redux";
import * as actions from '../redux/action';

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const todo = props.props;
    
    return (
        <div className="todoItem" index={todo.idx}>
            <input 
                type="checkbox"
                name={todo.id}
                onChange={()=> dispatch(actions.toggleTodo(todo.idx))}
                checked={todo.isChecked}/>
            <label htmlFor={todo.id}>
                {todo.content}
            </label>
            <button onClick={() => dispatch(actions.deleteItem(todo.idx)) }>delete</button>
        </div>
    )
}

export default TodoItem;