import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import { convertToGrids, getGrids, getTiles, getInOrderGrids } from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { tilesSet, gridsSet, preparedOn, preparedOff } from "../../../modules/grids";
import {
    PuzzleContainer,
    GridWrap,
    Grid,
    Points,
    Functions,
    GridInner,
    GridInnerImg, GridInnerText
} from "../styles/home-style";

const Home = () => {
    const dispatch = useDispatch();
    // 移動次數
    const [move, setMove] = useState(0);

    // 花費時間
    const [times, setTimes] = useState(0);

    // 拼圖大小
    const [puzzleSize, setPuzzleSize] = useState(0);

    // 取個人設定值
    const { columns, rows } = useSelector((state) => state.personal);

    //
    const { prepared, grids } = useSelector(state => state.grids);

    const node = useRef();
    useEffect(() => {
        setPuzzleSize(node.current.clientWidth);
    }, []);

    // get in order grids
    useEffect(() => {
        dispatch(gridsSet({
            grids: getInOrderGrids(columns, rows)
        }));
    }, [dispatch, columns, rows]);

    const start = useCallback(() => {
        const newGrids = getGrids(columns, rows);

        dispatch(gridsSet({
            grids: newGrids
        }));

        dispatch(preparedOff());
    }, []);

    const reset = useCallback(() => {
        dispatch(gridsSet({
            grids: getInOrderGrids(columns, rows)
        }));
        dispatch(preparedOn());
    }, []);

    const getPosition = useCallback((label) => {
        const rowPos = Math.ceil(label / columns);
        let columnPos = label % columns;
        if (columnPos === 0) {
            columnPos = columns;
        }

        // console.log(label, columnPos, rowPos, { x: columnPos - 1, y: rowPos - 1 });

        return { x: columnPos - 1, y: rowPos - 1 };
    }, []);

    // 移動
    const moveHandler = (label, x, y) => {
        if (prepared || label === columns * rows) return false;

        console.log(x, y);
        const empty = spacePos();
        console.log(empty);

        if ((x === empty.x && Math.abs(y - empty.y) === 1) ||
            (y === empty.y && Math.abs(x - empty.x) === 1)) {
            console.log('can move');
            console.log(grids[empty.x][empty.y], grids[x][y]);

            grids[empty.y][empty.x].label = grids[y][x].label;
            grids[y][x].label = columns * rows;

            // setGrids(grids);
            dispatch(gridsSet({
                grids: grids
            }));
        }
    };

    // 即時找出空白磚位置
    const spacePos = () => {
        let x, y;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                grids[i][j].label === columns * rows ? [x, y] = [j, i] : x = x
            }
        }

        return { x, y }
    };

    return (
        <ContainerInner>
            <Points>{move}</Points>
            <PuzzleContainer ref={node}>
                <GridWrap size={puzzleSize}>
                    {
                        grids.map((row, rowIdx) => row.map((column, columnIdx) => (
                            <Grid
                                key={column.label}
                                size={puzzleSize / columns}
                                cols={columns}
                                pos={{ x: columnIdx, y: rowIdx }}
                                onClick={() => moveHandler(column.label, columnIdx, rowIdx)}
                                style={{transform: `translate3d(${(columnIdx / columns) * puzzleSize}px,${(rowIdx / columns) * puzzleSize}px, 0)`}}
                            >
                                <GridInner>
                                    <GridInnerText>{column.label}</GridInnerText>
                                    <GridInnerImg
                                        size={puzzleSize}
                                        cols={columns}
                                        label={column.label}
                                        pos={getPosition(column.label)}
                                        isSpace={parseInt(column.label) === columns * rows && prepared === false}
                                    />
                                </GridInner>
                            </Grid>
                        )))
                    }
                </GridWrap>
            </PuzzleContainer>
            <Functions>
                <button onClick={start}>start</button>
                <button onClick={reset}>reset</button>
            </Functions>
        </ContainerInner>
    );
};

export default Home;
