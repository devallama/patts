import { CONFIG_SET_REQUIRE_FN } from '../actions/types';

const initialState = {
    requireFn: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONFIG_SET_REQUIRE_FN:
            return {
                ...state,
                requireFn: action.data
            };
        default:
            return state;
    }
}