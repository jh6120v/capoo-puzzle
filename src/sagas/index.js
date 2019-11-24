import { takeEvery, all } from 'redux-saga/effects';
import { indexDBDel, indexDBSet } from './indexed-db';
import { IDBDelete, IDBSet } from '../modules/indexed-db';
import {
    personalSettingFetch, personalSettingGridsSet, personalSettingImageSet,
    personalSettingReset,
    personalSettingSet, personalSettingTipsChange
} from '../modules/personal-setting';
import {
    changePersonalGrids,
    changePersonalImage,
    changePersonalTips,
    fetchPersonalSetting,
    resetPersonalSetting,
    setPersonalSetting
} from './personal-setting';
import { personalRecordFetch, personalRecordSet } from "../modules/personal-record";
import { fetchPersonalRecord, setPersonalRecord } from "./personal-record";

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

function* watchPersonalRecordFetch() {
    yield takeEvery(personalRecordFetch.type, fetchPersonalRecord);
}

function* watchPersonalRecordSet() {
    yield takeEvery(personalRecordSet.type, setPersonalRecord);
}

function* watchPersonalGrids() {
    yield takeEvery(personalSettingGridsSet.type, changePersonalGrids);
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
        watchPersonalSettingFetch(),
        watchPersonalSettingSet(),
        watchPersonalSettingReset(),
        watchPersonalRecordFetch(),
        watchPersonalRecordSet(),
        watchPersonalGrids(),
        watchPersonalImage(),
        watchPersonalTips()
    ]);
}
