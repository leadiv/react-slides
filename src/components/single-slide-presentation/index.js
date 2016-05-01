import React, { Children, Component, PropTypes, cloneElement } from 'react';

class SingleSlidePresentation extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.current !== this.props.current;
    }

    componentDidMount() {
        document && document.addEventListener('keyup', this.props.navigate);

        Children.forEach(this.props.children, () => (this.props.addSlide()));
    }

    componentWillUnmount() {
        document && document.removeEventListener('keyup', this.props.navigate);
    }

    render() {
        let order = 0;

        return (
            <div className="presentation">
                {Children.map(this.props.children, (child) => {
                    const isSlide = child && child.type && child.type.name === 'Slide';

                    order += 1;

                    return isSlide ? cloneElement(child, {
                        total: Children.count(this.props.children),
                        isActive: order === this.props.current,
                        order
                    }) : child;
                })}
            </div>
        );
    }
}

export default SingleSlidePresentation;
