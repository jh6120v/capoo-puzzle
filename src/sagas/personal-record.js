import { call } from 'redux-saga/effects';
import { PERSONAL_RECORD } from '../constants';

export function* setAllPersonalRecord({ payload }) {
    try {
        yield call([localStorage, 'setItem'], PERSONAL_RECORD, JSON.stringify(payload));
    } catch (e) {
        console.log(e);
    }
}

export function* setPersonalRecord({ payload }) {
    try {
        const data = yield call([localStorage, 'getItem'], PERSONAL_RECORD);
        const record = yield call([JSON, 'parse'], data);
        if (record !== null) {
            yield call([localStorage, 'setItem'], PERSONAL_RECORD, JSON.stringify({
                ...record,
                [payload.level]: {
                    secs: payload.secs,
                    moves: payload.moves,
                    time: payload.time
                }
            }));
        } else {
            yield call([localStorage, 'setItem'], PERSONAL_RECORD, JSON.stringify({
                [payload.level]: {
                    secs: payload.secs,
                    moves: payload.moves,
                    time: payload.time
                }
            }));
        }
    } catch (e) {
        console.log(e);
    }
}
