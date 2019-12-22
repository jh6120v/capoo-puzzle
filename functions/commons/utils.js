
/**
 * 取一逆序列數和為 0 的一維陣列
 *
 * @param total
 * @returns {{label: number}[]}
 */
const getTiles = (total) => {
    return Array(total).fill(0).map((value, index) => ({ label: index, position: index }));
};

/**
 * 將數列隨機打散後，並檢查其是否可用(可解)
 *
 * @param tiles
 * @param cols
 * @returns {*}
 */
const getAcceptableTiles = (tiles, cols) => {
    let resolvable = false;

    while (!resolvable) {
        tiles.sort(() => {
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
const checkResolvable = (grids, cols) => {
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
 * @returns {*}
 */
exports.getGrids = (cols) => {
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

const getPosition = (position, col) => {
    return {
        x: position % col,
        y: Math.floor(position / col)
    };
};

exports.getLayoutPositionList = (puzzleWidth, cols) => {
    const totalCols = cols * cols;
    const singleWidth = puzzleWidth / cols;

    return Array(totalCols).fill(0).map((value, index) => index).map(n => {
        const p = getPosition(n, cols);

        return { x: singleWidth * p.x, y: singleWidth * p.y };
    });
};

exports.LEVEL_MAP = {
    easy: 3,
    medium: 4,
    hard: 5
};
