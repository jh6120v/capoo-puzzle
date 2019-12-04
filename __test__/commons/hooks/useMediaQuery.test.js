import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery from '../../../src/commons/hooks/useMediaQuery';

describe('test useMediaQuery hook', () => {
    beforeEach(() => {
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: query === '(prefers-color-scheme: dark)',
                media: query,
                onchange: null,
                addEventListener: jest.fn(),
                removeEventListener: jest.fn()
            };
        });
    });

    it('test', () => {
        const { result } = renderHook(() => useMediaQuery(`(prefers-color-scheme: dark)`));

        expect(result.current).toBeTruthy();
    });
});
