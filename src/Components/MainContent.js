import React, {Component} from 'react';
import FixedContainer from './FixedContainer'
import '../Css/MainContent.css';
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails"

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTaskIndex: this.getFirstTaskIndex()
        };
        this.getFirstTaskIndex = this.getFirstTaskIndex.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTaskClick = this.handleTaskClick.bind(this);
    }

    getFirstTaskIndex() {
        let tasksList = this.props.tasksList;
        for (let i = 0; i < tasksList.length; i++) {
            if (tasksList[i].status === false) {
                return i;
            }
        }
        return -1;
    }

    handleKeyDown(event){
        if(event.keyCode === 13 || event.keyCode === 9 || event.keyCode === 32){
            event.preventDefault();
            event.target.blur();
        }
    }

    handleTaskClick(event){
            if (event.target.id === "task-item") {
            this.setState({selectedTaskIndex:parseInt(event.target.getAttribute("index"))});
        }
    }

    render() {
        let listDetails;
        let listName;
        if (this.props.listIndex > -1) {
            listDetails = this.props.todoList[this.props.listIndex];
            listName = listDetails.name;
        } else {
            listDetails = this.props.todoList;
            listName = "All Tasks";
        }
        
        let taskDetails=[];
        let listNameOfTask="";
        let setStateTaskIndex = false;
        if(this.getFirstTaskIndex() !== -1){
            taskDetails=this.props.tasksList[this.state.selectedTaskIndex];
            setStateTaskIndex = true;
            if(taskDetails === undefined){
                taskDetails=this.props.tasksList[this.getFirstTaskIndex()];
                this.setStateTaskIndex = false;
            }
            listNameOfTask=this.props.todoList[taskDetails.listIndex].name;
        }

        return (
            <div className={this.props.fullWidth ? 'main-content full-width' : 'main-content'}>
                <div className="list-name" contentEditable={this.props.listIndex < 0 ? "false" : "true"}
                     index={this.props.listIndex} onBlur={this.props.changeListName} onKeyDown={this.handleKeyDown}>{listName}</div>
                <div className="h-scroll">
                    <FixedContainer>
                        <TaskList list={this.props.todoList} tasksList={this.props.tasksList}
                                  listIndex={this.props.listIndex} selectedTaskIndex={this.state.selectedTaskIndex} openTask={this.handleTaskClick}  handleTaskStatusChange={this.props.handleTaskStatusChange} handleDeleteTask={this.props.handleDeleteTask}/>
                    </FixedContainer>
                    <FixedContainer>
                        <TaskDetails handleDeleteSubTask={this.props.handleDeleteSubTask} addNewSubTask={this.props.addNewSubTask} changeTaskNotes={this.props.changeTaskNotes} index={this.setStateTaskIndex?this.state.selectedTaskIndex:this.getFirstTaskIndex()} taskDetails={taskDetails} changeTaskTitle={this.props.changeTaskTitle} listNameOfTask={listNameOfTask} handleSubTaskStatusChange={this.props.handleSubTaskStatusChange}/>
                    </FixedContainer>
                </div>
            </div>
        );
    }
}

export default MainContent;