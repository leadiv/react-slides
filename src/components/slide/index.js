import React, { Component, PropTypes } from 'react';

require('./slide.scss');

class Slide extends Component {

    constructor(props) {
        super(props);
        this.isViewable = this.isViewable.bind(this);
    }

    isViewable() {
        return this.props.current === +this.props.order;
    }

    render() {
        return (
            this.isViewable() &&
                <div className="slide">
                    <header className="slide__header">
                        <h1 className="slide__title">{this.props.title}</h1>
                    </header>

                    <ul>
                        {this.props.children}
                    </ul>

                    <footer className="slide__footer">
                        {this.props.order} / {this.props.total}
                    </footer>
                </div>
        );
    }
}

export default Slide;

