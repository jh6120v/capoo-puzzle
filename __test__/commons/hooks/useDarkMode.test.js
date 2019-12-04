import { renderHook, act } from '@testing-library/react-hooks';
import useDarkMode from '../../../src/commons/hooks/useDarkMode';

describe('test useDarkMode hook', () => {
    beforeEach(() => {
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: true,
                media: query,
                onchange: null,
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            };
        });
    });

    it('test', () => {
        const { result } = renderHook(() => useDarkMode());

        expect(result.current[0]).toBeTruthy();
        expect(result.current[1]).toEqual('system');

        act(() => {
            result.current[2]('light');
        });

        expect(result.current[0]).toBeFalsy();
        expect(result.current[1]).toEqual('light');

        act(() => {
            result.current[2]('dark');
        });

        expect(result.current[0]).toBeTruthy();
        expect(result.current[1]).toEqual('dark');
    });
});
