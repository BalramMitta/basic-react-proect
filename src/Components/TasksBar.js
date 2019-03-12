import React, {Component} from 'react';
import '../Css/TasksBar.css'
import TaskItem from './TaskItem'

class TasksBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTasks: false
        };
        this.handleShowTasks = this.handleShowTasks.bind(this);
    }


    handleShowTasks(){
        this.setState({showTasks:this.state.showTasks?false:true});
    }

    render() {
        let whenTitle = this.props.title;
        let listIndex = this.props.listIndex;
        let selectedTaskIndex = this.props.selectedTaskIndex;
        let openTask = this.props.openTask;
        let handleShowTasks = this.handleShowTasks;
        return (
            <div className='tasks-bar'>
                <div className='tasks-time-title' onClick={this.handleShowTasks}>
                    {this.props.title}
                </div>
                <div className={this.state.showTasks === true?"tasks show":"tasks hide"}>
                    {this.props.tasksList.map(function (data, index) {
                        if( ( listIndex === -1 || data.listIndex === listIndex ) && data.when === whenTitle){
                            return (
                                <TaskItem openTask={openTask} selected={selectedTaskIndex === index?true:false} key={index} index={index} data={data}/>
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