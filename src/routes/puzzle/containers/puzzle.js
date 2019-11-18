import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import {
    getGrids,
    getInOrderGrids,
    getPosition,
    getSpacePosition,
    isWin, getLayoutPositionList
} from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { gridsSet, preparedOn, preparedOff, layoutPositionListSet, totalWithSet } from "../modules/puzzle";
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
import { headerTitleDefault, nextLinkActSetting } from '../../../modules/header';

const Puzzle = () => {
    const dispatch = useDispatch();

    // 取個人設定值
    const { cols, tips } = useSelector((state) => state.personal);

    // 拼圖完整資料
    const { prepared, grids, width, layoutPositionList } = useSelector(state => state.puzzle);

    // 移動次數
    const [move, setMove] = useState(0);

    //
    const puzzleContainerNode = useRef();

    // set default setting
    useEffect(() => {
        // set default header
        dispatch(headerTitleDefault());

        // set link
        dispatch(nextLinkActSetting());

        // set puzzle total width
        dispatch(totalWithSet(puzzleContainerNode.current.clientWidth));

        // set layout position list
        dispatch(layoutPositionListSet(getLayoutPositionList(width, cols)));

        // init
        dispatch(gridsSet({
            grids: getInOrderGrids(cols)
        }));

        //
        dispatch(preparedOn());
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
        if (prepared || item.label === cols * cols - 1) return false;

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
                            let isSpace = parseInt(item.label) === cols * cols - 1 && prepared === false;
                            const { x, y } = layoutPositionList[item.position];

                            return (
                                <Grid
                                    key={item.label}
                                    totalWidth={width}
                                    width={width / cols}
                                    position={layoutPositionList[item.label]}
                                    isSpace={isSpace}
                                    onClick={() => moveHandler(idx, item)}
                                    style={{ transform: `translate3d(${x}px,${y}px,0)` }}
                                >
                                    { tips ? item.label : null}
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
