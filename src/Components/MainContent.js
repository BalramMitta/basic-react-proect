import React, {Component} from 'react';
import FixedContainer from './FixedContainer'
import '../Css/MainContent.css';
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails"

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskIndex: 0
        };
        this.getFirstTaskIndex = this.getFirstTaskIndex.bind(this);
    }

    getFirstTaskIndex() {
        // let tasksList = this.props.tasksList;
        // for (let i = 0; i < tasksList.size(); i++) {
        //     if (tasksList[i].status === "pending") {
        //         return i;
        //     }
        // }
        // return -1;
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
                     index={this.props.listIndex} onKeyUp={this.props.changeListName}>{listName}</div>
                <div className="h-scroll">
                    <FixedContainer>
                        <TaskList listDetails={listDetails} tasksList={this.props.tasksList}
                                  listIndex={this.props.listId}/>
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