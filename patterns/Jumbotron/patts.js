import React from 'react';

import { pattsFor } from 'patts';

import howTo from './howTo.md';
import Jumbotron from './Jumbotron';
import Button from '../Buttons/Button';

export default pattsFor('Jumbotron')
    .add('Jumbotron', () => (
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
    .addDoc('Jumbotron usage', howTo, { Jumbotron: (props) => (<Jumbotron {...props}>
        <h2>
            Keep in the know
        </h2>
        <p>
            Sign up to our newsletter and keep up to date with the latest updates to Patts Library.
        </p>
        <Button theme="secondary">Sign up</Button>
    </Jumbotron>) });