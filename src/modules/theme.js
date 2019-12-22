import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@THEME');
const colorModeSet = actionCreator('COLOR_MODE_SET');
const toggleSwitchSet = actionCreator('TOGGLE_SWITCH_SET');

export { colorModeSet, toggleSwitchSet }


// Reducers
const initialState = {
    darkModeEnabled: false,
    colorMode: 'light',
    toggle: () => {}
};

const handlers = {
    [colorModeSet.type]: (state, { payload: { colorMode } }) => ({
        ...state,
        colorMode: colorMode
    }),
    [toggleSwitchSet.type]: (state, { payload: { toggle } }) => ({
        ...state,
        toggle: toggle
    })
};

// create and export as default
const reducers = createReducer(initialState, handlers);
export default reducers;
