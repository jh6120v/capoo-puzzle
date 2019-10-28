import { call, put } from 'redux-saga/effects';
import { get } from 'idb-keyval';
import { IDBSet } from '../modules/indexed-db';
import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING } from '../constants';

export function* setPersonalSetting({ payload }) {
    try {
        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: payload
        }));
        console.log('test');
    } catch (e) {
        console.log(e);
    }
}

export function* resetPersonalSetting() {
    try {
        const defaultSetting = yield {
            ...PERSONAL_DEFAULT_SETTING
        };

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: defaultSetting
        }));
    } catch (e) {
        console.log(e);
    }
}
