import { createActionCreator } from '../../../commons/utils';
import { createReducer } from '../../../store/reducers';

// Actions
const actionCreator = createActionCreator('@@PUZZLE');
const preparedOn = actionCreator('PREPARED_ON');
const preparedOff = actionCreator('PREPARED_OFF');
const gridsSet = actionCreator('GRIDS_SET');
const totalWithSet = actionCreator('TOTAL_WIDTH_SET');
const layoutPositionListSet = actionCreator('LAYOUT_POSITION_LIST_SET');

export { preparedOn, preparedOff, gridsSet, totalWithSet, layoutPositionListSet };


// Reducers
const initialState = {
    prepared: true,
    grids: [],
    width: 300,
    layoutPositionList: []
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
    }),
    [totalWithSet.type]: (state, {payload}) => ({
        ...state,
        width: payload
    }),
    [layoutPositionListSet.type]: (state, {payload}) => {
        console.log(payload);

        return {
            ...state,
            layoutPositionList: payload
        };
    }
};

const reducers = createReducer(initialState, handlers);
export default reducers;
