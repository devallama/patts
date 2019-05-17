import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../core/history'

import View from '../view/View';

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    render={(props) => <View {...props} title="component" />}
                />
            </Switch>
        </Router>
    );
};