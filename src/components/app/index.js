import React, { Component, PropTypes } from 'react';
import Slide from '../slide';
import BulletPoint from '../bullet-point';

require('./app.scss');

class App extends Component {
    render() {
        return (
            <div className="presentation">
                <Slide title="Intro" order="1" total="1">
                    <BulletPoint>Hello this will be a simple slide presentation app when done.</BulletPoint>
                    <BulletPoint>A tag is just a tag</BulletPoint>
                </Slide>
            </div>
        );
    }
}

export default App;
