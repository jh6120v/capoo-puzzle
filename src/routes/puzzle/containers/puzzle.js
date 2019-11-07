import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import {
    getGrids,
    getInOrderGrids,
    getPosition,
    getSpacePosition,
    isWin, layoutPosition
} from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { gridsSet, preparedOn, preparedOff } from "../modules/grids";
import {
    PuzzleContainer,
    GridWrap,
    Grid,
    Points,
    Functions
} from "../styles/puzzle-style";
import { useModel, usePuzzle, useTimer } from "../../../commons/hooks";
import Model from "../../../components/model";
import Clock from "../components/clock";
import { headerTitleDefault, nextLinkActSetting } from '../../../modules/header';

const Puzzle = () => {
    const dispatch = useDispatch();

    // 取個人設定值
    const { cols } = useSelector((state) => state.personal);

    // 拼圖完整資料
    const { prepared, grids } = useSelector(state => state.grids);

    // 自定義 hook
    const { puzzleContainerNode, totalCols, puzzleWidth, moves: [move, setMove] } = usePuzzle(cols);

    // get in order grids
    useEffect(() => {
        dispatch(headerTitleDefault());
        dispatch(nextLinkActSetting());

        // 初始化
        dispatch(gridsSet({
            grids: getInOrderGrids(cols)
        }));
    }, []);

    // model
    const {
        ModelBox, isShown, showModal, hideModal
    } = useModel('TimeOut!', useCallback(() => {
        resume();
        hideModal();
    }, []));

    // 計時器
    const accumulateTimer = useTimer();

    // 倒數計時器
    const countDownTimer = useTimer(3, 'backward', () => {
        play();
        countDownTimer.setTimerState('reset');
    });

    // 開始遊戲
    const play = useCallback(() => {
        //
        dispatch(gridsSet({
            grids: getGrids(cols)
        }));

        dispatch(preparedOff());

        setMove(0);

        accumulateTimer.setTimerState('started');
    }, []);

    // 重新遊戲
    const resume = useCallback(() => {
        dispatch(gridsSet({
            grids: getInOrderGrids(cols)
        }));

        dispatch(preparedOn());

        setMove(0);

        accumulateTimer.setTimerState('reset');

        countDownTimer.setTimerState('reset');
    }, []);

    // 移動磚塊
    const moveHandler = (idx, item) => {
        // console.log(idx, item);
        if (prepared || item.label === totalCols - 1) return false;

        // 取欲移動磚塊的 x, y 座標
        const elemPos = getPosition(item.position, cols);

        // 取空白磚塊的 x, y 座標
        const spacePos = getSpacePosition(grids, cols);
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

            if (isWin(grids)) {
                accumulateTimer.setTimerState('stopped');

                console.log('success!');
                // 跳出 model 告知成功並記錄時間
                showModal();
            }
        }
    };

    return (
        <ContainerInner>
            <Points>{move} moves</Points>
            <Points>
                {
                    countDownTimer.timerState === 'started' ?
                        (countDownTimer.seconds === 0 ? 'Go' : countDownTimer.seconds) :
                        null
                }
            </Points>
            <Clock seconds={accumulateTimer.seconds} />
            <PuzzleContainer ref={puzzleContainerNode}>
                <GridWrap>
                    {
                        grids.map((item, idx) => {
                            let isSpace = parseInt(item.label) === totalCols - 1 && prepared === false;
                            const { x, y } = layoutPosition(puzzleWidth, cols)[item.position];

                            return (
                                <Grid
                                    key={item.label}
                                    totalWidth={puzzleWidth}
                                    width={puzzleWidth / cols}
                                    position={layoutPosition(puzzleWidth, cols)[item.label]}
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
                    accumulateTimer.timerState === 'started' ?
                        (<button onClick={resume}>Resume</button>) :
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
