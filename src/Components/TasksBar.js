import React, {Component} from 'react';
import '../Css/TasksBar.css'
import TaskItem from './TaskItem'

class TasksBar extends Component {
    render() {
        let whenTitle = this.props.title;
        let listIndex = this.props.listIndex;
        return (
            <div className='tasks-bar'>
                <div className='tasks-time-title'>
                    {this.props.title}
                </div>
                <div className='tasks'>
                    {this.props.tasksList.map(function (data, index) {
                        if(listIndex === -1 && data.when === whenTitle){
                            return (
                                <TaskItem key={index} index={index} data={data}/>
                            )
                        } else if(data.listIndex === listIndex && data.when === whenTitle) {
                            return (
                                <TaskItem key={index} index={index} data={data}/>
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