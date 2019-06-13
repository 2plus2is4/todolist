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
            <form className="col 12 s12" onSubmit={this.submitted}>
                <input className="input-field col 10 s10" placeholder="add some todos" id="todo" onChange={this.changed} value={this.state.todo}/>
                <button className="btn waves-effect waves-light col 2 s2" type="submit">Submit</button>
            </form>
        )
    }
}

export default addTodo;