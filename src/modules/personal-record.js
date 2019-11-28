import { createActionCreator, initialStateFromLocalStorage } from '../commons/utils';
import { createReducer } from '../store/reducers';
import { PERSONAL_RECORD } from "../constants";

// Actions
const actionCreator = createActionCreator('@@PERSONAL_RECORD');
const personalRecordAllSet = actionCreator('RECORD_ALL_SET');
const personalRecordSet = actionCreator('RECORD_SET');

export {
    personalRecordAllSet,
    personalRecordSet
}


// Reducers
const initialState = initialStateFromLocalStorage(PERSONAL_RECORD, {
    easy: null,
    medium: null,
    hard: null
});

const handlers = {
    [personalRecordAllSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [personalRecordSet.type]: (state, { payload: { level, secs, moves } }) => ({
        ...state,
        [level]: {
            secs: secs,
            moves: moves
        }
    })
};

// create and export as default
const reducers = createReducer(initialState, handlers);
export default reducers;
