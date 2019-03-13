import React, {Component} from 'react';
import TaskActionButton from './TaskActionButton'
import TaskItem from './TaskItem'
import '../Css/TaskDetails.css';


class TaskDetails extends Component {
    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }   


    handleKeyDown(event){
        if(event.keyCode === 13 || event.keyCode === 9){
            event.preventDefault();
            event.target.blur();
        }
    }

    render() {
    	if(this.props.index === -1){
    		return(
    					<div className="no-task">None</div>
    			);
    	}
    	else {
        return (
            <div className="task-details">
            	<div className="task-title" index={this.props.index} contentEditable="true" onBlur={this.props.changeTaskTitle} onKeyDown={this.handleKeyDown}>
            			{this.props.taskDetails.title}
            	</div>
            	<div className="action-buttons">
            			<TaskActionButton icon="access_time" text="Add Remainder"/>
            			<TaskActionButton icon="share" text="Share task"/>
            			<TaskActionButton icon="list_alt" text={this.props.listNameOfTask}/>
            	</div>

            	<div className="sub-heading">
            		SUB TASKS
            	</div>
            	<div className="sub-tasks">
            		<TaskItem index={-1}/>
            	</div>
            	<div className="sub-heading">
            		NOTES
            	</div>
            	<div className="notes" index={this.props.index} contentEditable="true" onBlur={this.props.changeTaskNotes} onKeyDown={this.handleKeyDown}>
            			{this.props.taskDetails.notes.length === 0?"Add notes":this.props.taskDetails.notes}
            	</div>
            </div>
        );
    }
    }
}

export default TaskDetails;