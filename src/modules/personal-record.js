import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@PERSONAL_RECORD');
const personalRecordFetchFromLocal = actionCreator('RECORD_FETCH_FROM_LOCAL');
const personalRecordFetchFromFirebase = actionCreator('RECORD_FETCH_FROM_FIREBASE');
const personalRecordAllSet = actionCreator('RECORD_ALL_SET');
const personalRecordSet = actionCreator('RECORD_SET');

export {
    personalRecordFetchFromLocal,
    personalRecordFetchFromFirebase,
    personalRecordAllSet,
    personalRecordSet
}


// Reducers
const initialState = {
    easy: null,
    medium: null,
    hard: null
};

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
