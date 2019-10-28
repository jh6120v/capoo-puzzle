import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@GRIDS');
const previewGridsSet = actionCreator('PREVIEW_GRIDS_SET');
const gridsSet = actionCreator('GRIDS_SET');

export { previewGridsSet, gridsSet };


// Reducers
const initialState = {
    previewGrids: [],
    grids: []
};

const handlers = {
    [previewGridsSet.type]: (state, { payload: { grids } }) => ({
        ...state,
        previewGrids: grids
    }),
    [gridsSet.type]: (state, { payload: { grids } }) => ({
        ...state,
        grids
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
