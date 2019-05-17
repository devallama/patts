import React, { createElement } from 'react';
import marksy from 'marksy/components';

import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 2rem;
`;

class Doc extends React.Component {
    render() {
        const { currentDoc } = this.props;

        const compile = marksy({
            createElement,
            components: {
                ...currentDoc.docComponents
            }
        });

        const compiled = compile(currentDoc.doc);

        return (
            <Wrapper>
                {compiled.tree}
            </Wrapper>
        );
    }
}

export default Doc;