import each from 'jest-each';
import personalSettingReducer, {
    personalSettingImageSet,
    personalSettingLevelSet,
    personalSettingReset,
    personalSettingSet, personalSettingTipsChange
} from '../../src/modules/personal-setting';
import { PERSONAL_DEFAULT_SETTING } from '../../src/constants';

describe('test personal-setting modules.', () => {
    each([
        [
            'personalSettingSet',
            personalSettingSet,
            {
                type: '@@PERSONAL_SETTING/SETTING_SET',
                payload: {}
            }
        ],
        [
            'personalSettingReset',
            personalSettingReset,
            {
                type: '@@PERSONAL_SETTING/SETTING_RESET',
                payload: {}
            }
        ],
        [
            'personalSettingLevelSet',
            personalSettingLevelSet,
            {
                type: '@@PERSONAL_SETTING/SETTING_LEVEL_SET',
                payload: {}
            }
        ],
        [
            'personalSettingImageSet',
            personalSettingImageSet,
            {
                type: '@@PERSONAL_SETTING/SETTING_IMAGE_SET',
                payload: {}
            }
        ],
        [
            'personalSettingTipsChange',
            personalSettingTipsChange,
            {
                type: '@@PERSONAL_SETTING/SETTING_TIPS_CHANGE',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to change personal-setting.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    each([
        [
            'personalSettingReset',
            personalSettingReset,
            PERSONAL_DEFAULT_SETTING
        ],
        [
            'personalSettingTipsChange',
            personalSettingTipsChange,
            {
                ...PERSONAL_DEFAULT_SETTING,
                tips: true
            }
        ]
    ]).it('should merge %s and remove duplicated property when action is dispatched.',
        (name, actionCreator, expected) => {
            const result = personalSettingReducer(PERSONAL_DEFAULT_SETTING, actionCreator());

            expect(result).toEqual(expected);
        });

    it('should merge personalSettingSet and remove duplicated property when action is dispatched.', () => {
        const result = personalSettingReducer(PERSONAL_DEFAULT_SETTING, personalSettingSet({
            level: 'hard',
            image: '1',
            tips: false
        }));

        expect(result).toEqual({
            level: 'hard',
            image: '1',
            tips: false
        });
    });

    it('should merge personalSettingLevelSet and remove duplicated property when action is dispatched.', () => {
        const result = personalSettingReducer(PERSONAL_DEFAULT_SETTING, personalSettingLevelSet({
            level: 'hard'
        }));

        expect(result).toEqual({
            ...PERSONAL_DEFAULT_SETTING,
            level: 'hard'
        });
    });

    it('should merge personalSettingImageSet and remove duplicated property when action is dispatched.', () => {
        const result = personalSettingReducer(PERSONAL_DEFAULT_SETTING, personalSettingImageSet({
            image: '1'
        }));

        expect(result).toEqual({
            ...PERSONAL_DEFAULT_SETTING,
            image: '1'
        });
    });
});
