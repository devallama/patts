import React from 'react';
import { configure } from 'patts';
import GlobalStyle from './GlobalStyle';

const patts = require.context('./', true, /\patts\.jsx?$/);
const pattFn = pattFn => <React.Fragment>{pattFn()}<GlobalStyle /></React.Fragment>;

configure(patts, pattFn);