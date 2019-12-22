import { lazy } from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
    createActionCreator,
    waitingRouteComponent,
    getRandom,
    initialStateFromLocalStorage,
    getTiles,
    getLayoutPositionList,
    checkResolvable,
    getSpacePosition,
    getGrids, isWin, getInOrderGrids
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

    it('test getLayoutPositionList', () => {
        const list = getLayoutPositionList(100, 2);

        expect(list.length).toEqual(4);
        expect(list[0].x).toEqual(0);
        expect(list[0].y).toEqual(0);
        expect(list[1].x).toEqual(50);
        expect(list[1].y).toEqual(0);
        expect(list[2].x).toEqual(0);
        expect(list[2].y).toEqual(50);
        expect(list[3].x).toEqual(50);
        expect(list[3].y).toEqual(50);
    });

    it('test checkResolvable', () => {
        const result = checkResolvable([
            { label: 0, position: 0 },
            { label: 1, position: 1 },
            { label: 2, position: 2 },
            { label: 3, position: 3 }
        ], 2);

        expect(result).toBeTruthy();
    });

    it('test getInOrderGrids', () => {
        const result = getInOrderGrids(2);

        expect(result).toStrictEqual([
            { label: 0, position: 0 },
            { label: 1, position: 1 },
            { label: 2, position: 2 },
            { label: 3, position: 3 }
        ]);
    });

    it('test getGrids', () => {
        const result = getGrids(2);

        for (let i = 0; i < 4; i++) {
            expect(result[i].position).toEqual(i);
        }
    });

    it('test isWin', () => {
        const result = isWin([
            { label: 2, position: 0 },
            { label: 0, position: 1 },
            { label: 1, position: 2 },
            { label: 3, position: 3 }
        ]);

        expect(result).toBeFalsy();
    });

    it('test getSpacePosition', () => {
        const result = getSpacePosition([
            { label: 0, position: 0 },
            { label: 3, position: 3 },
            { label: 1, position: 1 },
            { label: 2, position: 2 }
        ], 2);

        expect(result).toStrictEqual({
            x: 1,
            y: 1,
            idx: 1,
            position: 3
        });
    });
});
