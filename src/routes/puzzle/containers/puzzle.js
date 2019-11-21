import React, { useCallback, useEffect, useState } from 'react';
import { ContainerInner } from '../../../styles/layout-style';
import {
    getGrids,
    getInOrderGrids,
    getPosition,
    getSpacePosition,
    isWin, getLayoutPositionList
} from '../../../commons/utils';
import { useDispatch, useSelector } from 'react-redux';
import { gridsSet, preparedOn, preparedOff, layoutPositionListSet } from "../modules/puzzle";
import {
    PuzzleContainer,
    GridWrap,
    Grid,
    Points,
    Functions, RatingWrap, RatingItem, PuzzleFront, PuzzleBack, FunctionButton, CountDownTips
} from "../styles/puzzle-style";
import { useModel, useTimer } from "../../../commons/hooks";
import Model from "../../../components/model";
import Clock from "../components/clock";
import { headerTitleDefault, nextLinkActSetting } from '../../../modules/header';

const Puzzle = () => {
    const dispatch = useDispatch();

    const [first, setFirst] = useState(true);

    // 取個人設定值
    const { cols, image, tips } = useSelector((state) => state.personal);

    // 拼圖完整資料
    const { prepared, grids, width, layoutPositionList } = useSelector(state => state.puzzle);

    // 移動次數
    const [move, setMove] = useState(0);

    // set default setting
    useEffect(() => {
        //
        setFirst(true);

        // set default header
        dispatch(headerTitleDefault());

        // set link
        dispatch(nextLinkActSetting());

        // set layout position list
        dispatch(layoutPositionListSet(getLayoutPositionList(width, cols)));

        // init
        dispatch(gridsSet({
            grids: getInOrderGrids(cols)
        }));

        //
        dispatch(preparedOn());
    }, []);

    // 計時器
    const accumulateTimer = useTimer();

    // 倒數計時器
    const countDownTimer = useTimer(3, 'backward', () => {
        play();
        countDownTimer.setTimerState('reset');
    });

    // model
    const {
        ModelBox, isShown, showModal, hideModal
    } = useModel('Congratulations', `You spent a total of ${accumulateTimer.seconds} and ${move} moves.`, useCallback(() => {
        resume();
        hideModal();
    }, []));

    // 開始遊戲
    const play = useCallback(() => {
        setFirst(false);

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
        <>
            <ContainerInner>
                {
                    image ? (
                        <>
                            <RatingWrap>
                                <RatingItem>
                                    <Clock timer={accumulateTimer} />
                                </RatingItem>
                                <RatingItem>{move === 0 && accumulateTimer.timerState === 'reset' ? '--' : move} moves</RatingItem>
                            </RatingWrap>
                            <PuzzleContainer active={accumulateTimer.timerState === 'started'} first={first}
                                             duration={400}>
                                <PuzzleFront image={image} />
                                <PuzzleBack>
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
                                                        image={image}
                                                        onClick={() => moveHandler(idx, item)}
                                                        style={{ transform: `translate3d(${x}px,${y}px,0)` }}
                                                    >
                                                        {tips ? item.label : null}
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </GridWrap>
                                </PuzzleBack>
                            </PuzzleContainer>
                            <Functions>
                                {
                                    accumulateTimer.timerState === 'started' ?
                                        (<FunctionButton onClick={resume}>Resume</FunctionButton>) :
                                        (<FunctionButton
                                            onClick={() => countDownTimer.setTimerState('started')}>Play</FunctionButton>)
                                }
                            </Functions>
                        </>
                    ) : null
                }
                <Model isShow={isShown}>
                    <ModelBox />
                </Model>
            </ContainerInner>
            {
                countDownTimer.timerState === 'started' ? <CountDownTips>{countDownTimer.seconds === 0 ? 'Go' : countDownTimer.seconds}</CountDownTips> : null
            }
        </>
    );
};

export default Puzzle;
