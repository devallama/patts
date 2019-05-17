import { PATTS_SET } from '../actions/types';

export default () => {
    return ({ dispatch, getState }) => next => action => {
        if (action.type == PATTS_SET) {
            const requireFn = getState().config.requireFn;
            const patts = getState().patt.patts;

            if (module.hot) {
                requireFn(patts);
            }
        }

        return next(action);
    }
}