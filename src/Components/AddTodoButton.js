import React, { Component } from 'react';
import '../Css/AddTodoButton.css';
import AddNewTodoModal from "./AddNewTodoModal"

class AddTodoButton extends Component {
    constructor(props){
        super(props);
        this.state = {
          isAddNewTodoModalOpen:false
        }
        this.openAddNewTodoModal=this.openAddNewTodoModal.bind(this);
        this.closeAddNewTodoModal=this.closeAddNewTodoModal.bind(this);
    }


 openAddNewTodoModal(event) {
    this.setState({isAddNewTodoModalOpen: true});
 }


 closeAddNewTodoModal(event) {
  if(event.target.id === 'close-modal'){
    this.setState({isAddNewTodoModalOpen: false});
  }
 }


    render() {

        return (
            <div className="add-todo-button">                
            <button type="button" className="add-button" onClick={this.openAddNewTodoModal}> + New </button>
            <AddNewTodoModal isOpen={this.state.isAddNewTodoModalOpen} closeModal={this.closeAddNewTodoModal}/>
            </div>
        );
    }
}

export default AddTodoButton;
