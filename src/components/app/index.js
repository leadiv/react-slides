import React, { Component, PropTypes } from 'react';
import Slide from '../slide';
import BulletPoint from '../bullet-point';
import Presentation from '../../containers/presentation';

require('./app.scss');

class App extends Component {
    render() {
        return (
            <Presentation>
                {/* Introduction slides */}
                <Slide title="What is ReactJS?">
                    <BulletPoint>A generic way to create UI build blocks -- kind of like legos.</BulletPoint>
                    <BulletPoint>Each building block (component) has exactally what it needs.</BulletPoint>
                </Slide>
                <Slide title="The V in MVC">
                    <BulletPoint>Templating language?</BulletPoint>
                    <BulletPoint>Framework vs library?</BulletPoint>
                    <BulletPoint>Hold over till web components?</BulletPoint>
                </Slide>
                <Slide title="Why Use ReactJS?">
                    <BulletPoint>Thinking in modularity.</BulletPoint>
                    <BulletPoint>Able to work with other frameworks and libraries.</BulletPoint>
                    <BulletPoint>Performance optimizations.</BulletPoint>
                    <BulletPoint>Enforces UI and workflow patterns.</BulletPoint>
                    <BulletPoint>Easy to reason about your UI code and logic.</BulletPoint>
                </Slide>
                <Slide title="Challenges in using ReactJS">
                    <BulletPoint>ReactJS alone can not be used to create an application.</BulletPoint>
                    <BulletPoint>Learning lots of new tools.</BulletPoint>
                    <BulletPoint>Setup and structure.</BulletPoint>
                </Slide>
                {/* Basics */}
                <Slide title="Anatomy of a Component">
                    <BulletPoint>The most basic form is an object with some sort of render function.</BulletPoint>
                    <BulletPoint>TODO: CODE EXAMPLE HERE</BulletPoint>
                </Slide>
            </Presentation>
        );
    }
}

export default App;
