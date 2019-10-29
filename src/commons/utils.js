import React, { Suspense } from 'react';
import { LazyLoad } from '../styles/common-style';

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
 * e.g. [1, 2, 3, 4, 5]
 *
 * @param total
 * @returns {number[]}
 */
export const getTiles = (total) => {
    return Array(total).fill(0).map((value, index) => index + 1);
};

/**
 * 將數列隨機打散後，並檢查其是否可用(可解)
 *
 * @param tiles
 * @param columns
 * @returns {*}
 */
export const getAcceptableTiles = (tiles, columns) => {
    let resolvable = false;

    while (!resolvable) {
        tiles.sort(function () {
            return Math.random() > 0.5 ? -1 : 1;
        });

        resolvable = checkResolvable(tiles, columns);
    }

    return tiles;
};

/**
 * 檢查數列是否有解，條件 e.g.
 * 1. 拼圖列數為奇數時，逆序列數和應為偶數
 * 2. 拼圖列數為偶數時，逆序列數和的奇偶性與空白磚所在列數的奇偶性守恆
 *
 * @param grids
 * @param columns
 * @returns {boolean}
 */
export const checkResolvable = (grids, columns) => {
    // 逆序列數和
    let count = 0;

    // 空白磚所在列數
    let spaceX = 0;

    // 找出空白磚列數，並從 grids 中移除
    grids = grids.filter((item, idx) => {
        if (item === grids.length) {
            spaceX = idx % columns + 1;
        }

        // 把空白從數列中去除(即數列中最後一數字)
        return item !== grids.length;
    });

    // 計算逆序列數和
    grids.forEach((item, idx, grids) => {
        let j = idx + 1;
        while (j < grids.length) {
            if (item > grids[j]) {
                count++;
            }

            j++;
        }
    });

    return columns % 2 ? count % 2 === 0 : count % 2 + spaceX % 2 === 0;
};

/**
 * 根據行列數轉換為二維陣列
 * e.g. [1,2,3,4,5,6,7,8,9] => [[1,2,3], [4,5,6], [7,8,9]]
 *
 * @param tiles
 * @param columns
 * @param rows
 * @returns {Array}
 */
export const convertToGrids = (tiles, columns, rows) => {
    let grids = [];
    while (grids.length < columns) {
        let row = [];
        while (row.length < rows) {
            row.push({
                label: tiles[grids.length * rows + row.length]
            });
        }

        grids.push(row);
    }

    return grids;
};

export const getGrids = (columns, rows) => {
    const tiles = getTiles(columns * rows);
    const acceptableTiles = getAcceptableTiles(tiles, columns);

    return convertToGrids(acceptableTiles, columns, rows);
};
