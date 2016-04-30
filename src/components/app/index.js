import React, { Component, PropTypes } from 'react';
import Slide from '../slide';
import BulletPoint from '../bullet-point';
import Presentation from '../presentation';

require('./app.scss');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 3
        }
    }

    render() {
        return (
            <Presentation current={this.state.current}>
                <Slide title="What is ReactJS?">
                    <BulletPoint>Hello this will be a simple slide presentation app when done.</BulletPoint>
                    <BulletPoint>A tag is just a tag</BulletPoint>
                </Slide>
                <Slide title="V is for View">
                    <BulletPoint>Hello this will be a simple slide presentation app when done.</BulletPoint>
                    <BulletPoint>A tag is just a tag</BulletPoint>
                </Slide>
                <Slide title="Why Use ReactJS?">
                    <BulletPoint>Thinking in modularity</BulletPoint>
                    <BulletPoint>Flexiblity</BulletPoint>
                </Slide>
            </Presentation>
        );
    }
}

export default App;
