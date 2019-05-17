import { combineReducers } from 'redux';

import configReducer from './config-reducer';
import pattReducer from './patt-reducer';

export default combineReducers({
    config: configReducer,
    patt: pattReducer
});