
import React, { Component, PropTypes } from 'react'; /** ES6 import **/

require('./bullet-point.scss');                      /** webpack require **/

class BulletPoint extends Component {                /** ES6 Classes **/
    render() {                                       /** React render **/
        return (
            <li className="bullet-point">
                {this.props.children}
            </li>
        );
    }
}

BulletPoint.PropTypes = {
    children: PropTypes.node
}

export default BulletPoint;                         /** ES6 export **/
