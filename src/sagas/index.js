import { takeEvery, all } from 'redux-saga/effects';
import { indexDBDel, indexDBSet } from './indexed-db';
import { IDBDelete, IDBSet } from '../modules/indexed-db';
import {
    personalSettingFetch,
    personalSettingReset,
    personalSettingSet
} from '../modules/personal-setting';
import {
    fetchPersonalSetting,
    resetPersonalSetting,
    setPersonalSetting
} from './personal-setting';

function* watchIndexDBSet() {
    yield takeEvery(IDBSet.type, indexDBSet);
}

function* watchIndexDBDel() {
    yield takeEvery(IDBDelete.type, indexDBDel);
}

function* watchPersonalSettingFetch() {
    yield takeEvery(personalSettingFetch.type, fetchPersonalSetting)
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
        watchPersonalSettingFetch(),
        watchPersonalSettingSet(),
        watchPersonalSettingReset()
    ]);
}
