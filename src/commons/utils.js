import React, { Suspense, useCallback } from 'react';
import { LazyLoad } from '../styles/common-style';
import { all } from "ramda";

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
    <Suspense fallback={<LazyLoad>Loading...</LazyLoad>}>
        <Component />
    </Suspense>
);

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
 * @param col
 * @returns {{x: number, y: number}[]}
 */
export const layoutPosition = (puzzleWidth, col) => {
    const totalCols = col * col;
    const singleWidth = puzzleWidth / col;

    return Array(totalCols).fill(0).map((value, index) => index).map(n => {
        const x1 = n % col;
        const y1 = Math.floor(n / col);

        return { x: singleWidth * x1, y: singleWidth * y1 };
    });
};

/**
 * 將數列隨機打散後，並檢查其是否可用(可解)
 *
 * @param tiles
 * @param size
 * @returns {*}
 */
export const getAcceptableTiles = (tiles, size) => {
    let resolvable = false;

    while (!resolvable) {
        tiles.sort(function () {
            return Math.random() > 0.5 ? -1 : 1;
        });

        resolvable = checkResolvable(tiles, size);
    }

    return tiles;
};

/**
 * 檢查數列是否有解，條件 e.g.
 * 1. 拼圖列數為奇數時，逆序列數和應為偶數
 * 2. 拼圖列數為偶數時，逆序列數和的奇偶性與空白磚所在列數的奇偶性守恆
 *
 * @param grids
 * @param size
 * @returns {boolean}
 */
export const checkResolvable = (grids, size) => {
    // 逆序列數和
    let count = 0;

    // 空白磚所在列數
    let spaceX = 0;

    // 找出空白磚列數，並從 grids 中移除
    grids = grids.filter((item, idx) => {
        if (item.label === grids.length - 1) {
            spaceX = idx % size + 1;
        }

        // 把空白從數列中去除(即數列中最後一數字)
        return item.label !== grids.length - 1;
    });

    console.log(grids);

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

    console.log(spaceX, count);

    return size % 2 ? count % 2 === 0 : count % 2 + spaceX % 2 === 0;
};

/**
 *
 * @param size
 * @returns {{label: number}[]}
 */
export function getInOrderGrids(size) {
    return getTiles(size * size);
}

/**
 *
 * @param size
 * @returns {*}
 */
export const getGrids = (size) => {
    const tiles = getTiles(size * size);
    const grids = getAcceptableTiles(tiles, size);

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