import React from 'react';

class addTodo extends React.Component{

    state = {
        todo:''
    }

    submitted = (e) => {
        e.preventDefault();
        this.props.added(this.state);
        this.setState({
            todo:''
        })
    }

    changed = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.submitted}>
                <input className="input-field col-s2" id="todo" onChange={this.changed} value={this.state.todo}/>
                <button className="btn waves-effect waves-light col s12" type="submit">Submit</button>
            </form>
        )
    }
}

export default addTodo;