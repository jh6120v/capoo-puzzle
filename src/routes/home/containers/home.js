import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import { getGrids, getInOrderGrids } from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { gridsSet, preparedOn, preparedOff } from "../../../modules/grids";
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
    const { size } = useSelector((state) => state.personal);

    //
    const { prepared, grids } = useSelector(state => state.grids);

    const node = useRef();
    useEffect(() => {
        setPuzzleSize(node.current.clientWidth);
    }, []);

    // get in order grids
    useEffect(() => {
        dispatch(gridsSet({
            grids: getInOrderGrids(size)
        }));
    }, []);

    const start = useCallback(() => {
        const newGrids = getGrids(size);

        dispatch(gridsSet({
            grids: newGrids
        }));

        dispatch(preparedOff());
    }, []);

    const reset = useCallback(() => {
        dispatch(gridsSet({
            grids: getInOrderGrids(size)
        }));

        dispatch(preparedOn());
    }, []);

    const getPosition = useCallback((label) => {
        const rowPos = Math.ceil(label / size);
        let columnPos = label % size;
        if (columnPos === 0) {
            columnPos = size;
        }

        // console.log(label, columnPos, rowPos, { x: columnPos - 1, y: rowPos - 1 });

        return { x: columnPos - 1, y: rowPos - 1 };
    }, []);

    // 移動
    const moveHandler = (label, idx) => {
        if (prepared || label === size * size) return false;

        // console.log(x, y);
        const elemPos = getPosition(idx + 1);
        const spacePos = getSpacePosition();
        // console.log(spacePos);

        if (
            (elemPos.x === spacePos.x && Math.abs(elemPos.y - spacePos.y) === 1) ||
            (elemPos.y === spacePos.y && Math.abs(elemPos.x - spacePos.x) === 1)
        ) {
            console.log('can move');

            grids[spacePos.idx].label = grids[idx].label;
            grids[idx].label = size * size;

            dispatch(gridsSet({
                grids: grids
            }));
        }
    };

    // 即時找出空白磚位置
    const getSpacePosition = () => {
        let output = {};

        grids.every((item, idx) => {
            if (item.label === size * size) {
                output = { ...getPosition(idx + 1), idx: idx };

                return false;
            }

            return true;
        });

        return output;
    };

    return (
        <ContainerInner>
            <Points>{move}</Points>
            <PuzzleContainer ref={node}>
                <GridWrap size={puzzleSize}>
                    {
                        grids.map((item, idx) => {
                            let isSpace = parseInt(item.label) === size * size && prepared === false;

                            return (
                                <Grid
                                    key={item.label}
                                    size={puzzleSize / size}
                                    cols={size}
                                    pos={getPosition(idx + 1)}
                                    onClick={() => moveHandler(item.label, idx)}
                                    isSpace={isSpace}
                                >
                                    <GridInner>
                                        {/*<GridInnerText>{item.label}</GridInnerText>*/}
                                        <GridInnerImg
                                            size={puzzleSize}
                                            cols={size}
                                            label={item.label}
                                            pos={getPosition(item.label)}
                                            isSpace={isSpace}
                                        />
                                    </GridInner>
                                </Grid>
                            )
                        })
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
