import React, {Component} from 'react';
import '../Css/TaskItem.css'

class TaskItem extends Component {
    render() {
        return (
            <div id="task-item" index={this.props.index} className={this.props.selected === true?"task-item selected":"task-item"} onClick={this.props.openTask}>
                  <div className="round">
    					<input type="checkbox" id="checkbox" />
    					<label htmlFor="checkbox"></label>
 				  </div>
 				  <div className="task-item-title"  contentEditable={this.props.index===-1?"true":"false"} >
                    {this.props.data?this.props.data.title:"Add new sub task"}
                 </div>
            </div>
        );
    }
}

export default TaskItem;