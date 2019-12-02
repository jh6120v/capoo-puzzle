import { lazy } from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
    createActionCreator,
    waitingRouteComponent,
    getRandom,
    initialStateFromLocalStorage, getTiles
} from '../../src/commons/utils';

describe('test utils', () => {
    it('test createActionCreator type', () => {
        const actionCreator = createActionCreator('@@NAMESPACE');
        const test = actionCreator('TEST');

        expect(test.type).toEqual('@@NAMESPACE/TEST');
    });

    it('test createActionCreator func', () => {
        const actionCreator = createActionCreator('@@NAMESPACE');
        const test = actionCreator('TEST');

        const fakeTestCreator = () => ({
            type: '@@NAMESPACE/TEST',
            payload: {}
        });

        expect(JSON.stringify(test())).toEqual(JSON.stringify(fakeTestCreator()));
    });

    it('rendered lazily fallback', async () => {
        const LazyComponent = lazy(() => import('../lazy-component'));

        const { container } = render(
            waitingRouteComponent(LazyComponent)()
        );

        const lazyElement = await waitForElement(() => container);

        expect(lazyElement).toMatchSnapshot();
    });

    it('rendered lazily', async () => {
        const LazyComponent = lazy(() => import('../lazy-component'));

        const { getByText } = render(
            waitingRouteComponent(LazyComponent)()
        );

        const lazyElement = await waitForElement(() => getByText(/i am lazy/i));
        expect(lazyElement).toBeInTheDocument();
    });

    it('test initialStateFromLocalStorage when not set param.', () => {
        try {
            initialStateFromLocalStorage();
        } catch (e) {
            expect(e.message).toBe('initial state must be set.')
        }
    });

    it('test initialStateFromLocalStorage when localStorage not support.', () => {
        const key = 'KEY';
        const initialState = 'INITIAL_STATE';

        const result = initialStateFromLocalStorage(key, initialState);

        expect(result).toBe(initialState);
    });

    it('test initialStateFromLocalStorage when old state not found.', () => {
        const key = 'KEY';
        const initialState = {
            "data": "INITIAL_STATE"
        };

        localStorage[key] = undefined;

        const result = initialStateFromLocalStorage(key, initialState);

        expect(localStorage.__STORE__[key]).toBe(JSON.stringify(initialState));
        expect(Object.keys(localStorage.__STORE__).length).toBe(1);
        expect(result).toStrictEqual(initialState);
    });

    it('test initialStateFromLocalStorage when old state exist.', () => {
        const key = 'KEY';
        const initialState = {
            "data": "INITIAL_STATE"
        };
        const oldState = {
            "old": "OLD_STATE"
        };

        localStorage[key] = JSON.stringify(oldState);

        const result = initialStateFromLocalStorage(key, initialState);

        expect(result).toStrictEqual({
            ...initialState,
            ...oldState
        });
    });

    it('test getRandom.', () => {
        const random = getRandom(1, 3);

        expect(random).toBeGreaterThan(0);
        expect(random).toBeLessThan(4);
    });

    it('test getTiles.', () => {
        const tiles = getTiles(3);

        expect(tiles.length).toBe(3);

        let i;
        for (i = 0; i < 3; i++) {
            expect(tiles[i].label).toEqual(i);
            expect(tiles[i].position).toEqual(i);
        }
    });
});
