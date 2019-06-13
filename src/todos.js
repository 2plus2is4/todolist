import React from 'react';

function todos({ Todos,deleteTodo }) {
    
    const todosList = Todos.length ? (Todos.map(todo => {
        return (
            <div className="collection-item scale-transition" key={todo.id} onClick={() => { deleteTodo(todo.id,0) }}> 
                <a href="#!" className="collection-item" id="imtodo">{todo.todo}</a>
            </div>
        )
    })): (<p className="center">u free :O</p>);


    return (
        <div className="collection">
            {todosList}
        </div>
    );
}

export default todos;