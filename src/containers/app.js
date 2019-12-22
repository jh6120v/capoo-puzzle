import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import rootSaga from '../sagas';
import { store, history, sagaMiddleware } from '../store';
import Routes from '../routes';
import Spinner from '../components/spinner';
import { injectReducer } from '../store/reducers';
import personalSettingReducer, { personalSettingSet } from '../modules/personal-setting';
import spinnerReducer from '../modules/spinner';
import modelReducer from '../modules/model';
import themeReducer, { colorModeSet, toggleSwitchSet } from '../modules/theme';
import authReducer, { authInfoSet } from '../modules/auth-info';
import personalRecordReducer from '../modules/personal-record';
import ResetStyle from '../styles/reset-style';
import GlobalStyle from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../commons/theme';
import useAuthentication from '../commons/hooks/useAuthentication';
import useDarkMode from '../commons/hooks/useDarkMode';
import * as firebase from 'firebase/app';

injectReducer(history, store, [
    { key: 'personal', reducer: personalSettingReducer },
    { key: 'spinner', reducer: spinnerReducer },
    { key: 'model', reducer: modelReducer },
    { key: 'theme', reducer: themeReducer },
    { key: 'auth', reducer: authReducer },
    { key: 'record', reducer: personalRecordReducer }
]);

const App = () => {
    const dispatch = useDispatch();
    const { isShow } = useSelector((state) => state.spinner);
    const personal = useSelector((state) => state.personal);
    const auth = useAuthentication();
    const [darkModeEnabled, colorMode, setter] = useDarkMode();

    useEffect(() => {
        dispatch(authInfoSet({
            ...auth
        }));

        if (auth.loggedIn && auth.loggedIn !== 'loading') {
            const setting = firebase.database().ref('/users/' + auth.loggedIn.uid);
            setting.once('value', function (snapshot) {
                const val = snapshot.val();
                if (val !== null) {
                    // 曾經登入，以 firebase 的資料為主
                    dispatch(personalSettingSet({
                        ...val
                    }));
                } else {
                    // 第一次登入，以本地端的資料為主
                    setting.set({
                        ...personal
                    });
                }
            });
        }
    }, [auth.loggedIn]);

    useEffect(() => {
        dispatch(colorModeSet({
            colorMode: colorMode
        }));

        dispatch(toggleSwitchSet({
            toggle: setter
        }));

        // 為了讓 :active 在 ios 生效
        document.addEventListener('touchstart', () => {
        }, false);
    }, []);

    return (
        <ThemeProvider theme={theme(darkModeEnabled)}>
            <>
                <ResetStyle />
                <GlobalStyle />
                <Spinner show={isShow} />
                <ConnectedRouter history={history}>
                    <Routes {...auth} />
                </ConnectedRouter>
            </>
        </ThemeProvider>
    );
};

sagaMiddleware.run(rootSaga);

export default hot(App);
