import { useEffect, useState } from 'react';
import * as firebase from 'firebase';

const useAuthentication = () => {
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const [authenticated, setAuthenticated] = useState('loading');

    function login(provider) {
        const providerSupport = provider === 'google' ? googleProvider : facebookProvider;

        auth.signInWithPopup(providerSupport)
            .then(() => {

            })
            .catch(() => {

            });
    }

    function logout(callback = null) {
        auth.signOut()
            .then(function () {
                if (callback !== null) {
                    callback()
                }
            })
            .catch(function (error) {
                // An error happened.
            });
    }

    useEffect(() => {
        auth.onAuthStateChanged(function (userData) {
            if (userData) {
                setAuthenticated(userData);
            } else {
                setAuthenticated(null);
            }
        }, function (error) {
            console.log(error);
        });
    }, []);

    return { login, logout, loggedIn: authenticated };
};

export default useAuthentication;
