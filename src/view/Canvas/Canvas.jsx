import React from 'react';
import Frame from 'react-frame-component';

import styled from 'styled-components';

const StyledFrame = styled(Frame)`
    border: none;
`;

class Canvas extends React.Component {
    render() {
        const { currentPatt, currentComponent, globalHugFn } = this.props;

        let Component = currentComponent.component;

        const wrapperFn = (patt) => patt();

        let wrapperHugFn = wrapperFn;
        let wrapperGlobalHugFn = wrapperFn;

        if (typeof currentPatt.hugFn == 'function') {
            wrapperHugFn = patt => currentPatt.hugFn(patt);
        }

        if (typeof globalHugFn == 'function') {
            wrapperGlobalHugFn = globalHugFn(baseComponent);
        }

        return (
            <div>
                <StyledFrame>
                    {wrapperGlobalHugFn(() => wrapperHugFn(() => <Component />))}
                </StyledFrame>
            </div>
        );
    }
}

export default Canvas;