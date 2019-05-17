import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

import styled, { StyleSheetManager } from 'styled-components';

const StyledFrame = styled(Frame)`
    border: none;
    display: block;
    width: 100%;
    height: 80vh;
    padding: 2rem 2rem;
    box-sizing: border-box;
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
            wrapperGlobalHugFn = patt => globalHugFn(patt);
        }

        return (
            <div>
                <StyledFrame>
                    <FrameContextConsumer>
                        {frameContext => (
                            <StyleSheetManager target={frameContext.document.head}>
                                <React.Fragment>
                                    {wrapperGlobalHugFn(() => wrapperHugFn(() => <Component />))}
                                </React.Fragment>
                            </StyleSheetManager>
                        )}
                    </FrameContextConsumer>
                </StyledFrame>
            </div>
        );
    }
}

export default Canvas;