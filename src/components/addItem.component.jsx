const AddItem = (props) => {
    return (
        <div>
            <input 
                placeholder = "add todo"
                onChange = { props.handleChange }
                onKeyDown = { props.keyPress }
                value = { props.item } />
            <button onClick = { props.addTodo }>
                Add TODO
            </button>
            <br />
        </div>
    )
}

export default AddItem;