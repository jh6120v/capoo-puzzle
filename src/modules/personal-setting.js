import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';
import { PERSONAL_DEFAULT_SETTING } from '../constants';

// Actions
const actionCreator = createActionCreator('@@PERSONAL_SETTING');
const personalSettingSet = actionCreator('SETTING_SET');
const personalSettingReset = actionCreator('SETTING_RESET');
const personalSettingGridsSet = actionCreator('SETTING_GRIDS_SET');

export {
    personalSettingSet, personalSettingReset, personalSettingGridsSet
};


// Reducers
const initialState = PERSONAL_DEFAULT_SETTING;

const handlers = {
    [personalSettingSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [personalSettingReset.type]: (state) => ({
        ...state,
        ...PERSONAL_DEFAULT_SETTING
    }),
    [personalSettingGridsSet.type]: (state, { payload }) => ({
        ...state,
        grids: payload.grids
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
