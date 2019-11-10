import { history, store } from '../../store';
import { injectReducer } from '../../store/reducers';
import puzzleReducer from './modules/puzzle';
import Puzzle from './containers/puzzle';

// reducer
injectReducer(history, store, [
    { key: 'puzzle', reducer: puzzleReducer }
]);

export default Puzzle;
