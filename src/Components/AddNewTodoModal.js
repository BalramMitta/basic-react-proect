import React, { Component } from 'react';
import '../Css/AddNewTodoModal.css'

class AddNewTodoModal extends Component {
    render() {

        return (
            <div id="close-modal" className={this.props.isOpen ? "add-new-todo" : "closed"} onClick={this.props.closeModal}>
                <div className="add-new-todo-dialogue">
                    <div><center><b>Add New Task</b></center></div>
                    <form onSubmit={this.props.handleAddNewTask}>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="task-title" name="taskTitle"></input>
                            <label className="mdl-textfield__label" htmlFor="task-title">I want to..</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <textarea className="mdl-textfield__input" type="text" rows="2" id="task-notes" name="taskNotes" ></textarea>
                            <label className="mdl-textfield__label" htmlFor="task-notes">Notes...</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <select id="select-list" name="selectList" className="mdl-textfield__input">

                                {this.props.lists.map(function (data, index) {
                                    return (
                                        <option key={index} value={index}>{data.name}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <select id="select-when" name="selectWhen" className="mdl-textfield__input">
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>
                        <button id="add-modal" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            Add
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddNewTodoModal;
