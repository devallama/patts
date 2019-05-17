import { CONFIG_SET_REQUIRE_FN } from './types';

export const configSetRequireFn = requireFn => dispatch => {
    dispatch({
        type: CONFIG_SET_REQUIRE_FN,
        data: requireFn
    });
}