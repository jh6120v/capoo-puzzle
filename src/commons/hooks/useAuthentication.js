import { useEffect, useState } from 'react';

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

const useAuthentication = () => {
    const [authenticated, setAuthenticated] = useState('loading');

    function login() {
        auth.signInWithPopup(provider);
    }

    function logout() {
        auth
            .signOut()
            .then(function () {
                // Sign-out successful.
            })
            .catch(function (error) {
                // An error happened.
            });
    }

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            console.log(user);
            if (user) {
                setAuthenticated(user);
            } else {
                setAuthenticated();
            }
        }, function (error) {
            console.log(error);
        });
    }, []);

    return { login, logout, loggedIn: authenticated };
};

export default useAuthentication;
