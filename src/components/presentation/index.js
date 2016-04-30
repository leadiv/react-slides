import React, { Children, Component, PropTypes, cloneElement } from 'react';

class Presentation extends Component {
    constructor(props) {
        super(props);

        this.navigation = this.navigation.bind(this);
    }

    navigation(e) {
        console.info('Key press up!', e);
    }

    componentDidMount() {
        document && document.addEventListener('keyup', this.navigation);
    }

    render() {
        let order = 0;

        return (
            <div className="presentation">
                {Children.map(this.props.children, (child) => {
                    order += 1;

                    return cloneElement(child, {
                        total: Children.count(this.props.children),
                        current: this.props.current,
                        order 
                    });
                })}
            </div>
        );
    }
}

export default Presentation;



