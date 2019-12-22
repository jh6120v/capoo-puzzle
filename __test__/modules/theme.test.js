import each from 'jest-each';
import themeReducer, { colorModeSet, toggleSwitchSet } from "../../src/modules/theme";

describe('test theme modules.', () => {
    each([
        [
            'colorModeSet',
            colorModeSet,
            {
                type: '@@THEME/COLOR_MODE_SET',
                payload: {}
            }
        ],
        [
            'toggleSwitchSet',
            toggleSwitchSet,
            {
                type: '@@THEME/TOGGLE_SWITCH_SET',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to change theme.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    it('should merge colorModeSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            darkModeEnabled: false,
            colorMode: 'light',
            toggle: () => {}
        };

        const result = themeReducer(state, colorModeSet({
            colorMode: 'dark'
        }));

        expect(result.colorMode).toEqual('dark');
    });

    it('should merge toggleSwitchSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            darkModeEnabled: false,
            colorMode: 'light',
            toggle: () => {}
        };

        const result = themeReducer(state, toggleSwitchSet({
            toggle: 'toggle'
        }));

        expect(result.toggle).toEqual('toggle');
    });
});
