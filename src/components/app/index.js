import React, { Component, PropTypes } from 'react';
import Slide from '../slide';
import BulletPoint from '../bullet-point';
import Presentation from '../../containers/presentation';

require('./app.scss');

class App extends Component {
    render() {
        return (
            <Presentation>
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
