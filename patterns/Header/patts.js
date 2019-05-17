import React from 'react';

import { pattsFor } from 'patts';

import howTo from './howTo.md';
import Header from './Header';

export default pattsFor('Header')
    .add('Header', () => (
        <Header title="Cool header." />
    ))
    .add('Header with title and description', () => (
        <Header title="Cool header." description="With a description" />
    ))
    .addDoc('Header usage', howTo, { Header: (props) => (<Header {...props} />) });