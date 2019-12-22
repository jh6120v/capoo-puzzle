import { history, store } from '../../../../store';
import Game from './containers/game';
import { injectReducer } from "../../../../store/reducers";
import competitionReducer from '../../modules/competition';

// reducer
injectReducer(history, store, [
    { key: 'competition', reducer: competitionReducer }
]);

export default Game;
