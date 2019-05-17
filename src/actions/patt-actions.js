import { PATT_SET_GLOBAL_HUG_FN, PATTS_SET, PATT_SET_CURRENT, PATT_SET_CURRENT_COMPONENT, PATT_SET_CURRENT_DOC } from './types';

export const pattsSet = patts => dispatch => {
    dispatch({
        type: PATTS_SET,
        data: patts
    });
}

export const pattSetCurrent = patt => dispatch => {
    dispatch({
        type: PATT_SET_CURRENT,
        data: patt
    });
}

export const pattSetCurrentComponent = component => dispatch => {
    dispatch({
        type: PATT_SET_CURRENT_COMPONENT,
        data: component
    });
}

export const pattSetCurrentDoc = doc => dispatch => {
    dispatch({
        type: PATT_SET_CURRENT_DOC,
        data: doc
    });
}

export const pattSetGlobalHugFn = hugFn => dispatch => {
    dispatch({
        type: PATT_SET_GLOBAL_HUG_FN,
        data: hugFn
    });
}