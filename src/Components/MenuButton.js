import React, { Component } from 'react';
import {
    IconButton
} from "react-mdl";
import "../Css/MenuButton.css"

class MenuButton extends Component {
    render() {
        return (
            <div className="menu">
                <IconButton
                    name="menu"
                    className="menu-button"
                    onClick={this.props.handleMenuBar}
                />
            </div>
        );
    }
}

export default MenuButton;
