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
                tasks: 1
            }, {
                name: "Grocery",
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
            isAddNewTodoModalOpen:false
        }
        this.openAddNewTodoModal=this.openAddNewTodoModal.bind(this);
        this.closeAddNewTodoModal=this.closeAddNewTodoModal.bind(this);
        this.handleMenuBar = this.handleMenuBar.bind(this);
        this.handleChangeList = this.handleChangeList.bind(this);
        this.handleListName = this.handleListName.bind(this);
        this.handleAddNewTask = this.handleAddNewTask.bind(this);
        this.handleTaskTitle = this.handleTaskTitle.bind(this);
    }


    openAddNewTodoModal(event) {
        this.setState({isAddNewTodoModalOpen: true});
    }


    closeAddNewTodoModal(event) {
         if(event.target.id === 'close-modal'){
            this.setState({isAddNewTodoModalOpen: false});
          }
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

    handleTaskTitle(event){
        let todoTasks = this.state.todoTasks.slice();
        let index = event.target.getAttribute("index");
        todoTasks[index].title=event.target.innerHTML;
        this.setState({todoTasks:todoTasks});
    }

    handleAddNewTask(event){
            event.preventDefault();
            const title=event.target.taskTitle.value;
            const notes=event.target.taskNotes.value;
            const listIndex=event.target.selectList.value;
            const when=event.target.selectWhen.value;
            if(title.length !== 0){
                let tasksList = this.state.todoTasks.slice();
                tasksList.push({
                    title: title,
                    listIndex: listIndex,
                    notes: notes,
                    status: false,
                    when: when,
                    reminder: "",
                    subTasks: []
                });
                let lists = this.state.todoLists;
                lists[listIndex].tasks = lists[listIndex].tasks + 1;

                this.setState({ todoLists: lists , todoTasks: tasksList , isAddNewTodoModalOpen:false});
            }
            else {
                event.target.taskTitle.focus();
            }
    }

    render() {
        return (
            <div className="root">
                <Header openAddNewTodoModal={this.openAddNewTodoModal} closeAddNewTodoModal={this.closeAddNewTodoModal} isAddNewTodoModalOpen={this.state.isAddNewTodoModalOpen} handleMenuBar={this.handleMenuBar} lists={this.state.todoLists} handleAddNewTask={this.handleAddNewTask} />
                <MenuBar open={this.state.isMenuBarOpen} lists={this.state.todoLists} changeList={this.handleChangeList}/>
                
                <MainContent fullWidth={!this.state.isMenuBarOpen} todoList={this.state.todoLists} listIndex={this.state.displayListIndex} tasksList={this.state.todoTasks} changeListName={this.handleListName} changeTaskTitle={this.handleTaskTitle}></MainContent>
            </div>
        );
    }
}

export default App;
