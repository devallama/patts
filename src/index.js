import { getConfig } from './actions/config-actions';
import { getPatts } from './actions/patt-actions';
import './App';

export { default as configure } from './core/configure';
export { default as pattsFor } from './core/pattsFor';

// console.log(getConfig);

// const config = getConfig();
// const patts = getPatts();

// console.log(config);

// config.requireFn(patts);

// if (module.hot) {
//     config.requireFn(patts);
// }

// view();