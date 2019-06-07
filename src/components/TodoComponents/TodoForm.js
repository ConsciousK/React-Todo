import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.todoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Type Your Todo Here..."
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;