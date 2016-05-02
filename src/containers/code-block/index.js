import React, { Children, Component, PropTypes, cloneElement } from 'react';
import CodeBlock from '../../components/code-block';
import { connect } from 'react-redux';
import { startFetching, doneFetching, errorFetching } from '../../actions/fetching';
import axios from 'axios';

function fetchSource(source) {
    return (dispatch) => {
        dispatch(startFetching(source));
        axios.get(source, {reponseType: 'text'}).then((response) => {
            return dispatch(doneFetching(source, response.data));
        }).catch((response) => {
            if (response instanceof Error) {
                return dispatch(errorFetching(source, response.stack));
            } else {
                return dispatch(errorFetching(source, ''));
            }
        });
    }
}

function mapStateToProps(state, ownProps) {
    const { source } = ownProps;

    return {
        sourceCode: source &&
                    state.fetching &&
                    state.fetching[source] || {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSource: (source) => dispatch(fetchSource(source))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeBlock);
