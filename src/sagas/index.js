import { takeEvery, all } from 'redux-saga/effects';
import { indexDBDel, indexDBSet } from './indexed-db';
import { IDBDelete, IDBSet } from '../modules/indexed-db';
import {
    personalSettingLevelSet, personalSettingImageSet,
    personalSettingReset,
    personalSettingSet, personalSettingTipsChange
} from '../modules/personal-setting';
import {
    changePersonalLevel,
    changePersonalImage,
    changePersonalTips,
    resetPersonalSetting,
    setPersonalSetting
} from './personal-setting';
import {
    personalRecordAllSet,
    personalRecordSet
} from "../modules/personal-record";
import {
    setAllPersonalRecord,
    setPersonalRecord
} from "./personal-record";

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

function* watchPersonalRecordAllSet() {
    yield takeEvery(personalRecordAllSet.type, setAllPersonalRecord);
}

function* watchPersonalRecordSet() {
    yield takeEvery(personalRecordSet.type, setPersonalRecord);
}

function* watchPersonalLevel() {
    yield takeEvery(personalSettingLevelSet.type, changePersonalLevel);
}

function* watchPersonalImage() {
    yield takeEvery(personalSettingImageSet.type, changePersonalImage);
}

function* watchPersonalTips() {
    yield takeEvery(personalSettingTipsChange.type, changePersonalTips);
}

export default function* rootSaga() {
    yield all([
        watchIndexDBSet(),
        watchIndexDBDel(),
        watchPersonalSettingSet(),
        watchPersonalSettingReset(),
        watchPersonalRecordAllSet(),
        watchPersonalRecordSet(),
        watchPersonalLevel(),
        watchPersonalImage(),
        watchPersonalTips()
    ]);
}
