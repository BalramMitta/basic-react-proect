import React, { Component } from 'react';
import MenuItem from './MenuItem.js'
import '../Css/MenuBar.css';

class MenuBar extends Component {
    render() {

        let noIndex = -1;
        let props = this.props;
        return (
            <div className={this.props.open === true ? 'sidebar open' : 'sidebar close'}>
                <MenuItem head>My Lists</MenuItem>
                <MenuItem
                    changeList={props.changeList}
                    index={noIndex}
                >All Tasks</MenuItem>

                {this.props.lists.map(function (data, index) {
                    return (
                        <MenuItem
                            changeList={props.changeList}
                            key={index}
                            index={index}
                        >{data.name}</MenuItem>
                    )
                }
                )}
            </div>
        );
    }
}

export default MenuBar;
