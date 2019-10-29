import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import { convertToGrids, getGrids, getTiles } from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { gridsSet } from "../../../modules/grids";
import {
    PuzzleContainer,
    GridWrap,
    Grid,
    PreviewWrap,
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

    // 是否為預備中
    const [preparation, setPreparation] = useState(true);

    // 拼圖大小
    const [puzzleSize, setPuzzleSize] = useState(0);

    // 取個人設定值
    const { columns, rows, img } = useSelector((state) => state.personal);

    //
    const { grids } = useSelector(state => state.grids);
    // const [grids, setGrids] = useState([]);

    const node = useRef();
    useEffect(() => {
        setPuzzleSize(node.current.clientWidth);
    }, []);

    // useEffect(() => {
    //     const grids = getGrids(columns, rows);
    //
    //     dispatch(gridsSet({
    //         grids: grids
    //     }));
    // }, [dispatch, columns, rows, img]);

    const start = useCallback(() => {
        // const tiles = getTiles(columns * rows);
        // const grids = convertToGrids(tiles, columns, rows);

        const newGrids = getGrids(columns, rows);

        // setGrids(newGrids);
        dispatch(gridsSet({
            grids: newGrids
        }));

        setPreparation(false);
    }, []);

    const reset = useCallback(() => {
        setPreparation(true);

        // setGrids([]);
        dispatch(gridsSet({
            grids: []
        }));
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
        if (label === columns * rows) return false;

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
                {
                    preparation ?
                        (
                            <PreviewWrap />
                        ) :
                        (
                            <GridWrap size={puzzleSize}>
                                {
                                    grids.map((row, rowIdx) => row.map((column, columnIdx) => (
                                        <Grid
                                            key={column.label}
                                            size={puzzleSize / columns}
                                            cols={columns}
                                            pos={{ x: columnIdx, y: rowIdx }}
                                            onClick={() => moveHandler(column.label, columnIdx, rowIdx)}
                                        >
                                            {
                                                parseInt(column.label) === columns * rows ? null : (
                                                    <GridInner>
                                                        <GridInnerText>{column.label}</GridInnerText>
                                                        <GridInnerImg
                                                            size={puzzleSize}
                                                            cols={columns}
                                                            label={column.label}
                                                            pos={getPosition(column.label)}
                                                        />
                                                    </GridInner>
                                                )
                                            }

                                        </Grid>
                                    )))
                                }
                            </GridWrap>
                        )
                }
            </PuzzleContainer>
            <Functions>
                <button onClick={start}>start</button>
                <button onClick={reset}>reset</button>
            </Functions>
        </ContainerInner>
    );
};

export default Home;
