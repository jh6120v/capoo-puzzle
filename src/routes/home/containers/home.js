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

    // 各方塊定位
    const [layout, setLayout] = useState([]);

    // 取個人設定值
    const { size } = useSelector((state) => state.personal);

    //
    const { prepared, grids } = useSelector(state => state.grids);

    const node = useRef();
    useEffect(() => {
        setPuzzleSize(node.current.clientWidth);
        setLayout(layoutPosition(node.current.clientWidth / size, size));
    }, []);

    // get in order grids
    useEffect(() => {


        dispatch(gridsSet({
            grids: getInOrderGrids(size)
        }));
    }, []);


    const start = useCallback(() => {
        const newGrids = getGrids(size);
        // console.log(newGrids);

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

    const getPosition = useCallback((position) => {
        const row = Math.floor(position / size);
        const col = position % size;

        return { x: col, y: row };
    }, []);

    // 移動
    const moveHandler = (idx, item) => {
        // console.log(idx, item);
        if (prepared || item.label === (size * size) - 1) return false;

        // 取欲移動磚塊的 x, y 座標
        const elemPos = getPosition(item.position);

        // 取空白磚塊的 x, y 座標
        const spacePos = getSpacePosition();
        // console.log(elemPos, spacePos);

        // 檢查是否為相鄰方塊
        if (
            (elemPos.x === spacePos.x && Math.abs(elemPos.y - spacePos.y) === 1) ||
            (elemPos.y === spacePos.y && Math.abs(elemPos.x - spacePos.x) === 1)
        ) {
            console.log('can move');

            // 和空白磚塊交換 position
            grids[spacePos.idx].position = grids[idx].position;
            grids[idx].position = spacePos.position;

            dispatch(gridsSet({
                grids: grids
            }));
        }
    };

    // 即時找出空白磚位置
    const getSpacePosition = () => {
        let output = {};

        grids.every((item, idx) => {
            if (item.label === (size * size) - 1) {
                output = {
                    ...getPosition(item.position),
                    idx: idx,
                    position: item.position
                };

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
                            let isSpace = parseInt(item.label) === (size * size) - 1 && prepared === false;
                            const [x, y] = layout[item.position];

                            return (
                                <Grid
                                    key={item.label}
                                    onClick={() => moveHandler(idx, item)}
                                    size={puzzleSize / size}
                                    isSpace={isSpace}
                                    style={{ transform: `translate3d(${x}px,${y}px,0)` }}
                                >
                                    <GridInner>
                                        {/*<GridInnerText>{item.label}</GridInnerText>*/}
                                        <GridInnerImg
                                            size={puzzleSize}
                                            pos={layout[item.label]}
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
