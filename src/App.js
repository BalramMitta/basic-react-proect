import React, {Component} from 'react';
import Header from "./Components/Header";
import './App.css';
import MenuBar from "./Components/MenuBar";
import MainContent from "./Components/MainContent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: [{
                name: "Personal",
                tasks: 1
            }, {
                name: "Work",
                tasks: 0
            }
            ],
            todoTasks: [{
                title: "Eat",
                listId: 0,
                notes: "ASAP",
                status: "pending",
                when: "today",
                reminder: "",
                subTasks: []
            }],
            displayListIndex:-1,
            isMenuBarOpen: false
        };
        this.handleMenuBar = this.handleMenuBar.bind(this);
        this.handleChangeList = this.handleChangeList.bind(this);
        this.handleListName = this.handleListName.bind(this);
    }

    handleMenuBar() {
        this.setState({
            isMenuBarOpen: this.state.isMenuBarOpen ? false : true
        })
    }

    handleChangeList(event){
        let index = event.target.getAttribute("index");
        this.setState({displayListIndex:index});
    }
    handleListName(event){
        let todoList = this.state.todoLists.slice();
        let index = event.target.getAttribute("index");
        todoList[index].name=event.target.innerHTML;
        this.setState({todoLists:todoList});
    }


    render() {
        console.log(this.state.isMenuBarOpen);
        return (
            <div className="root">
                <Header handleMenuBar={this.handleMenuBar}/>
                <MenuBar open={this.state.isMenuBarOpen} lists={this.state.todoLists} changeList={this.handleChangeList}/>
                <MainContent fullWidth={!this.state.isMenuBarOpen} todoList={this.state.todoLists} listIndex={this.state.displayListIndex} tasksList={this.state.todoTasks} changeListName={this.handleListName}></MainContent>
            </div>
        );
    }
}

export default App;
