import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING } from '../constants';

export function* setPersonalSetting({ payload }) {
    try {
        yield localStorage.setItem(PERSONAL_SETTING, JSON.stringify(payload));
    } catch (e) {
        console.log(e);
    }
}

export function* resetPersonalSetting() {
    try {
        yield localStorage.setItem(PERSONAL_SETTING, JSON.stringify(PERSONAL_DEFAULT_SETTING));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalLevel({ payload }) {
    try {
        const personal = yield JSON.parse(localStorage.getItem(PERSONAL_SETTING));

        yield localStorage.setItem(PERSONAL_SETTING, JSON.stringify({
            ...personal,
            level: payload.level
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalImage({ payload }) {
    try {
        const personal = yield JSON.parse(localStorage.getItem(PERSONAL_SETTING));

        yield localStorage.setItem(PERSONAL_SETTING, JSON.stringify({
            ...personal,
            image: payload.image
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalTips() {
    try {
        const personal = yield JSON.parse(localStorage.getItem(PERSONAL_SETTING));

        yield localStorage.setItem(PERSONAL_SETTING, JSON.stringify({
            ...personal,
            tips: !personal.tips
        }));
    } catch (e) {
        console.log(e);
    }
}
