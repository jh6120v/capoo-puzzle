import { history, store } from '../../store';
import { injectReducer } from '../../store/reducers';
import competitionReducer from './modules/competition';
import Competition from './containers/competition';

// reducer
injectReducer(history, store, [
    { key: 'competition', reducer: competitionReducer }
]);

export default Competition;
