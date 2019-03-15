import React, { Component } from 'react';
import '../Css/AddTodoButton.css';
import AddNewTodoModal from "./AddNewTodoModal"

class AddTodoButton extends Component {


    render() {

        return (
            <div className="add-todo-button">
                <button type="button" className="add-button" onClick={this.props.openAddNewTodoModal}> + New </button>
                <AddNewTodoModal isOpen={this.props.isAddNewTodoModalOpen} handleAddNewTask={this.props.handleAddNewTask} closeModal={this.props.closeAddNewTodoModal} lists={this.props.lists} />
            </div>
        );
    }
}

export default AddTodoButton;
