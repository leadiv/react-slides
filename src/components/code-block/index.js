import React, { Component, PropTypes } from 'react';

require('./code-block.scss');

class CodeBlock extends Component {
    constructor(props) {
        super(props);

        this.hasSource = this.hasSource.bind(this);
    }

    hasSource() {
        return this.props.hasOwnProperty('source') && this.props.source !== '';
    }

    componentDidMount() {
        if (this.hasSource()) {
            this.props.fetchSource(this.props.source);
        }
    }

    render() {
        const isError = this.props.sourceCode.isError ? 'is-error' : '';
        const isFetching = this.props.sourceCode.isFetching ? 'is-fetching' : '';
        const classString = `code-block ${isError} ${isFetching}`.trim();

        return (
            <pre className={classString}>
                {this.hasSource() &&
                    this.props.sourceCode.data}
                {this.props.children}
            </pre>
        );
    }
}

CodeBlock.propTypes = {
    source: PropTypes.string,
    sourceCode: PropTypes.object,
    fetchSource: PropTypes.func
};

CodeBlock.defaultProps = {
    sourceCode: {
        data: ''
    }
};

export default CodeBlock;
