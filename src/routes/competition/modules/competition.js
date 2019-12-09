import { createActionCreator } from '../../../commons/utils';
import { createReducer } from '../../../store/reducers';

// Actions
const actionCreator = createActionCreator('@@COMPETITION');
const setRoomId = actionCreator('SET_ROOM_ID');
const removeRoomId = actionCreator('REMOVE_ROOM_ID');

export { setRoomId, removeRoomId };


// Reducers
const initialState = {
    roomId: null
};

const handlers = {
    [setRoomId.type]: (state, { payload: { roomId } }) => ({
        ...state,
        roomId: roomId
    }),
    [removeRoomId.type]: (state) => ({
        ...state,
        roomId: null
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
