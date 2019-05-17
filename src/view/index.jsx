import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../core/store';

import Router from '../router/Router';

class App extends React.Component {
    render() {
        return (
            <main>
                <Router />
            </main>
        )
    }
}

export default () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );
}