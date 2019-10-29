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

        const grids = getGrids(columns, rows);

        dispatch(gridsSet({
            grids: grids
        }));

        setPreparation(false);
    }, []);

    const reset = useCallback(() => {
        setPreparation(true);

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

        console.log(label, columnPos, rowPos, { x: columnPos - 1, y: rowPos - 1 });

        return { x: columnPos - 1, y: rowPos - 1 };
    }, []);

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
