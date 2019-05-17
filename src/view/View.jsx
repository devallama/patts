import React from 'react';

import styled from 'styled-components';

import Sidebar from './Sidebar/Sidebar';
import PattView from './PattView/PattView';

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

class View extends React.Component {
    render() {
        return (
            <Wrapper>
                <Sidebar />
                <PattView />
            </Wrapper>
        );
    }
}

export default View;