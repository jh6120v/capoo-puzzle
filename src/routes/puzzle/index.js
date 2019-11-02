import { history, store } from '../../store';
import { injectReducer } from '../../store/reducers';
import gridsReducer from './modules/grids';
import Puzzle from './containers/puzzle';

// reducer
injectReducer(history, store, [
    { key: 'grids', reducer: gridsReducer }
]);

export default Puzzle;
