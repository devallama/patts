import React from 'react';

import styled from 'styled-components';

const themes = {
    default: {
        background: "transparent",
        color: '#000000',
        hoverBackground: 'rgba(0,0,0,0.2)',
        border: '1px solid #d8d8d8'
    },
    primary: {
        background: "rgb(42, 176, 234)",
        color: "black",
        hoverBackground: 'rgba(42, 176, 234, 0.7)'
    },
    secondary: {
        background: "rgb(36, 219, 164)",
        color: "black",
        hoverBackground: 'rgba(36, 219, 164, 0.7)'
    },
    error: {
        background: "rgb(232, 44, 44)",
        color: "white",
        hoverBackground: 'rgba(232, 44, 44, 0.7)'
    },
    warn: {
        background: "rgb(255, 157, 104)",
        color: "black",
        hoverBackground: 'rgba(255, 157, 104, 0.7)'
    },
    success: {
        background: "rgb(111, 237, 115)",
        color: "white",
        hoverBackground: 'rgba(111, 237, 115, 0.7)'
    }
}

const Wrapper = styled.button`
    background: ${({ theme }) => theme.background};
    padding: 1rem 2rem;
    font-size: 1.25rem;
    font-weight: 300;
    border: ${({theme}) => theme.border ? theme.border : 'none'};
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: background 0.3s ease;
    color: ${({ theme }) => theme.color};

    &:hover {
        background: ${({ theme }) => theme.hoverBackground};
    }
`;

class Button extends React.Component {
    render() {
        const theme = themes[this.props.theme] || themes.default;

        return (
            <Wrapper {...this.props} theme={theme}>
                {this.props.children}
            </Wrapper>
        );
    }
}

export default Button;