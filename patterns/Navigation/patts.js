import React from 'react';

import { pattsFor } from 'patts';

import howTo from './howTo.md';
import Jumbotron from '../Jumbotron/Jumbotron';
import Button from '../Buttons/Button';

export default pattsFor('Navigation')
    .add('Navigation', () => (
        <Jumbotron>
            <h2>
                Keep in the know
            </h2>
            <p>
                Sign up to our newsletter and keep up to date with the latest updates to Patts Library.
            </p>
            <Button theme="secondary">Sign up</Button>
        </Jumbotron>
    ))
    .addDoc('Navigation usage', howTo, {
        Jumbotron: (props) => (<Jumbotron {...props}>
            <h2>
                Keep in the know
            </h2>
            <p>
                Sign up to our newsletter and keep up to date with the latest updates to Patts Library.
            </p>
            <Button theme="secondary">Sign up</Button>
        </Jumbotron>)
    });