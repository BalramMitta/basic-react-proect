import React, { Component } from 'react';
import TaskItem from './TaskItem'
import '../Css/TasksBar.css'

class TasksBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTasks: true
        };
        this.handleShowTasks = this.handleShowTasks.bind(this);
    }


    handleShowTasks() {
        this.setState({ showTasks: this.state.showTasks ? false : true });
    }

    render() {
        let whenTitle = this.props.title;
        let listIndex = this.props.listIndex;
        let selectedTaskIndex = this.props.selectedTaskIndex;
        let openTask = this.props.openTask;
        let handleTaskStatusChange = this.props.handleTaskStatusChange;
        let deleteTask = this.props.handleDeleteTask;
        return (
            <div className='tasks-bar'>
                <div className='tasks-time-title' onClick={this.handleShowTasks}>
                    {this.props.title}
                </div>
                <div className={this.state.showTasks === true ? "tasks show" : "tasks hide"}>
                    {this.props.tasksList.map(function (data, index) {
                        if ((listIndex === -1 || data.listIndex === listIndex) && data.when === whenTitle) {
                            return (
                                <TaskItem 
                                    handleTaskStatusChange={handleTaskStatusChange} 
                                    openTask={openTask} 
                                    selected={selectedTaskIndex === index ? true : false} 
                                    key={index} 
                                    index={index} 
                                    data={data} 
                                    deleteTask={deleteTask} 
                                />
                            )
                        } else {
                            return ('');
                        }
                    }
                    )}
                </div>
            </div>
        );
    }
}

export default TasksBar;