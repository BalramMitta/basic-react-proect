import React, { Component } from 'react';
import '../Css/AddNewTodoModal.css'

class AddNewTodoModal extends Component {
    render() {

        return (
            <div id="close-modal" className={this.props.isOpen?"add-new-todo":"closed"} onClick={this.props.closeModal}>
               <div className="add-new-todo-dialogue">
               <div><center><b>Add New Task</b></center></div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label task-title-input-div">
                            <input className="mdl-textfield__input" type="text" id="task-title"></input>
                            <label className="mdl-textfield__label" for="task-title">I want to..</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield">
                            <textarea class="mdl-textfield__input" type="text" rows= "2" id="task-notes" ></textarea>
                            <label class="mdl-textfield__label" for="task-notes">Notes...</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield">
                            <select id="select-list" name="myselect" class="mdl-textfield__input">

                                {this.props.lists.map(function (data, index) {
                                    return(
                                 <option value={index}>{data.name}</option>
                                 );
                             })}
                            </select>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield">
                            <select id="select-when" name="myselect" class="mdl-textfield__input">
                                 <option value="Today">Today</option>
                                 <option value="Tomorrow">Tomorrow</option>
                                 <option value="Upcoming">Upcoming</option>
                                 <option value="Sunday">Sunday</option>
                            </select>
                    </div>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                         Add
                    </button>
               </div>
            </div>
        );
    }
}

export default AddNewTodoModal;
