import { configure } from '../src/index';

const patts = require.context('./', true, /\patts\.jsx?$/);

configure(patts);