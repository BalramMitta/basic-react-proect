import React, {Component} from 'react';
import '../Css/TaskItem.css'

class TaskItem extends Component {
    render() {
        return (
            <div index={this.props.index} className={this.props.selected === true?"task-item selected":"task-item"} onClick={this.props.openTask}>
                {this.props.data.title}
            </div>
        );
    }
}

export default TaskItem;