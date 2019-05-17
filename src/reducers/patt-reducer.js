import { PATTS_SET, PATT_SET_CURRENT, PATT_SET_CURRENT_COMPONENT, PATT_SET_CURRENT_DOC, PATT_SET_GLOBAL_HUG_FN } from '../actions/types';

const initialState = {
    patts: null,
    hugFn: null,
    currentPatt: null,
    currentComponent: null,
    currentDoc: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PATTS_SET:
            return {
                ...state,
                patts: action.data
            };
        case PATT_SET_CURRENT:
            return {
                ...state,
                currentPatt: action.data
            };
        case PATT_SET_CURRENT_COMPONENT:
            return {
                ...state,
                currentComponent: action.data
            };
        case PATT_SET_CURRENT_DOC:
            return {
                ...state,
                currentDoc: action.data
            };
        case PATT_SET_GLOBAL_HUG_FN:
            return {
                ...state,
                hugFn: action.data
            };
        default:
            return state;
    }
}