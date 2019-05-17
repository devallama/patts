import React from 'react';

import styled from 'styled-components';

import MenuList from './List';

const Item = styled.li`
    user-select: none;
    cursor: pointer;
`;

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen || true
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
            children = this.props.children.map((child, index) => {
                if (!React.isValidElement(child)) return child;

                return child.type == MenuList
                    ? React.cloneElement(child, { children: null, key: index })
                    : React.cloneElement(child, { key: index })
            });
        }

        return (
            <Item onClick={this.toggle}>
                {children}
            </Item>
        );
    }
}

export default ListItem;