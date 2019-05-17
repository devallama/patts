import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 20rem;
    background: url('${({ backgroundImage }) => backgroundImage ? backgroundImage : 'https://source.unsplash.com/random/1600x800'}');
    background-position: center center;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 2rem;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.5em;
    position: relative;
    font-weight: 300;

    h2 {
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    p {
        margin-bottom: 2.5rem;
        max-width: 30rem;
        line-height: 1.8;
    }

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
        opacity: ${({ opacity }) => opacity || 0.5};
    }
`;

class Jumbotron extends React.Component {
    render() {
        return (
            <Wrapper {...this.props}>
                {this.props.children}
            </Wrapper>
        );
    }
}

export default Jumbotron;