import React, {Component} from 'react';
import '../Css/FixedContainer.css'

class FixedContainer extends Component {
    render() {
        return (
            <div className="fixed-container">
                {this.props.children}
            </div>
        );
    }
}

export default FixedContainer;