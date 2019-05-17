import React from 'react';

import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0.5rem;
    margin: 0;

    li > & {
        padding-left: 1rem;
    }
`;


class MenuList extends React.Component {
    render() {
        return (
            <List>
                {this.props.children}
            </List>
        );
    }
}

export default MenuList;