import React, { useCallback, useEffect, useRef, useState } from 'react';
import { all } from 'ramda';
import { ContainerInner } from '../../../styles/layout-style';
import { getGrids, getInOrderGrids, layoutPosition } from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { gridsSet, preparedOn, preparedOff } from "../modules/grids";
import {
    PuzzleContainer,
    GridWrap,
    Grid,
    Points,
    Functions
} from "../styles/puzzle-style";
import { useModel, useTimer } from "../../../commons/hooks";
import Model from "../../../components/model";
import Clock from "../components/clock";

const Puzzle = () => {
    const dispatch = useDispatch();

    // 取個人設定值
    const { col } = useSelector((state) => state.personal);

    // 拼圖完整資料
    const { prepared, grids } = useSelector(state => state.grids);

    // 拼圖各方塊絕對定位
    const [layout, setLayout] = useState([]);

    // 拼圖實際寬度(正方形)
    const [puzzleWidth, setPuzzleWidth] = useState(0);

    // 總拼圖格數
    const [total, setTotal] = useState(0);

    // 移動次數
    const [move, setMove] = useState(0);

    const container = useRef();
    useEffect(() => {
        // 設定 puzzle 總寬度
        setPuzzleWidth(container.current.clientWidth);

        // 設定拼圖總格數
        setTotal(col * col);

        // 設定拼圖各方塊絕對定位
        setLayout(layoutPosition(container.current.clientWidth, col));
    }, []);

    // get in order grids
    useEffect(() => {
        // 初始化
        dispatch(gridsSet({
            grids: getInOrderGrids(col)
        }));
    }, []);

    const play = useCallback(() => {
        //
        dispatch(gridsSet({
            grids: getGrids(col)
        }));

        dispatch(preparedOff());

        setMove(0);

        setTimerState('started');
    }, []);

    const retry = useCallback(() => {
        dispatch(gridsSet({
            grids: getInOrderGrids(col)
        }));

        dispatch(preparedOn());

        setMove(0);

        setTimerState('reset');

        countDownTimer.setTimerState('reset');
    }, []);

    // 轉換為 x, y 座標
    const getPosition = useCallback((position) => {
        return {
            x: position % col,
            y: Math.floor(position / col)
        };
    }, []);

    // 移動
    const moveHandler = (idx, item) => {
        // console.log(idx, item);
        if (prepared || item.label === total - 1) return false;

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

            setMove(move + 1);

            if (isWin()) {
                setTimerState('stopped');
                console.log('success!');
                // 跳出 model 告知成功並記錄時間
            }
        }
    };

    // 即時找出空白磚位置
    const getSpacePosition = () => {
        let output = {};

        grids.every((item, idx) => {
            if (item.label === total - 1) {
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

    // 檢查成功的條件
    const isWin = () => {
        return all((x) => x.label === x.position)(grids);
    };

    const {
        ModelBox, isShown, showModal, hideModal
    } = useModel('TimeOut!', useCallback(() => {
        retry();
        hideModal();
    }, []));

    const { timerState, setTimerState, seconds } = useTimer();

    const countDownTimer = useTimer(3, 'backward', () => {
        play();
        countDownTimer.setTimerState('reset');
    });

    return (
        <ContainerInner>
            <Points>{move} moves</Points>
            <Points>
                {
                    countDownTimer.timerState === 'started' ? countDownTimer.seconds : null
                }
            </Points>
            <Clock seconds={seconds} />
            <PuzzleContainer ref={container}>
                <GridWrap width={puzzleWidth}>
                    {
                        grids.map((item, idx) => {
                            let isSpace = parseInt(item.label) === total - 1 && prepared === false;
                            const { x, y } = layout[item.position];

                            return (
                                <Grid
                                    key={item.label}
                                    totalWidth={puzzleWidth}
                                    width={puzzleWidth / col}
                                    position={layout[item.label]}
                                    isSpace={isSpace}
                                    onClick={() => moveHandler(idx, item)}
                                    style={{ transform: `translate3d(${x}px,${y}px,0)` }}
                                >
                                    {item.label}
                                </Grid>
                            )
                        })
                    }
                </GridWrap>
            </PuzzleContainer>
            <Functions>
                {
                    timerState === 'started' ?
                        (<button onClick={retry}>Retry</button>) :
                        (<button onClick={() => countDownTimer.setTimerState('started')}>Play</button>)
                }
            </Functions>
            <Model isShow={isShown}>
                <ModelBox />
            </Model>
        </ContainerInner>
    );
};

export default Puzzle;
