import React, { Component } from 'react';
import '../Css/AddNewTodoModal.css'

class AddNewTodoModal extends Component {
    render() {

        return (
            <div id="close-modal" className={this.props.isOpen?"add-new-todo":"closed"} onClick={this.props.closeModal}>
               <div className="add-new-todo-dialogue">
               </div>
            </div>
        );
    }
}

export default AddNewTodoModal;
