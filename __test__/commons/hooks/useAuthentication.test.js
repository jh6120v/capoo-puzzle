import { renderHook, act } from '@testing-library/react-hooks';
import useAuthentication from "../../../src/commons/hooks/useAuthentication";

describe('test useAuthentication hook', () => {
    const { login, logout, loggedIn } = renderHook(() => useAuthentication());

    act(() => {
        login();
    });

    expect(loggedIn).toEqual();
});
