import { createActionCreator, initialStateFromLocalStorage } from '../commons/utils';
import { createReducer } from '../store/reducers';
import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING } from '../constants';

// Actions
const actionCreator = createActionCreator('@@PERSONAL_SETTING');
const personalSettingSet = actionCreator('SETTING_SET');
const personalSettingReset = actionCreator('SETTING_RESET');
const personalSettingLevelSet = actionCreator('SETTING_LEVEL_SET');
const personalSettingImageSet = actionCreator('SETTING_IMAGE_SET');
const personalSettingTipsChange = actionCreator('SETTING_TIPS_CHANGE');

export {
    personalSettingSet,
    personalSettingReset,
    personalSettingLevelSet,
    personalSettingImageSet,
    personalSettingTipsChange
};


// Reducers
const initialState = initialStateFromLocalStorage(PERSONAL_SETTING, PERSONAL_DEFAULT_SETTING);

const handlers = {
    [personalSettingSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [personalSettingReset.type]: (state) => ({
        ...state,
        ...PERSONAL_DEFAULT_SETTING,
        image: '0'
    }),
    [personalSettingLevelSet.type]: (state, { payload: { level } }) => ({
        ...state,
        level: level
    }),
    [personalSettingImageSet.type]: (state, { payload: { image } }) => ({
        ...state,
        image: image
    }),
    [personalSettingTipsChange.type]: (state) => ({
        ...state,
        tips: !state.tips
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
