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
                listIndex: 0,
                notes: "ASAP",
                status: false,
                when: "Today",
                reminder: "",
                subTasks: []
            },{
                title: "work",
                listIndex: 1,
                notes: "ASAP",
                status: false,
                when: "Today",
                reminder: "",
                subTasks: []
            }],
            displayListIndex:-1,
            isMenuBarOpen: true,
            addNewTaskModalOpen:false 
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
        let index = parseInt(event.target.getAttribute("index"));
        console.log(index);
        if(index === -1){
            console.log("aaa");
        }
        this.setState({displayListIndex:index});
    }
    handleListName(event){
        let todoList = this.state.todoLists.slice();
        let index = event.target.getAttribute("index");
        todoList[index].name=event.target.innerHTML;
        this.setState({todoLists:todoList});
    }

    handleAddNewTaskModal(){
        this.setState({addNewTaskModalOpen:this.state.addNewTaskModalOpen?'false':'true'})
    }

    render() {
        console.log(this.state.isMenuBarOpen);
        return (
            <div className="root">
                <Header handleMenuBar={this.handleMenuBar} addNewTaskModalOpen={this.state.addNewTaskModalOpen} lists={this.state.todoLists}/>
                <MenuBar open={this.state.isMenuBarOpen} lists={this.state.todoLists} changeList={this.handleChangeList}/>
                
                <MainContent fullWidth={!this.state.isMenuBarOpen} todoList={this.state.todoLists} listIndex={this.state.displayListIndex} tasksList={this.state.todoTasks} changeListName={this.handleListName}></MainContent>
            </div>
        );
    }
}

export default App;
