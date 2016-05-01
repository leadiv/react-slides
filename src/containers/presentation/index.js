import React, { Children, Component, PropTypes, cloneElement } from 'react';
import SingleSlidePresentation from '../../components/single-slide-presentation';
import { connect } from 'react-redux';
import { addSlide, nextSlide, previousSlide, lastSlide, firstSlide } from '../../actions/slide';

const KEY_END = 35;
const KEY_HOME = 36;
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_UP = 38;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_DOWN = 40;
const KEY_BACK_TICK = 192;

function presentationCommands(e) {
    return (dispatch) => {
        switch (e.keyCode || e.which) {
            case KEY_ARROW_LEFT:
                return dispatch(previousSlide());
 
            case KEY_ARROW_RIGHT:
                return dispatch(nextSlide());

            case KEY_HOME:
                return dispatch(firstSlide());

            case KEY_END:
                return dispatch(lastSlide());
        }
    }
}

function mapStateToProps(state) {
    return {
        current: state.slide && state.slide.current
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: (e) => dispatch(presentationCommands(e)),
        addSlide: () => dispatch(addSlide())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleSlidePresentation);
