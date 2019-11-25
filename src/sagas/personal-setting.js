import { call, put } from 'redux-saga/effects';
import { get } from 'idb-keyval';
import { IDBSet } from '../modules/indexed-db';
import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING } from '../constants';
import { personalSettingReset, personalSettingSet } from '../modules/personal-setting';
import { spinnerHide, spinnerShow } from '../modules/spinner';

export function* fetchFirebasePersonalSetting({ payload: { userInfo } }) {
    console.log('fetch firebase personal setting.');
    try {
        yield put(spinnerShow());

        // 檢查 firebase 是否有資料
        const setting = yield firebase.database().ref('/users/' + userInfo.uid);
        yield setting.on('value', function(snapshot) {
            const val = snapshot.val();

            if (val !== null) {
                console.log(val);

                put(personalSettingSet({
                    ...val
                }));
            } else {
                setting.set({
                    ...PERSONAL_DEFAULT_SETTING,
                    image: '0'
                });
            }
        });

        yield put(spinnerHide());
    } catch (e) {
        yield put(spinnerHide());
    }
}

export function* fetchLocalPersonalSetting() {
    try {
        yield put(spinnerShow());

        const setting = yield call(get, PERSONAL_SETTING);
        if (typeof setting !== 'undefined') {
            yield put(personalSettingSet({
                ...setting
            }));
        } else {
            yield put(personalSettingReset());
        }

        console.log('fetch');

        yield put(spinnerHide());
    } catch (e) {
        console.log(e);

        yield put(personalSettingSet({
            ...PERSONAL_DEFAULT_SETTING
        }));

        yield put(spinnerHide());
    }
}

export function* setPersonalSetting({ payload }) {
    try {
        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: payload
        }));

        console.log('test');
    } catch (e) {
        console.log(e);
    }
}

export function* resetPersonalSetting() {
    try {
        const defaultSetting = yield {
            ...PERSONAL_DEFAULT_SETTING,
            image: '0'
        };

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: defaultSetting
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalLevel({ payload }) {
    try {
        const personal = yield call(get, PERSONAL_SETTING);

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: {
                ...personal,
                level: payload.level
            }
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalImage({ payload }) {
    try {
        const personal = yield call(get, PERSONAL_SETTING);

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: {
                ...personal,
                image: payload.image
            }
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalTips() {
    try {
        const personal = yield call(get, PERSONAL_SETTING);

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: {
                ...personal,
                tips: !personal.tips
            }
        }));
    } catch (e) {
        console.log(e);
    }
}
