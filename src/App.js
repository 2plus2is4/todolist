import React from 'react';
import Todos from './todos';
import AddTodo from './addTodo';

class App extends React.Component {

  state = {
    tasks: [
      { id: 1, todo: "finish Sekrio" },
      { id: 2, todo: "finish Sekrio NG+" }
    ],
    show: [(<AddTodo added={this.added} />)],
    finished: [

    ]
  }

  clicked = (id) => {
    let newList = this.state.tasks.filter(todo => {
      return todo.id !== id
    });

    let newfinished = this.state.tasks.filter(todo => {
      return todo.id === id
    });
    newfinished = [...this.state.finished, newfinished];

    this.setState({
      tasks: newList,
      finished: newfinished
    });

    console.log(this.state);
    
  }

  added = (todo) => {
    console.log(todo);
    if (todo.todo === '') return;
    todo.id = Math.random();
    let todos = [...this.state.tasks, todo];
    console.log(todos);
    this.setState({
      tasks: todos,
    });
  }

  switched = (e) => {
    console.log(e.target.id);
    this.setState({
      show: e.target.id === "list" ? [(<AddTodo added={this.added} />),(<Todos Todos={this.state.tasks} deleteTodo={this.clicked} />)]
        : null
     })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Your TODOs</h1>

        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s6" onClick={this.switched}><a className="active" href="#test2"  id="list">Todos</a></li>
              <li className="tab col s6" onClick={this.switched}><a href="#test4" id="complete">Completed</a></li>
            </ul>
          </div>
        </div>

        <AddTodo added={this.added} />
        <Todos Todos={this.state.tasks} deleteTodo={this.clicked}/>
        {/* {this.state.show} */}
      </div>
    );
  }
}

export default App;
