import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Menu from './Menu';

const Wrapper = styled.div`
    height: 100%;
    width: 15%;
    min-width: 15rem;
    background-color: #f4f7fc;
`;

const Logo = styled.figure`
    text-align: center;
    display: flex;
    margin: 1.5rem;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

const LogoImg = styled.img`
    width: auto;
    height: 3rem;
    background-color: white;
    border-radius: 50%;
    padding: 0.5rem;
`;

const LogoTitle = styled.h2`
    margin: 1rem 0 1rem 1rem;
    word-wrap: nowrap;
`;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <Logo>
                    <LogoImg src="/icons/patts-logo.svg" alt="Patts Logo" />
                    <LogoTitle>Patts Library</LogoTitle>
                </Logo>
                <Menu patts={this.props.patts} />
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return ({
        patts: state.patt.patts
    });
};

export default connect(mapStateToProps, null)(Sidebar);