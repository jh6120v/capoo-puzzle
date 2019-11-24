import { call, put } from 'redux-saga/effects';
import { spinnerHide, spinnerShow } from "../modules/spinner";
import { get } from "idb-keyval";
import { PERSONAL_RECORD } from "../constants";
import { personalRecordAllSet } from "../modules/personal-record";
import { IDBSet } from "../modules/indexed-db";

export function* fetchPersonalRecord() {
    try {
        yield put(spinnerShow());

        // 優先於 firebase 取資料

        // 再於 indexedDB 取資料
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

export function* setPersonalRecord({ payload }) {
    try {
        console.log(payload);
        const record = yield call(get, PERSONAL_RECORD);
        if (typeof record !== 'undefined') {
            yield put(IDBSet({
                key: PERSONAL_RECORD,
                value: {
                    ...record,
                    [payload.level] : {
                        secs: payload.secs,
                        moves: payload.moves
                    }
                }
            }));
        } else {
            yield put(IDBSet({
                key: PERSONAL_RECORD,
                value: {
                    [payload.level] : {
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