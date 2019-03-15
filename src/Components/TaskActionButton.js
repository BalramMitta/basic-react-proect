import React, { Component } from 'react';
import '../Css/TaskActionButton.css'

class TaskActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <button className="task-action-button">
                <div className="button-icon">
                    <i className="material-icons">
                        {this.props.icon}
                    </i>
                </div>
                <div className="button-text">
                    {this.props.text}
                </div>
            </button>
        );
    }
}

export default TaskActionButton;
