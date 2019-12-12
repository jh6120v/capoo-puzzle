import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING } from '../constants';

// Actions
const actionCreator = createActionCreator('@@HEADER');
const headerVisibleToggle = actionCreator('VISIBLE_TOGGLE');
const headerTitleDefault = actionCreator('TITLE_DEFAULT');
const headerTitleSet = actionCreator('TITLE_SET');
const linkActSet = actionCreator('LINK_ACT_SET');
const prevLinkActGoBack = actionCreator('PREV_LINK_ACT_GO_BACK');
const prevLinkActClose = actionCreator('PREV_LINK_ACT_CLOSE');
const nextLinkActSetting = actionCreator('NEXT_LINK_ACT_SETTING');

export {
    headerVisibleToggle,
    headerTitleDefault,
    headerTitleSet,
    linkActSet,
    prevLinkActGoBack,
    prevLinkActClose,
    nextLinkActSetting,
};


// Reducers
const initialState = {
    visible: true,
    title: 'Capoo Puzzle',
    prev: null,
    next: FUNC_SETTING
};

const handlers = {
    [headerVisibleToggle.type]: (state) => ({
        ...state,
        visible: !state.visible
    }),
    [headerTitleDefault.type]: (state) => ({
        ...state,
        ...initialState
    }),
    [headerTitleSet.type]: (state, { payload }) => ({
        ...state,
        title: payload.title
    }),
    [linkActSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [prevLinkActGoBack.type]: (state) => ({
        ...state,
        prev: FUNC_GO_BACK,
        next: null
    }),
    [prevLinkActClose.type]: (state) => ({
        ...state,
        prev: FUNC_CLOSE,
        next: null
    }),
    [nextLinkActSetting.type]: (state) => ({
        ...state,
        prev: null,
        next: FUNC_SETTING
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
