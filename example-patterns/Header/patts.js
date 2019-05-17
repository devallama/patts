import React from 'react';

import { pattsFor } from '../../src/index';

import notes from './notes.md';
import Header from './Header';

export default pattsFor('Header')
    .hug((patt) => <div>Container for component {patt()}</div>)
    .add('Test component default', () => (
        <Header />
    ), true)
    .add('Test component blue', () => (
        <Header />
    ))
    .addDoc('Test doc', notes, { Header: (props) => (<Header />) });