import React from 'react';

import { pattsFor } from 'patts';

import howTo from './howTo.md';
import Footer from './Footer';

export default pattsFor('Footer')
    .add('Footer', () => (
        <Footer />
    ))
    .addDoc('Footer usage', howTo, { Footer: (props) => (<Footer {...props} />) });