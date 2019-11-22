import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import rootSaga from '../sagas';
import { store, history, sagaMiddleware } from '../store';
import Routes from '../routes';
import Spinner from '../components/spinner';
import { injectReducer } from '../store/reducers';
import personalSettingReducer, { personalSettingFetch } from '../modules/personal-setting';
import spinnerReducer from '../modules/spinner';
import headerTitleReducer from '../modules/header';
import modelReducer from '../modules/model';
import themeReducer, { colorModeSet, toggleSwitchSet } from '../modules/theme';
import { Container, Wrapper } from '../styles/layout-style';
import Header from '../components/header';
import ResetStyle from '../styles/reset-style';
import GlobalStyle from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../commons/utils';
import useAuthentication from '../commons/hooks/useAuthentication';
import useDarkMode from '../commons/hooks/useDarkMode';

injectReducer(history, store, [
    { key: 'personal', reducer: personalSettingReducer },
    { key: 'spinner', reducer: spinnerReducer },
    { key: 'header', reducer: headerTitleReducer },
    { key: 'model', reducer: modelReducer },
    { key: 'theme', reducer: themeReducer }
]);

const App = () => {
    const dispatch = useDispatch();
    const { isShow } = useSelector((state) => state.spinner);
    const header = useSelector((state) => state.header);
    const auth = useAuthentication();

    const [darkModeEnabled, colorMode, setter] = useDarkMode() ;

    useEffect(() => {
        dispatch(personalSettingFetch());

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
                    <Wrapper>
                        <Header {...header} {...auth} />
                        <Container>
                            <Routes />
                        </Container>
                    </Wrapper>
                </ConnectedRouter>
            </>
        </ThemeProvider>
    );
};

sagaMiddleware.run(rootSaga);

export default hot(App);
