import React, { Component } from 'react';
import '../Css/AddNewTodoModal.css'

class AddNewTodoModal extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div className="add-new-todo">
               <div className="add-new-todo-dialogue">
               </div>
            </div>
        );
    }
}

export default AddNewTodoModal;
