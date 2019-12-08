import React, { Suspense } from 'react';
import { all } from "ramda";
import Spinner from "../components/spinner";

export const createActionCreator = (namespace) => (actionType) => {
    const type = `${namespace}/${actionType}`;
    const actionCreator = (payload = {}) => ({
        type,
        payload
    });

    actionCreator.type = type;
    Object.freeze(actionCreator);

    return actionCreator;
};

export const waitingRouteComponent = (Component) => () => (
    <Suspense fallback={<Spinner show={true} />}>
        <Component />
    </Suspense>
);

export const initialStateFromLocalStorage = (key, initialState) => {
    if (typeof initialState === 'undefined' || !initialState) throw new Error('initial state must be set.');

    if (typeof localStorage !== 'undefined') {
        const state = localStorage[key];
        if (!state) {
            localStorage[key] = JSON.stringify(initialState);
        }

        return state ? {...initialState, ...JSON.parse(state)} : initialState;
    } else {
        return initialState;
    }
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 取一逆序列數和為 0 的一維陣列
 *
 * @param total
 * @returns {{label: number}[]}
 */
export const getTiles = (total) => {
    return Array(total).fill(0).map((value, index) => ({ label: index, position: index }));
};

/**
 * 拼圖各方塊絕對定位
 *
 * @param puzzleWidth
 * @param cols
 * @returns {{x: number, y: number}[]}
 */
export const getLayoutPositionList = (puzzleWidth, cols) => {
    const totalCols = cols * cols;
    const singleWidth = puzzleWidth / cols;

    return Array(totalCols).fill(0).map((value, index) => index).map(n => {
        const p = getPosition(n, cols);

        return { x: singleWidth * p.x, y: singleWidth * p.y };
    });
};

/**
 * 將數列隨機打散後，並檢查其是否可用(可解)
 *
 * @param tiles
 * @param cols
 * @returns {*}
 */
export let getAcceptableTiles = (tiles, cols) => {
    let resolvable = false;

    while (!resolvable) {
        tiles.sort(function () {
            return Math.random() > 0.5 ? -1 : 1;
        });

        resolvable = checkResolvable(tiles, cols);
    }

    return tiles;
};

/**
 * 檢查數列是否有解，條件 e.g.
 * 1. 拼圖列數為奇數時，逆序列數和應為偶數
 * 2. 拼圖列數為偶數時，逆序列數和的奇偶性與空白磚所在列數的奇偶性守恆
 *
 * @param grids
 * @param cols
 * @returns {boolean}
 */
export const checkResolvable = (grids, cols) => {
    // 逆序列數和
    let count = 0;

    // 空白磚所在列數
    let spaceX = 0;

    // 找出空白磚列數，並從 grids 中移除
    grids = grids.filter((item, idx) => {
        if (item.label === grids.length - 1) {
            spaceX = idx % cols + 1;
        }

        // 把空白從數列中去除(即數列中最後一數字)
        return item.label !== grids.length - 1;
    });

    // 計算逆序列數和
    grids.forEach((item, idx, grids) => {
        let j = idx;
        while (j < grids.length - 1) {
            if (item.label > grids[j + 1].label) {
                count++;
            }

            j++;
        }
    });

    return cols % 2 ? count % 2 === 0 : count % 2 + spaceX % 2 === 0;
};

/**
 *
 * @param cols
 * @returns {{label: number}[]}
 */
export function getInOrderGrids(cols) {
    return getTiles(cols * cols);
}

/**
 *
 * @param cols
 * @returns {*}
 */
export const getGrids = (cols) => {
    const tiles = getTiles(cols * cols);
    const grids = getAcceptableTiles(tiles, cols);

    return grids.reduce((data, item, idx) => {
        data.push({
            ...item,
            position: idx
        });

        return data;
    }, []);
};

// 檢查成功的條件
export const isWin = (grids) => {
    return all((x) => x.label === x.position)(grids);
};

// 轉換為 x, y 座標
export const getPosition = (position, col) => {
    return {
        x: position % col,
        y: Math.floor(position / col)
    };
};

// 即時找出空白磚位置
export const getSpacePosition = (grids, col) => {
    let output = {};

    grids.every((item, idx) => {
        if (item.label === col * col - 1) {
            output = {
                ...getPosition(item.position, col),
                idx: idx,
                position: item.position
            };

            return false;
        }

        return true;
    });

    return output;
};
