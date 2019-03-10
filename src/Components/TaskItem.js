import React, {Component} from 'react';
import '../Css/TaskItem.css'

class TaskItem extends Component {
    render() {
        return (
            <div className='task-item'>
                {this.props.data.title}
            </div>
        );
    }
}

export default TaskItem;