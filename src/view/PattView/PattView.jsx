import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Canvas from '../Canvas/Canvas';
import Doc from '../Doc/Doc';

const Wrapper = styled.div`
    width: 100%;
`;

const WrapperInner = styled.div`
    padding: 2rem;
`;

class PattView extends React.Component {
    constructor(props) {
        super(props);

        this.updateTitle(this.props.currentPatt);
    }

    componentWillUpdate(nextProps) {
        const { currentPatt } = this.props;

        if (currentPatt != nextProps.currentPatt) {
            this.updateTitle(nextProps.currentPatt);
        }
    }

    updateTitle = patt => {
        document.title = patt ? patt.title : "Patt doesn't exist.";
    }

    render() {
        if (this.props.currentComponent) {
            return (
                <Wrapper>
                    <Canvas
                        currentPatt={this.props.currentPatt}
                        currentComponent={this.props.currentComponent}
                        globalHugFn={this.props.globalHugFn}
                    />
                </Wrapper>
            );
        } else if (this.props.currentDoc) {
            return (
                <Wrapper>
                    <Doc
                        currentPatt={this.props.currentPatt}
                        currentDoc={this.props.currentDoc}
                    />
                </Wrapper>
            );
        } else {
            return (
                <Wrapper>
                    <WrapperInner>
                        <h1>Welcome to Patts Library</h1>
                        <p>Click a component or doc on the left</p>
                    </WrapperInner>
                </Wrapper>
            );
        }

    }
}

const mapStateToProps = state => {
    return ({
        currentPatt: state.patt.currentPatt,
        currentComponent: state.patt.currentComponent,
        currentDoc: state.patt.currentDoc,
        globalHugFn: state.patt.hugFn
    });
};

export default connect(mapStateToProps, null)(PattView);