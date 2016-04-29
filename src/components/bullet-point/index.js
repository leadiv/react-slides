import React, { Component, PropTypes } from 'react';

class BulletPoint extends Component {
    render() {
        return (
            <li className="bullet-point">
                {this.props.children}
            </li>
        );
    }
}

export default BulletPoint;


