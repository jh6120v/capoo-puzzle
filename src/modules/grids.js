import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@GRIDS');
const gridsSet = actionCreator('GRIDS_SET');

export { gridsSet };


// Reducers
const initialState = {
    grids: []
};

const handlers = {
    [gridsSet.type]: (state, { payload: { grids } }) => ({
        ...state,
        grids
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
