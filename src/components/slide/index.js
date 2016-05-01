import React, { Component, PropTypes } from 'react';

require('./slide.scss');

class Slide extends Component {
    render() {
        return (
            this.props.isActive &&
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

