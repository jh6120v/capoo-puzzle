import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@AUTH_INFO');
const authInfoSet = actionCreator('AUTH_INFO_SET');

export { authInfoSet }


// Reducers
const initialState = {
    login: () => {},
    logout: () => {},
    loggedIn: false,
    userInfo: null
};

const handlers = {
    [authInfoSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    })
};

// create and export as default
const reducers = createReducer(initialState, handlers);
export default reducers;
