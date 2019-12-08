import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING } from '../constants';
import { call } from 'redux-saga/effects';

export function* setPersonalSetting({ payload }) {
    try {
        yield call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify(payload));
    } catch (e) {
        console.log(e);
    }
}

export function* resetPersonalSetting() {
    try {
        yield call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify(PERSONAL_DEFAULT_SETTING));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalLevel({ payload }) {
    try {
        const data = yield call([localStorage, 'getItem'], PERSONAL_SETTING);
        const personal = yield call([JSON, 'parse'], data);

        yield call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify({
            ...personal,
            level: payload.level
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalImage({ payload }) {
    try {
        const data = yield call([localStorage, 'getItem'], PERSONAL_SETTING);
        const personal = yield call([JSON, 'parse'], data);

        yield call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify({
            ...personal,
            image: payload.image
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalTips() {
    try {
        const data = yield call([localStorage, 'getItem'], PERSONAL_SETTING);
        const personal = yield call([JSON, 'parse'], data);

        yield call([localStorage, 'setItem'], PERSONAL_SETTING, JSON.stringify({
            ...personal,
            tips: !personal.tips
        }));
    } catch (e) {
        console.log(e);
    }
}
