import { useEffect, useState } from 'react';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const useAuthentication = () => {
    const [authenticated, setAuthenticated] = useState('loading');

    function login() {
        auth.signInWithPopup(provider);
    }

    function logout(callback = null) {
        auth
            .signOut()
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
