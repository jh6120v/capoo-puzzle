import { expectSaga } from 'redux-saga-test-plan';
import { takeEvery } from 'redux-saga/effects';
import rootSage from '../../src/sagas';
import {
    personalSettingImageSet,
    personalSettingLevelSet,
    personalSettingReset,
    personalSettingSet, personalSettingTipsChange
} from '../../src/modules/personal-setting';
import {
    changePersonalImage,
    changePersonalLevel, changePersonalTips,
    resetPersonalSetting,
    setPersonalSetting
} from '../../src/sagas/personal-setting';
import { personalRecordAllSet, personalRecordSet } from "../../src/modules/personal-record";
import { setAllPersonalRecord, setPersonalRecord } from "../../src/sagas/personal-record";

describe('test entry of sagas.', () => {
    it('root saga must resolve all.', () => expectSaga(rootSage)
        .provide([
            [takeEvery(personalSettingSet.type, setPersonalSetting)],
            [takeEvery(personalSettingReset.type, resetPersonalSetting)],
            [takeEvery(personalRecordAllSet.type, setAllPersonalRecord)],
            [takeEvery(personalRecordSet.type, setPersonalRecord)],
            [takeEvery(personalSettingLevelSet.type, changePersonalLevel)],
            [takeEvery(personalSettingImageSet.type, changePersonalImage)],
            [takeEvery(personalSettingTipsChange.type, changePersonalTips)]
        ])
        .run());
});
