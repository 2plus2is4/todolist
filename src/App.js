import React from 'react';
import Todos from './todos';
import AddTodo from './addTodo';
import Done from './done';
var $ = require('jquery');
// var M = require('materialize-css');




// let instance = M.Tabs.init();


class App extends React.Component {

  state = {
    tasks: [
      { id: 1, todo: "dont click me" },
      { id: 2, todo: "clean tour room ffs" }
    ],
    finished: [
    ]

  }

  clicked = (id, type) => {
    if (type === 0) {
      let newList = this.state.tasks.filter(todo => {
        return todo.id !== id
      });

      let newfinished = this.state.tasks.filter(todo => {
        return todo.id === id
      })[0];
      newfinished = [...this.state.finished, newfinished];

      this.setState({
        tasks: newList,
        finished: newfinished
      });
    } else {
      let newList = this.state.finished.filter(todo => {
        return todo.id !== id
      });

      this.setState({
        finished: newList
      });
    }

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
    console.log($('#page1'), $('#page2'));
    if (e.target.id === 'list') {
      $('#page2').hide();
      $('#page1').show();
      $('#complete').removeClass('active'); 
      $('#list').addClass('active');
    } else {
      $('#page1').hide();
      $('#page2').show();
      $('#list').removeClass('active'); 
      $('#complete').addClass('active');
    }
  }
  

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Your TODOs</h1>
        <div className="row">
          <div className="center col 12 s12">
            <ul className="center tabs col 12 s12">
              <li className="tab col 6 s6" onClick={this.switched}><a className="active" href="#page2" id="list">Todos</a></li>
              <li className="tab col 6 s6" onClick={this.switched}><a href="#page1" id="complete">Completed</a></li>
            </ul>
            <div className="container 12 s12" id="page1">
              <AddTodo added={this.added} />
              <Todos Todos={this.state.tasks} deleteTodo={this.clicked} />
            </div>
            <div className="container 12 s12" id="page2" >
              <Done Finished={this.state.finished} deleteTodo={this.clicked} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
