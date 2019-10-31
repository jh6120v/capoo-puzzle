import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import { getGrids, getInOrderGrids, layoutPosition } from '../../../commons/utils';
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
        console.log(newGrids);

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
        const row = Math.floor(label / 3);
        const col = label % 3;

        // const rowPos = Math.ceil(label / size);
        // let columnPos = label % size;
        // if (columnPos === 0) {
        //     columnPos = size;
        // }

        // console.log(label, columnPos, rowPos, { x: columnPos - 1, y: rowPos - 1 });

        return { x: col, y: row };
    }, []);

    // 移動
    const moveHandler = (label, idx) => {
        console.log(label, idx);
        if (prepared || label === 8) return false;

        // console.log(x, y);
        const elemPos = getPosition(idx);
        const spacePos = getSpacePosition();
        console.log(elemPos, spacePos);

        if (
            (elemPos.x === spacePos.x && Math.abs(elemPos.y - spacePos.y) === 1) ||
            (elemPos.y === spacePos.y && Math.abs(elemPos.x - spacePos.x) === 1)
        ) {
            console.log('can move');

            grids[spacePos.idx].position = grids[idx].position;
            grids[idx].position = 8;

            dispatch(gridsSet({
                grids: grids
            }));
        }
    };

    // 即時找出空白磚位置
    const getSpacePosition = () => {
        let output = {};

        grids.every((item, idx) => {
            if (item.label === 8) {
                output = { ...getPosition(idx), idx: idx };

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
                            let isSpace = parseInt(item.label) === 8 && prepared === false;
                            const [x, y] = layoutPosition(9)[item.position];
                            console.log(x, y);

                            return (
                                <Grid
                                    key={item.label}
                                    onClick={() => moveHandler(item.label, item.position)}
                                    size={puzzleSize / size}
                                    isSpace={isSpace}
                                    style={{ transform: `translate3d(${x}px,${y}px,0)` }}
                                >
                                    <GridInner>
                                        {/*<GridInnerText>{item.label}</GridInnerText>*/}
                                        <GridInnerImg
                                            size={puzzleSize}
                                            pos={layoutPosition(9)[item.label]}
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
