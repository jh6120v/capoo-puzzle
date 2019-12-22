import { createActionCreator } from '../../../commons/utils';
import { createReducer } from '../../../store/reducers';

// Actions
const actionCreator = createActionCreator('@@COMPETITION');
const resetCompetition = actionCreator('RESET_COMPETITION');
const setRoomId = actionCreator('SET_ROOM_ID');
const setCompetition = actionCreator('SET_COMPETITION');
const removeRoomId = actionCreator('REMOVE_ROOM_ID');
const setPlayer = actionCreator('SET_PLAYER');
const setLevel = actionCreator('SET_LEVEL');
const setTips = actionCreator('SET_TIPS');
const setImage = actionCreator('SET_IMAGE');

export { resetCompetition, setRoomId, setCompetition, removeRoomId, setPlayer, setLevel, setTips, setImage };


// Reducers
const initialState = {
    roomId: null,
    player: 2,
    level: 'easy',
    cols: 3,
    image: '0',
    tips: false,
    users: {},
    grids: [],
    layoutPositionList: []
};

const handlers = {
    [resetCompetition.type]: (state) => ({
        ...state,
        ...initialState
    }),
    [setRoomId.type]: (state, { payload: { roomId } }) => ({
        ...state,
        roomId: roomId
    }),
    [setCompetition.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [removeRoomId.type]: (state) => ({
        ...state,
        roomId: null
    }),
    [setPlayer.type]: (state, { payload }) => ({
        ...state,
        player: payload
    }),
    [setLevel.type]: (state, { payload }) => ({
        ...state,
        level: payload
    }),
    [setTips.type]: (state, { payload }) => ({
        ...state,
        tips: payload
    }),
    [setImage.type]: (state, { payload }) => ({
        ...state,
        image: payload
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
