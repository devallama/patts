import React from 'react';

import styled from 'styled-components';

import Button from '../Buttons/Button';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background-color: #2a2b2a;
    color: white;
    font-size: 1.2em;
`;

const Column = styled.div`
    width: 30%;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
`;

class Footer extends React.Component {
    render() {
        return (
            <Wrapper {...this.props}>
                <Column>
                    <h3>Links</h3>
                    <List>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                        <a href="/">Link 4</a>
                    </List>
                </Column>
                <Column>
                    <h3>Sign-up to our newsletter</h3>
                    <Button theme="secondary">Sign-up</Button>
                </Column>
                <Column>
                    <h3>This is a footer.</h3>
                    <p>Copyright 2019</p>
                </Column>
            </Wrapper>
        );
    }
}

export default Footer;