import authInfoReducer, { authInfoSet } from '../../src/modules/auth-info';

describe('test auth-info modules', () => {
    it('should dispatch authInfoSet action to change auth info', () => {
        expect(authInfoSet()).toStrictEqual({
            type: '@@AUTH_INFO/AUTH_INFO_SET',
            payload: {}
        });
    });

    it('should merge authInfoSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            login: () => {},
            logout: () => {},
            loggedIn: 'loading'
        };

        const result = authInfoReducer(state, authInfoSet({
            login: 'login',
            logout: 'logout',
            loggedIn: 'test'
        }));

        expect(result).toEqual({
            login: 'login',
            logout: 'logout',
            loggedIn: 'test'
        });
    });
});
