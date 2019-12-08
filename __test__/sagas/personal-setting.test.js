import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING } from "../../src/constants";
import {
    changePersonalImage,
    changePersonalLevel, changePersonalTips,
    resetPersonalSetting,
    setPersonalSetting
} from "../../src/sagas/personal-setting";

describe('test personal-setting saga.', () => {
    it('success to set personal setting.', () => {
        const fakePayload = { payload: { test: 'test' } };

        testSaga(setPersonalSetting, fakePayload)
            .next()
            .call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify(fakePayload.payload))
            .next()
            .isDone();
    });

    it('fail to set personal setting.', () => {
        const error = new Error('error');
        const fakePayload = { payload: { test: 'test' } };

        return expectSaga(setPersonalSetting, fakePayload)
            .provide([
                [matchers.call.fn(localStorage.setItem), throwError(error)]
            ])
            .dispatch(setPersonalSetting)
            .run();
    });

    it('success to reset personal setting.', () => {
        testSaga(resetPersonalSetting)
            .next()
            .call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify(PERSONAL_DEFAULT_SETTING))
            .next()
            .isDone();
    });

    it('fail to reset personal setting.', () => {
        const error = new Error('error');

        return expectSaga(resetPersonalSetting)
            .provide([
                [matchers.call.fn(localStorage.setItem), throwError(error)]
            ])
            .dispatch(resetPersonalSetting)
            .run();
    });

    it('success to change personal level.', () => {
        const fakePayload = { payload: { level: 'test' } };
        const data = '"{"level":"easy","image":"0","tips":false}"';
        const personal = {
            level: 'easy',
            image: '0',
            tips: false
        };

        testSaga(changePersonalLevel, fakePayload)
            .next()
            .call([localStorage, 'getItem'], PERSONAL_SETTING)
            .next(data)
            .call([JSON, 'parse'], data)
            .next(personal)
            .call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify({
                ...personal,
                level: fakePayload.payload.level
            }))
            .next()
            .isDone();
    });

    it('fail to change personal level.', () => {
        const error = new Error('error');
        const fakePayload = { payload: { level: 'test' } };

        return expectSaga(changePersonalLevel, fakePayload)
            .provide([
                [matchers.call.fn(localStorage.getItem), throwError(error)]
            ])
            .dispatch(changePersonalLevel)
            .run();
    });

    it('success to change personal image. ', () => {
        const fakePayload = { payload: { image: 'test' } };
        const data = '"{"level":"easy","image":"0","tips":false}"';
        const personal = {
            level: 'easy',
            image: '0',
            tips: false
        };

        testSaga(changePersonalImage, fakePayload)
            .next()
            .call([localStorage, 'getItem'], PERSONAL_SETTING)
            .next(data)
            .call([JSON, 'parse'], data)
            .next(personal)
            .call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify({
                ...personal,
                image: fakePayload.payload.image
            }))
            .next()
            .isDone();
    });

    it('fail to change personal image.', () => {
        const error = new Error('error');
        const fakePayload = { payload: { image: 'test' } };

        return expectSaga(changePersonalImage, fakePayload)
            .provide([
                [matchers.call.fn(localStorage.getItem), throwError(error)]
            ])
            .dispatch(changePersonalImage)
            .run();
    });

    it('success to change personal tips.', () => {
        const data = '"{"level":"easy","image":"0","tips":false}"';
        const personal = {
            level: 'easy',
            image: '0',
            tips: false
        };

        testSaga(changePersonalTips)
            .next()
            .call([localStorage, 'getItem'], PERSONAL_SETTING)
            .next(data)
            .call([JSON, 'parse'], data)
            .next(personal)
            .call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify({
                ...personal,
                tips: !personal.tips
            }))
            .next()
            .isDone();
    });

    it('fail to change personal tips.', () => {
        const error = new Error('error');

        return expectSaga(changePersonalTips)
            .provide([
                [matchers.call.fn(localStorage.getItem), throwError(error)]
            ])
            .dispatch(changePersonalTips)
            .run();
    });
});
