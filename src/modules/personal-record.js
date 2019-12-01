import { createActionCreator, initialStateFromLocalStorage } from '../commons/utils';
import { createReducer } from '../store/reducers';
import { PERSONAL_DEFAULT_RECORD, PERSONAL_RECORD } from "../constants";

// Actions
const actionCreator = createActionCreator('@@PERSONAL_RECORD');
const personalRecordAllSet = actionCreator('RECORD_ALL_SET');
const personalRecordSet = actionCreator('RECORD_SET');

export {
    personalRecordAllSet,
    personalRecordSet
}


// Reducers
const initialState = initialStateFromLocalStorage(PERSONAL_RECORD, PERSONAL_DEFAULT_RECORD);

const handlers = {
    [personalRecordAllSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [personalRecordSet.type]: (state, { payload: { level, secs, moves, time } }) => ({
        ...state,
        [level]: {
            secs: secs,
            moves: moves,
            time: time
        }
    })
};

// create and export as default
const reducers = createReducer(initialState, handlers);
export default reducers;
