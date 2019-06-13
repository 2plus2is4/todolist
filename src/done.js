import React from 'react';

function Done({ Finished,deleteTodo }) {
    console.log(Finished);
    const doneList = Finished.length ? (Finished.map(todo => {
        return (
            <div className="collection-item scale-transition" key={todo.id} >  
                <li className="collection-item scale-transition"><div>{todo.todo}<a href="#!" className="secondary-content" onClick={() => { deleteTodo(todo.id,1) }}><i className="material-icons">backspace</i></a></div></li>
            </div>
        )
    })): (<p className="center">it's lonely here :(</p>);


    return (
        <ul className="collection with-header">
        <li className="collection-header teal white-text"><h4>COMPLETED</h4></li>
            {doneList}
        </ul>
    );
}

export default Done;