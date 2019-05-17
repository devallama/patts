import React from 'react';

import { pattsFor } from 'patts';

import howTo from './howTo.md';
import Button from './Button';

export default pattsFor('Button')
    // .hug((patt) => <div>Container for component {patt()}</div>)
    .add('Button default', () => (
        <Button>Button text</Button>
    ))
    .add('Button primary', () => (
        <Button theme="primary">Button text</Button>
    ))
    .add('Button secondary', () => (
        <Button theme="secondary">Button text</Button>
    ))
    .add('Button warn', () => (
        <Button theme="warn">Button text</Button>
    ))
    .add('Button error', () => (
        <Button theme="error">Button text</Button>
    ))
    .add('Button success', () => (
        <Button theme="success">Button text</Button>
    ))
    .addDoc('Button usage', howTo, { Button: (props) => (<Button {...props}>Button text</Button>) });