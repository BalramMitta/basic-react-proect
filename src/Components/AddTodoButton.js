import React, { Component } from 'react';
import '../Css/AddTodoButton.css';

class AddTodoButton extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="add-todo-button">
                <button>+New</button>
            </div>
        );
    }
}

export default AddTodoButton;
