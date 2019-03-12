import React, {Component} from 'react';
import '../Css/TaskDetails.css';

class TaskDetails extends Component {
    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }   


    handleKeyDown(event){
        if(event.keyCode === 13 || event.keyCode === 9 || event.keyCode === 32){
            event.preventDefault();
            event.target.blur();
        }
    }

    render() {
    	console.log(this.props.taskDetails);
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
            </div>
        );
    }
    }
}

export default TaskDetails;