import React, {Component} from 'react';
import FixedContainer from './FixedContainer'
import '../Css/MainContent.css';
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails"

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskIndex: this.getFirstTaskIndex()
        };
        this.getFirstTaskIndex = this.getFirstTaskIndex.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    getFirstTaskIndex() {
        let tasksList = this.props.tasksList;
        for (let i = 0; i < tasksList.size; i++) {
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

        return (
            <div className={this.props.fullWidth ? 'main-content full-width' : 'main-content'}>
                <div className="list-name" contentEditable={this.props.listIndex < 0 ? "false" : "true"}
                     index={this.props.listIndex} onBlur={this.props.changeListName} onKeyDown={this.handleKeyDown}>{listName}</div>
                <div className="h-scroll">
                    <FixedContainer>
                        <TaskList list={this.props.todoList} tasksList={this.props.tasksList}
                                  listIndex={this.props.listIndex}/>
                    </FixedContainer>
                    <FixedContainer>
                        <TaskDetails index={this.state.taskIndex} tasksList={this.props.tasksList}/>
                    </FixedContainer>
                </div>
            </div>
        );
    }
}

export default MainContent;