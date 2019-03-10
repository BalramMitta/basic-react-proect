import React, {Component} from 'react';
import TasksBar from './TasksBar'
import '../Css/TaskList.css'

class TaskList extends Component {
    render() {
        return (
            <div className='task-list'>
                <TasksBar title='Today' list={this.props.list} tasksList={this.props.tasksList}
                          listIndex={this.props.listIndex}/>
                <TasksBar title='Tomorrow' list={this.props.list} tasksList={this.props.tasksList}
                          listIndex={this.props.listIndex}/>
                <TasksBar title='Upcoming' list={this.props.list} tasksList={this.props.tasksList}
                          listIndex={this.props.listIndex}/>
                <TasksBar title='Someday' list={this.props.list} tasksList={this.props.tasksList}
                          listIndex={this.props.listIndex}/>
            </div>
        );
    }
}

export default TaskList;