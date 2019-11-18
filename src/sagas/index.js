import { takeEvery, all } from 'redux-saga/effects';
import { indexDBDel, indexDBSet } from './indexed-db';
import { IDBDelete, IDBSet } from '../modules/indexed-db';
import {
    personalSettingDarkModeChange,
    personalSettingFetch,
    personalSettingReset,
    personalSettingSet, personalSettingTipsChange
} from '../modules/personal-setting';
import {
    changePersonalEnableDarkMode, changePersonalTips,
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

function* watchPersonalDarkMode() {
    yield takeEvery(personalSettingDarkModeChange.type, changePersonalEnableDarkMode);
}

function* watchPersonalTips() {
    yield takeEvery(personalSettingTipsChange.type, changePersonalTips);
}

export default function* rootSaga() {
    yield all([
        watchIndexDBSet(),
        watchIndexDBDel(),
        watchPersonalSettingFetch(),
        watchPersonalSettingSet(),
        watchPersonalSettingReset(),
        watchPersonalDarkMode(),
        watchPersonalTips()
    ]);
}
