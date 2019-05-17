import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 60rem;
    height: 20rem;
    background-color: red;
    color: white;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    background: url('https://source.unsplash.com/random/1600x800');
    position: relative;

    * {
        position: relative;
        z-index: 1;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
        background-color: rgb(0,0,0);
        opacity: ${({ opacity }) => opacity};
    }
`;

const HeaderTitle = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

const HeaderDescription = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
`;

class Header extends React.Component {
    render() {
        return (
            <Wrapper opacity={this.props.opacity || '0.7'}>
                <HeaderTitle>{this.props.title}</HeaderTitle>
                <HeaderDescription>{this.props.description}</HeaderDescription>
            </Wrapper>
        );
    }
}

export default Header;