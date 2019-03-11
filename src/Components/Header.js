import React, { Component } from 'react';
import MenuButton from "./MenuButton.js"
import AddTodoButton from "./AddTodoButton.js"
import "../Css/Header.css";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="header">
                <MenuButton handleMenuBar={this.props.handleMenuBar}/>
                <AddTodoButton lists={this.props.lists}></AddTodoButton>
            </div>
        );
    }
}

export default Header;
