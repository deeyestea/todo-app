import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    todoList: [],
  }

  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-2">Todo App</h1>
          </div>
        </div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" name="todoTask" className="form-control" placeholder="Please enter your taks..." autoComplete="off" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-success">Add</button>
            </div>
          </div>
        </form>

        <ul className="list-group">
          {
            this.state.todoList.map(
              (item, index) => {
                return <li key={index} className="list-group-item">
                  {item}
                  <button className="btn btn-sm btn-outline-danger float-right"
                    onClick={(e) => { this.deleteTask(e, index) }}>Delete</button>
                </li>
              }
            )
          }
        </ul>
      </>
    );
  }

  handleSubmit = e => {
    const taskDesc = e.target.elements.todoTask.value;
    if (taskDesc.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, taskDesc]
      })

      e.target.reset();
    }
    e.preventDefault();
  }

  deleteTask = (e, index) => {
    const todoArray = [...this.state.todoList]
    todoArray.splice(index, 1)
    this.setState({ todoList: todoArray })
  }
}



export default App;
