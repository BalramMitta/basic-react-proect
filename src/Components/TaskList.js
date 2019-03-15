import React, { Component } from 'react';
import TasksBar from './TasksBar'
import '../Css/TaskList.css'

class TaskList extends Component {
    render() {
        let component = this;
        return (
            <div className='task-list'>
                {
                    ['Today', 'Tomorrow', 'Upcoming', 'Someday'].map(function (title, i) {
                        return (
                            <TasksBar
                                title={title}
                                list={component.props.list}
                                tasksList={component.props.tasksList}
                                listIndex={component.props.listIndex}
                                selectedTaskIndex={component.props.selectedTaskIndex}
                                openTask={component.props.openTask}
                                handleTaskStatusChange={component.props.handleTaskStatusChange}
                                handleDeleteTask={component.props.handleDeleteTask}
                            />
                        );
                    })
                }

            </div>
        );
    }
}

export default TaskList;