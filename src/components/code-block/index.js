import React, { Component, PropTypes } from 'react';

class CodeBlock extends Component {
    render() {
        return (
            <pre>
                {this.props.children}
            </pre>
        );
    }
}

export default CodeBlock;



