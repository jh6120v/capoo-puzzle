import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import { store } from './store';
import PWAPrompt from 'react-ios-pwa-prompt';

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
        <PWAPrompt timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
    </Provider>,
    document.getElementById('app')
);

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}
