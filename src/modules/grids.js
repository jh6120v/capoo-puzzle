import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@GRIDS');
const preparedOn = actionCreator('PREPARED_ON');
const preparedOff = actionCreator('PREPARED_OFF');
const gridsSet = actionCreator('GRIDS_SET');

export { preparedOn, preparedOff, gridsSet };


// Reducers
const initialState = {
    prepared: true,
    grids: []
};

const handlers = {
    [preparedOn.type]: (state) => ({
        ...state,
        prepared: true
    }),
    [preparedOff.type]: (state) => ({
        ...state,
        prepared: false
    }),
    [gridsSet.type]: (state, { payload: { grids } }) => ({
        ...state,
        grids
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
