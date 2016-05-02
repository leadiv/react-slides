import React, { Component, PropTypes } from 'react';
import Slide from '../slide';
import BulletPoint from '../bullet-point';
import Presentation from '../../containers/presentation';
import CodeBlock from '../../containers/code-block';

require('./app.scss');

class App extends Component {
    render() {
        return (
            <Presentation>
                {/* Introduction slides */}
                <Slide title="ReactJS"></Slide>
                <Slide title="What is ReactJS?">
                    <BulletPoint>A generic way to create UI build blocks -- kind of like legos.</BulletPoint>
                    <BulletPoint>Each building block (component) has exactly what it needs.</BulletPoint>
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
                <Slide title="Challenges in Using ReactJS">
                    <BulletPoint>ReactJS alone can not be used to create an application.</BulletPoint>
                    <BulletPoint>Learning lots of new tools.</BulletPoint>
                    <BulletPoint>Setup and structure.</BulletPoint>
                </Slide>
                <Slide title="Anatomy of a Component">
                    <CodeBlock source="/src/components/bullet-point/index.js" />
                </Slide>
                <Slide title="Usage of a Component">
                    <BulletPoint>Component Code</BulletPoint>
                    <CodeBlock source="/src/examples/bullet-point-usage.js" />
                    <BulletPoint>Rendered HTML</BulletPoint>
                    <CodeBlock source="/src/examples/bullet-point-rendered.txt" />
                </Slide>
                <Slide title="Isn't That Code Example Doing It Wrong?">
                    <BulletPoint>Why keep HTML, Javascript and CSS all together?</BulletPoint>
                    <BulletPoint>Separation of concerns is around presentation and data management.</BulletPoint>
                    <BulletPoint>Source of truth for the code.</BulletPoint>
                </Slide>
                <Slide title="JSX">
                    <BulletPoint>Is an optional HTML-like syntax to create JavaScript objects.</BulletPoint>
                    <BulletPoint>It is possible to use React's createElement to generate the HTML but JSX tends to be easier to read.</BulletPoint>
                    <BulletPoint>With out JSX:</BulletPoint>
                    <CodeBlock>
                        {`React.createElement(\n    'a',\n    {href: 'https://facebook.github.io/react/', style: {color: '#f00'}, className="red-link"},\n    'Hello!'\n)`}
                    </CodeBlock>
                    <BulletPoint>With JSX:</BulletPoint>
                    <CodeBlock>
                        {`<a className="red-link" href="https://facebook.github.io/react/" style={{color: '#f00'}}>\n    Hello!\n</a>`}
                    </CodeBlock>
                </Slide>
                <Slide title="Component Props">
                    <BulletPoint>Data passed in through parent.</BulletPoint>
                    <BulletPoint>Props can not be changed from within the component.</BulletPoint>
                    <BulletPoint>Similar to HTML attributes.</BulletPoint>
                    <BulletPoint>Default props can be set and types of the props defined</BulletPoint>
                </Slide>
                <Slide title="Props in action">
                    <CodeBlock source="/src/examples/slide.txt" />
                </Slide>
                <Slide title="Component State">
                    <BulletPoint>Private data mangaged by the component.</BulletPoint>
                    <BulletPoint>State can change over time from within the component.</BulletPoint>
                    <BulletPoint>Best practices is to use <em>sparingly</em>.</BulletPoint>
                </Slide>
                <Slide title="State in action">
                    <CodeBlock source="/src/examples/state.txt" />
                </Slide>
                <Slide title="Lifecycle Methods">
                    <BulletPoint>Methods called during the creation, manipulation and deletion of a component.</BulletPoint>
                    <BulletPoint>Mounting: componentWillMount, componentDidMount</BulletPoint>
                    <BulletPoint>Updating: componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate</BulletPoint>
                    <BulletPoint>Unmounting: componentWillUnmount</BulletPoint>
                    <BulletPoint>Mounting methods are useful for setting up custom event listeners.</BulletPoint>
                    <BulletPoint>Updating methods are great at having greater control of how and when the component updates.</BulletPoint>
                    <BulletPoint>Unmounting methods are useful for cleaning up after your component gets removed.</BulletPoint>
                </Slide>
                <Slide title="Render">
                    <BulletPoint>All components must have a render function</BulletPoint>
                    <BulletPoint>Re-render everything makes everything simple.</BulletPoint>
                    <BulletPoint>Virtual DOM helps keeps render fast.</BulletPoint>
                    <BulletPoint>The Virtual DOM is not the same thing as Shadow DOM.</BulletPoint>
                </Slide>
                <Slide title="Component Communication">
                    <BulletPoint>Unidirectional data flow: props flow down and events flow up.</BulletPoint>
                    <BulletPoint>Similar to a Pub/Sub model.</BulletPoint>
                </Slide>
                <Slide title="Questions and More Resources">
                    <BulletPoint><a href="http://blog.andrewray.me/reactjs-for-stupid-people/">React For Stupid People</a></BulletPoint>
                    <BulletPoint><a href="http://blog.andrewray.me/flux-for-stupid-people/">Flux For Stupid People</a></BulletPoint>
                    <BulletPoint><a href="http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome">Removing User Interface Complexity, or Why React is Awesome</a></BulletPoint>
                    <BulletPoint><a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking In React</a></BulletPoint>
                    <BulletPoint><a href="https://facebook.github.io/react/docs/component-specs.html">React Lifecycle Method Documentation</a></BulletPoint>
                    <BulletPoint><a href="https://facebook.github.io/react/docs/getting-started.html">Full Documentation</a></BulletPoint>
                    <BulletPoint><a href="https://github.com/gaearon/react-hot-boilerplate">React Hot Boilerplate</a></BulletPoint>
                    <BulletPoint><a href="https://github.com/leadiv/react-slides">The Repository For This Presentation</a></BulletPoint>
                </Slide>
            </Presentation>
        );
    }
}

export default App;
