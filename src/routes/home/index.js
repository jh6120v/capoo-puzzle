import { history, store } from '../../store';
import { injectReducer } from '../../store/reducers';
import gridsReducer from '../../modules/grids';
import Home from './containers/home';

// reducer
injectReducer(history, store, [
    { key: 'grids', reducer: gridsReducer }
]);

export default Home;
