import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import rootSaga from '../sagas';
import { store, history, sagaMiddleware } from '../store';
import Routes from '../routes';
import Spinner from '../components/spinner';
import { injectReducer } from '../store/reducers';
import personalSettingReducer from '../modules/personal-setting';
import spinnerReducer from '../modules/spinner';
import headerTitleReducer from '../modules/header';
import modelReducer from '../modules/model';
import { Container, Wrapper } from '../styles/layout-style';
import Header from '../components/header';

injectReducer(history, store, [
    { key: 'personal', reducer: personalSettingReducer },
    { key: 'spinner', reducer: spinnerReducer },
    { key: 'header', reducer: headerTitleReducer },
    { key: 'model', reducer: modelReducer },
]);

const App = () => {
    const { isShow } = useSelector((state) => state.spinner);
    const header = useSelector((state) => state.header);

    useEffect(() => {
        // 為了讓 :active 在 ios 生效
        document.addEventListener('touchstart', () => {
        }, false);
    }, []);

    return (
        <>
            <Spinner show={isShow} />
            <ConnectedRouter history={history}>
                <Wrapper>
                    <Header {...header} />
                    <Container>
                        <Routes />
                    </Container>
                </Wrapper>
            </ConnectedRouter>
        </>
    );
};

sagaMiddleware.run(rootSaga);

export default hot(App);
