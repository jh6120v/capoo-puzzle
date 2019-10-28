import { takeEvery, all } from 'redux-saga/effects';
import { indexDBDel, indexDBSet } from './indexed-db';
import { IDBDelete, IDBSet } from '../modules/indexed-db';
import {
    personalSettingReset,
    personalSettingSet
} from '../modules/personal-setting';
import {
    resetPersonalSetting,
    setPersonalSetting
} from './personal-setting';

function* watchIndexDBSet() {
    yield takeEvery(IDBSet.type, indexDBSet);
}

function* watchIndexDBDel() {
    yield takeEvery(IDBDelete.type, indexDBDel);
}

function* watchPersonalSettingSet() {
    yield takeEvery(personalSettingSet.type, setPersonalSetting);
}

function* watchPersonalSettingReset() {
    yield takeEvery(personalSettingReset.type, resetPersonalSetting);
}

export default function* rootSaga() {
    yield all([
        watchIndexDBSet(),
        watchIndexDBDel(),
        watchPersonalSettingSet(),
        watchPersonalSettingReset()
    ]);
}
