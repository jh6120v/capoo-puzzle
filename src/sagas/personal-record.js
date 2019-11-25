import { call, put } from 'redux-saga/effects';
import { spinnerHide, spinnerShow } from "../modules/spinner";
import { get, set } from "idb-keyval";
import { PERSONAL_RECORD } from "../constants";
import { personalRecordAllSet } from "../modules/personal-record";
import { IDBSet } from "../modules/indexed-db";

export function* fetchFirebasePersonalRecord({ payload: { userInfo } }) {
    console.log('fetch firebase personal record.');
    try {
        yield put(spinnerShow());

        yield put(spinnerHide());
    } catch (e) {
        yield put(spinnerHide());
    }
}

export function* fetchLocalPersonalRecord() {
    try {
        yield put(spinnerShow());

        const record = yield call(get, PERSONAL_RECORD);
        if (typeof record !== 'undefined') {
            yield put(personalRecordAllSet({
                ...record
            }));
        }

        console.log('fetch record from local.');

        yield put(spinnerHide());
    } catch (e) {
        yield put(spinnerHide());
    }
}

export function* setAllPersonalRecord({ payload }) {
    try {
        yield put(IDBSet({
            key: PERSONAL_RECORD,
            value: payload
        }))
    } catch (e) {
        console.log(e);
    }
}

export function* setPersonalRecord({ payload }) {
    try {
        console.log(payload);
        const record = yield call(get, PERSONAL_RECORD);
        if (typeof record !== 'undefined') {
            yield put(IDBSet({
                key: PERSONAL_RECORD,
                value: {
                    ...record,
                    [payload.level]: {
                        secs: payload.secs,
                        moves: payload.moves
                    }
                }
            }));
        } else {
            yield put(IDBSet({
                key: PERSONAL_RECORD,
                value: {
                    [payload.level]: {
                        secs: payload.secs,
                        moves: payload.moves
                    }
                }
            }));
        }

        console.log('test record');
    } catch (e) {
        console.log(e);
    }
}
