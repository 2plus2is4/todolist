import React from 'react';




function todos({ Todos,deleteTodo }) {
    
    const todosList = Todos.length ? (Todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id} onClick={() => { deleteTodo(todo.id) }}> 
                <a href="#!" className="collection-item" id="imtodo">{todo.todo}</a>
                {/* <span className="hoverable-SELECT">{todo.todo}</span> */}
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