import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

  addTodoHandler = event => {
    event.preventDefault();
    if (this.state.todo === '' ) {
      return;
    } else {
      const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
      this.setState({ 
        todos: [...this.state.todos, newTodo], 
        todo: '' 
      });
    }
  };

  todoCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  render() {
    return (
      <div className="mainapp">
        <TodoList todos={this.state.todos} todoCompleted={this.todoCompleted}/>
        <TodoForm value={this.state.todo} addTodo={this.addTodoHandler} todoChange={this.changeTodo} />
      </div>
    );
  }
}

export default App;