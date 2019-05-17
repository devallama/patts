import React from 'react';

import { pattsFor } from 'patts';

import howTo from './howTo.md';
import Card from './Card';
import Button from '../Buttons/Button';

export default pattsFor('Card')
    .add('Modal', () => (
        <Card>
            <h2>
                Keep in the know
            </h2>
            <p>
                Sign up to our newsletter and keep up to date with the latest updates to Patts Library.
            </p>
            <Button theme="secondary">Sign up</Button>
        </Card>
    ))
    .addDoc('Modal usage', howTo, {
        Card: (props) => (<Card {...props}>
            <h2>
                Keep in the know
        </h2>
            <p>
                Sign up to our newsletter and keep up to date with the latest updates to Patts Library.
        </p>
            <Button theme="secondary">Sign up</Button>
        </Card>)
    });