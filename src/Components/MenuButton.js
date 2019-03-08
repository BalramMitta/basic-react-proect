import React, { Component } from 'react';
import "../Css/MenuButton.css"
import {
    IconButton
} from "react-mdl"

class MenuButton extends Component {
    render() {
        return (
            <div className="menu">
                <IconButton name="menu" className="menu-button" onClick={this.props.handleMenuBar}/>
            </div>
        );
    }
}

export default MenuButton;
