import { takeEvery, all } from 'redux-saga/effects';
import { indexDBDel, indexDBSet } from './indexed-db';
import { IDBDelete, IDBSet } from '../modules/indexed-db';
import {
    personalSettingFetchFromFirebase,
    personalSettingFetchFromLocal, personalSettingGridsSet, personalSettingImageSet,
    personalSettingReset,
    personalSettingSet, personalSettingTipsChange
} from '../modules/personal-setting';
import {
    changePersonalGrids,
    changePersonalImage,
    changePersonalTips, fetchFirebasePersonalSetting,
    fetchLocalPersonalSetting,
    resetPersonalSetting,
    setPersonalSetting
} from './personal-setting';
import {
    personalRecordAllSet,
    personalRecordFetchFromFirebase,
    personalRecordFetchFromLocal,
    personalRecordSet
} from "../modules/personal-record";
import {
    fetchFirebasePersonalRecord,
    fetchLocalPersonalRecord,
    setAllPersonalRecord,
    setPersonalRecord
} from "./personal-record";

function* watchIndexDBSet() {
    yield takeEvery(IDBSet.type, indexDBSet);
}

function* watchIndexDBDel() {
    yield takeEvery(IDBDelete.type, indexDBDel);
}

function* watchPersonalSettingFetchFromFirebase() {
    yield takeEvery(personalSettingFetchFromFirebase.type, fetchFirebasePersonalSetting)
}

function* watchPersonalSettingFetchFromLocal() {
    yield takeEvery(personalSettingFetchFromLocal.type, fetchLocalPersonalSetting)
}

function* watchPersonalSettingSet() {
    yield takeEvery(personalSettingSet.type, setPersonalSetting);
}

function* watchPersonalSettingReset() {
    yield takeEvery(personalSettingReset.type, resetPersonalSetting);
}

function* watchPersonalRecordFetchFromFirebase() {
    yield takeEvery(personalRecordFetchFromFirebase.type, fetchFirebasePersonalRecord);
}

function* watchPersonalRecordFetchFromLocal() {
    yield takeEvery(personalRecordFetchFromLocal.type, fetchLocalPersonalRecord);
}

function* watchPersonalRecordAllSet() {
    yield takeEvery(personalRecordAllSet.type, setAllPersonalRecord);
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
        watchPersonalSettingFetchFromFirebase(),
        watchPersonalSettingFetchFromLocal(),
        watchPersonalSettingSet(),
        watchPersonalSettingReset(),
        watchPersonalRecordFetchFromFirebase(),
        watchPersonalRecordFetchFromLocal(),
        watchPersonalRecordAllSet(),
        watchPersonalRecordSet(),
        watchPersonalGrids(),
        watchPersonalImage(),
        watchPersonalTips()
    ]);
}
