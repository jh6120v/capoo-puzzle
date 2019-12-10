import { createActionCreator } from '../../../commons/utils';
import { createReducer } from '../../../store/reducers';

// Actions
const actionCreator = createActionCreator('@@COMPETITION');
const setRoomId = actionCreator('SET_ROOM_ID');
const setCompetition = actionCreator('SET_COMPETITION');
const removeRoomId = actionCreator('REMOVE_ROOM_ID');

export { setRoomId, setCompetition, removeRoomId };


// Reducers
const initialState = {
    roomId: null,
    player: 2,
    level: 'easy',
    image: '0',
    tips: false
};

const handlers = {
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
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
