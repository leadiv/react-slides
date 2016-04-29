import React, { Component, PropTypes } from 'react';
import Slide from '../slide';
import BulletPoint from '../bullet-point';

require('./app.scss');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 1,
            total: 2
        }
    }

    render() {
        return (
            <div className="presentation">
                <Slide title="What is ReactJS?" order="1" total={this.state.total} current={this.state.current}>
                    <BulletPoint>Hello this will be a simple slide presentation app when done.</BulletPoint>
                    <BulletPoint>A tag is just a tag</BulletPoint>
                </Slide>
                <Slide title="V is for View" order="2" total={this.state.total} current={this.state.current}>
                    <BulletPoint>Hello this will be a simple slide presentation app when done.</BulletPoint>
                    <BulletPoint>A tag is just a tag</BulletPoint>
                </Slide>
            </div>
        );
    }
}

export default App;
