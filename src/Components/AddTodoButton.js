import React, { Component } from 'react';
import '../Css/AddTodoButton.css';
import AddNewTodoModal from "./AddNewTodoModal"

class AddTodoButton extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


 componentDidMount() {
    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
 }

    render() {

        return (
            <div className="add-todo-button">
                <button id="show-dialog" type="button" class="mdl-button" className="add-button"> + New </button>
  <dialog class="mdl-dialog">
  <span class="close">
  X
  </span>
  Add new Task <br></br>
  </dialog>
            </div>
        );
    }
}

export default AddTodoButton;
