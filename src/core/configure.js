import store from './store';
import current from './current';
import history from './history';
import { pattSetGlobalHugFn, pattsSet } from '../actions/patt-actions';
import { configSetRequireFn } from '../actions/config-actions';

const requireAll = requireContext => {
    requireContext.keys().forEach(k => requireContext);
}

export default (patts, hugFn = null, requireFn = requireAll) => {
    if (!patts) {
        throw new Error('No patterns given.');
    }

    if (hugFn != null && typeof hugFn != 'function') {
        throw new Error('Hug function must be a function.');
    }

    if (typeof requireFn != 'function') {
        throw new Error('Require function must be a function.');
    }

    store.dispatch(pattsSet(patts));
    store.dispatch(configSetRequireFn(requireFn));
    hugFn && store.dispatch(pattSetGlobalHugFn(hugFn));

    current(history.location);
}