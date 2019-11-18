import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';
import { PERSONAL_DEFAULT_SETTING } from '../constants';

// Actions
const actionCreator = createActionCreator('@@PERSONAL_SETTING');
const personalSettingFetch = actionCreator('SETTING_FETCH');
const personalSettingSet = actionCreator('SETTING_SET');
const personalSettingReset = actionCreator('SETTING_RESET');
const personalSettingGridsSet = actionCreator('SETTING_GRIDS_SET');
const personalSettingDarkModeChange = actionCreator('SETTING_DARK_MODE_CHANGE');
const personalSettingTipsChange = actionCreator('SETTING_TIPS_CHANGE');

export {
    personalSettingFetch,
    personalSettingSet,
    personalSettingReset,
    personalSettingGridsSet,
    personalSettingDarkModeChange,
    personalSettingTipsChange
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
    }),
    [personalSettingDarkModeChange.type]: (state) => ({
        ...state,
        darkMode: !state.darkMode
    }),
    [personalSettingTipsChange.type]: (state) => ({
        ...state,
        tips: !state.tips
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
