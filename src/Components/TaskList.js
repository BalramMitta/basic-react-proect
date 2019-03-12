import React, {Component} from 'react';
import TasksBar from './TasksBar'
import '../Css/TaskList.css'

class TaskList extends Component {
    render() {
        return (
            <div className='task-list'>
                <TasksBar title='Today' list={this.props.list} tasksList={this.props.tasksList}
                          listIndex={this.props.listIndex} selectedTaskIndex={this.props.selectedTaskIndex} openTask={this.props.openTask}/>
                <TasksBar title='Tomorrow' list={this.props.list} tasksList={this.props.tasksList}
                          listIndex={this.props.listIndex} selectedTaskIndex={this.props.selectedTaskIndex} openTask={this.props.openTask}/>
                <TasksBar title='Upcoming' list={this.props.list} tasksList={this.props.tasksList}
                          listIndex={this.props.listIndex} selectedTaskIndex={this.props.selectedTaskIndex} openTask={this.props.openTask}/>
                <TasksBar title='Someday' list={this.props.list} tasksList={this.props.tasksList}
                          listIndex={this.props.listIndex} selectedTaskIndex={this.props.selectedTaskIndex} openTask={this.props.openTask}/>
                          
            </div>
        );
    }
}

export default TaskList;