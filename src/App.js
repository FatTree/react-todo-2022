// import './App.scss';
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from './redux/action';
import Filter from "./components/filter.component";
import CheckList from "./components/checkList.component";

const App = () => {
  const [item, setItem] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem(e.target.value);
    // console.log(e.target.value);
    // console.log(item); // why lag?
  }

  const keyPress = (e) => {
    if (e.keyCode !== 13) return;
    addTodo();
  }

  const addTodo = (e) => {
    // e.preventDefault();  ??
    if (item.trim() === '') return;
    dispatch(actions.addItem(item));
    setItem('');
  }

  return (
    <div className="App">
      <h1>Hello TODO!</h1>
      <input 
        placeholder = "add todo"
        onChange = { handleChange }
        onKeyDown = { keyPress }
        value = { item } />
      <button onClick = { addTodo }>
          Add TODO
      </button>
      <br />
      <Filter />
      <CheckList />
    </div>
  );
}

export default App;
