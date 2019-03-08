import React, { Component } from 'react';
import '../Css/MenuBar.css';

class MenuItem extends Component {
    render() {

        return (
            <div className={this.props.head?"menuhead":"menuitem"} index={this.props.index} onClick={this.props.changeList}>
                {this.props.children}
            </div>
        );
    }
}

export default MenuItem;
