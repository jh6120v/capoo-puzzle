import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import { store } from './store';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        }).catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}
