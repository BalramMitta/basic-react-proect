import React, { Component } from 'react';
import '../Css/TaskItem.css'

class TaskItem extends Component {

    render() {
        return (
            <div id="task-item" index={this.props.index} className={(this.props.selected === true ? "task-item selected" : "task-item") + (this.props.data.status ? " task-done" : "")} onClick={this.props.openTask}>

                <div className="round">
                    <input
                        type="checkbox"
                        index={this.props.index}
                        subTaskIndex={this.props.subTaskIndex}
                        id={this.props.subTask ? ("subTask_" + this.props.subTaskIndex) : ("task_" + this.props.index)}
                        checked={this.props.data.status}
                        onClick={this.props.handleTaskStatusChange}
                    />
                    <label
                        htmlFor={this.props.subTask ? ("subTask_" + this.props.subTaskIndex) : ("task_" + this.props.index)}
                    />
                </div>
                <div
                    id="task-item"
                    index={this.props.index}
                    className="task-item-title"
                >
                    {this.props.data.title}
                </div>

                <div className={this.props.data.status ? "task-delete" : "hide"}>
                    <button
                        class="mdl-button mdl-js-button mdl-button--icon"
                        index={this.props.index} subTaskIndex={this.props.subTaskIndex}
                        onClick={this.props.deleteTask}
                    >
                        <i
                            class="material-icons"
                            index={this.props.index}
                            subTaskIndex={this.props.subTaskIndex}
                        >close</i>
                    </button>
                </div>

            </div>
        );
    }
}

export default TaskItem;