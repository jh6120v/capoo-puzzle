import React, { useCallback, useEffect } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import {
    getGrids,
    getInOrderGrids,
    getPosition,
    getSpacePosition,
    isWin
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

const Puzzle = () => {
    const dispatch = useDispatch();

    // 取個人設定值
    const { col } = useSelector((state) => state.personal);

    // 拼圖完整資料
    const { prepared, grids } = useSelector(state => state.grids);

    // 自定義 hook
    const { puzzleContainer, total, puzzleWidth, layout, moves: [move, setMove] } = usePuzzle(grids, col);

    // get in order grids
    useEffect(() => {
        // 初始化
        dispatch(gridsSet({
            grids: getInOrderGrids(col)
        }));
    }, []);

    // 開始遊戲
    const play = useCallback(() => {
        //
        dispatch(gridsSet({
            grids: getGrids(col)
        }));

        dispatch(preparedOff());

        setMove(0);

        setTimerState('started');
    }, []);

    // 重新遊戲
    const retry = useCallback(() => {
        dispatch(gridsSet({
            grids: getInOrderGrids(col)
        }));

        dispatch(preparedOn());

        setMove(0);

        setTimerState('reset');

        countDownTimer.setTimerState('reset');
    }, []);

    // 移動磚塊
    const moveHandler = (idx, item) => {
        // console.log(idx, item);
        if (prepared || item.label === total - 1) return false;

        // 取欲移動磚塊的 x, y 座標
        const elemPos = getPosition(item.position, col);

        // 取空白磚塊的 x, y 座標
        const spacePos = getSpacePosition(grids, col);
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
                setTimerState('stopped');
                console.log('success!');
                // 跳出 model 告知成功並記錄時間
            }
        }
    };

    // model
    const {
        ModelBox, isShown, showModal, hideModal
    } = useModel('TimeOut!', useCallback(() => {
        retry();
        hideModal();
    }, []));

    // 計時器
    const { timerState, setTimerState, seconds } = useTimer();

    // 倒數計時器
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
            <PuzzleContainer ref={puzzleContainer}>
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
