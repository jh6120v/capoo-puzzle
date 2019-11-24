import { useEffect, useState } from 'react';

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

const useAuthentication = () => {
    const [authenticated, setAuthenticated] = useState('loading');
    const [userInfo, setUserInfo] = useState(null);

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
                setAuthenticated(true);
                setUserInfo(user);
            } else {
                setAuthenticated(false);
                setUserInfo(null);
            }
        }, function (error) {
            console.log(error);
        });
    }, []);

    return { login, logout, loggedIn: authenticated, userInfo: userInfo };
};

export default useAuthentication;
