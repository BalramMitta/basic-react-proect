import React, { Component } from 'react';
import MenuButton from "./MenuButton.js"
import AddTodoButton from "./AddTodoButton.js"
import "../Css/Header.css";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <MenuButton handleMenuBar={this.props.handleMenuBar} />
                <AddTodoButton
                    openAddNewTodoModal={this.props.openAddNewTodoModal}
                    closeAddNewTodoModal={this.props.closeAddNewTodoModal}
                    isAddNewTodoModalOpen={this.props.isAddNewTodoModalOpen}
                    handleAddNewTask={this.props.handleAddNewTask}
                    lists={this.props.lists}
                />
            </div>
        );
    }
}

export default Header;
