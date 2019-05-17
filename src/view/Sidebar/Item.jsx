import React from 'react';

import styled from 'styled-components';

import MenuList from './List';

const ListItem = styled.li`
    user-select: none;
    cursor: pointer;
`;

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen || false
        };
    }

    toggle = event => {
        if (event.target == event.currentTarget) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    render() {
        let children = this.props.children;

        if (this.props.collapsible && !this.state.isOpen) {
            children = this.props.children.map(child => {
                if (!React.isValidElement(child)) return child;

                return child.type == MenuList
                    ? React.cloneElement(child, { children: null })
                    : React.cloneElement(child)
            });
        }

        return (
            <ListItem onClick={this.toggle}>
                {children}
            </ListItem>
        );
    }
}

export default Item;