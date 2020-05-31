import './style.css';
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from '../todosData';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { todos: todosData }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const todoComponent = this.state.todos.map((todo) => {
      return (
        <TodoItem 
          key={todo.id} 
          handleChange={this.handleChange} 
          todo={todo}
        />
      )
    })

    return (
      <div className="todo-list">
        {todoComponent}
      </div>
    )
  }
}

export default App;

/*
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isLogged: true }
  }

  handleButton = () => {
    //this.setState({ isLogged: !this.state.isLogged })
    this.setState((prevState) => {
      return {
        isLogged: !prevState.isLogged
      }
    })
  }

  render() {
    console.log(this.state.isLogged)
    let text = this.state.isLogged ? "Logged In" : "Logged Out"
    return (
      <div>
        <h1>{text}</h1>
        <br/><br/>
        <button onClick={this.handleButton}>
          Log {this.state.isLogged ? 'Out' : 'In'}
        </button>
      </div>
    )
  }
}

export default App;
*/