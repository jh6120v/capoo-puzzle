import React, { useCallback, useEffect, useState } from 'react';
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
    Functions,
    RatingWrap,
    RatingItem,
    PuzzleFront,
    PuzzleBack,
    FunctionButton,
    CountDownTips,
    PuzzleInner
} from "../styles/puzzle-style";
import Model from "../../../components/model";
import Clock from "../components/clock";
import { LEVEL_MAP, PERSONAL_DEFAULT_RECORD } from "../../../constants";
import useTimer from '../../../commons/hooks/useTimer';
import useModel from '../../../commons/hooks/useModel';
import PersonalRecord from "../components/personal-record";
import { personalRecordAllSet, personalRecordSet } from "../../../modules/personal-record";
import moment from "moment";
import * as firebase from 'firebase/app';
import PuzzleGrids from '../components/puzzle-grids';
import { history } from '../../../store';
import { Wrapper } from "../../../styles/layout-style";
import Navigation from "../../../components/navigation";
import LinkRanking from "../../../components/navigation-items/link-ranking";
import LinkSetting from "../../../components/navigation-items/link-setting";

const Puzzle = () => {
    const dispatch = useDispatch();

    // 是否為第一次進入
    const [first, setFirst] = useState(true);

    // 總欄位數
    const [cols, setCols] = useState(0);

    // 登入狀態
    const { login, loggedIn } = useSelector((state) => state.auth);

    // 取個人設定值
    const { level, image, tips } = useSelector((state) => state.personal);

    // 取個人最佳成績
    const record = useSelector((state) => state.record);

    // 拼圖完整資料
    const { prepared, grids, width, layoutPositionList } = useSelector(state => state.puzzle);

    // 移動次數
    let [moves, setMoves] = useState(0);

    useEffect(() => {
        if (loggedIn && loggedIn !== 'loading') {
            const records = firebase.database().ref('/records/' + loggedIn.uid);
            records.once('value', (snapshot) => {
                const val = snapshot.val();
                if (val !== null) {
                    dispatch(personalRecordAllSet({
                        ...PERSONAL_DEFAULT_RECORD,
                        ...val
                    }));
                } else {
                    records.set({
                        ...record
                    });
                }
            });
        }
    }, [loggedIn]);

    // set default setting
    useEffect(() => {
        dispatch(preparedOn());
    }, []);

    useEffect(() => {
        const columns = LEVEL_MAP[level];

        setCols(columns);

        // set layout position list
        dispatch(layoutPositionListSet(getLayoutPositionList(width, columns)));

        // init
        dispatch(gridsSet({
            grids: getInOrderGrids(columns)
        }));
    }, [level]);

    // 計時器
    const accumulateTimer = useTimer();

    // 倒數計時器
    const countDownTimer = useTimer(3, 'backward', () => {
        countDownTimer.setTimerState('reset');

        setFirst(false);
        accumulateTimer.setTimerState('started');
    });

    // model
    const {
        ModelBox, isShown, showModal, hideModal
    } = useModel('Congratulations', `You spent a total of ${accumulateTimer.seconds} secs and ${moves} moves.`, useCallback(() => {
        resume();
        hideModal();
    }, []));

    // 開始遊戲
    const play = useCallback(() => {
        countDownTimer.setTimerState('started');

        dispatch(gridsSet({
            grids: getGrids(cols)
        }));

        dispatch(preparedOff());
    }, [cols]);

    // 重新遊戲
    const resume = useCallback(() => {
        dispatch(preparedOn());

        setMoves(0);

        accumulateTimer.setTimerState('reset');

        countDownTimer.setTimerState('reset');
    }, [cols]);

    // 移動磚塊
    const moveHandler = (idx, item, grids) => {
        // console.log(idx, item);
        if (prepared || item.label === cols * cols - 1) return false;

        // 取欲移動磚塊的 x, y 座標
        const elemPos = getPosition(item.position, cols);

        // 取空白磚塊的 x, y 座標
        const spacePos = getSpacePosition(grids, cols);

        // 檢查是否為相鄰方塊
        if (
            (elemPos.x === spacePos.x && Math.abs(elemPos.y - spacePos.y) === 1) ||
            (elemPos.y === spacePos.y && Math.abs(elemPos.x - spacePos.x) === 1)
        ) {
            console.log('can move');
            moves++;

            setMoves(moves);

            // 和空白磚塊交換 position
            grids[spacePos.idx].position = grids[idx].position;
            grids[idx].position = spacePos.position;

            dispatch(gridsSet({
                grids: grids
            }));

            if (isWin(grids)) {
                // 停止計時器
                accumulateTimer.setTimerState('stopped');

                // 跳出 model 告知成功並記錄時間
                showModal();

                // 檢查是否為個人最佳紀錄
                if (
                    record[level] === null ||
                    accumulateTimer.seconds < record[level].secs ||
                    (accumulateTimer.seconds === record[level].secs && moves < record[level].moves)
                ) {
                    if (loggedIn && loggedIn !== 'loading') {
                        firebase.database().ref('/records/' + loggedIn.uid).child(level).set({
                            secs: accumulateTimer.seconds,
                            moves: moves,
                            time: +moment()
                        });
                    }

                    dispatch(personalRecordSet({
                        level: level,
                        secs: accumulateTimer.seconds,
                        moves: moves,
                        time: +moment()
                    }));
                }

                // 送至 firebase
                if (loggedIn && loggedIn !== 'loading') {
                    firebase.database().ref('/ranking/temp').push({
                        uid: loggedIn.uid,
                        name: loggedIn.displayName,
                        avatar: loggedIn.photoURL,
                        secs: accumulateTimer.seconds,
                        moves: moves,
                        level: level,
                        time: +moment()
                    });
                }
            }
        }
    };

    // model
    const model = useModel('Notice!',
        'Please login first, press confirm to login with google or facebook.',
        () => {
            history.push('/setting');
            model.hideModal();
        },
        'Confirm',
        () => {
            model.hideModal();
        });

    return (
        <Wrapper>
            <Navigation
                title={'Capoo Puzzle'}
                prev={<LinkRanking loggedIn={loggedIn} {...model} />}
                next={<LinkSetting />}
            />
            <PuzzleInner>
                <PersonalRecord record={record} />
                <RatingWrap>
                    <RatingItem>
                        <Clock timer={accumulateTimer} />
                    </RatingItem>
                    <RatingItem>{moves === 0 && accumulateTimer.timerState === 'reset' ? '--' : moves} moves</RatingItem>
                </RatingWrap>
                <PuzzleContainer
                    active={accumulateTimer.timerState === 'started'}
                    first={first}
                    duration={400}
                >
                    <PuzzleFront image={image} />
                    <PuzzleBack>
                        <PuzzleGrids
                            prepared={prepared}
                            width={width}
                            grids={grids}
                            cols={cols}
                            image={image}
                            tips={tips}
                            layoutPositionList={layoutPositionList}
                            moveHandler={moveHandler}
                        />
                    </PuzzleBack>
                </PuzzleContainer>
                <Functions>
                    {
                        accumulateTimer.timerState === 'started' ?
                            <FunctionButton onClick={resume}>RESUME</FunctionButton> :
                            (
                                <>
                                    <FunctionButton onClick={play}>PLAY</FunctionButton>
                                    <FunctionButton
                                        onClick={() => loggedIn && loggedIn !== 'loading' ? history.push('/competition') : model.showModal()}
                                    >
                                        PLAY WITH YOUR FRIEND
                                    </FunctionButton>
                                </>
                            )
                    }
                </Functions>
                <Model isShow={isShown}>
                    <ModelBox />
                </Model>
            </PuzzleInner>
            {
                countDownTimer.timerState === 'started' ?
                    <CountDownTips>{countDownTimer.seconds === 0 ? 'GO' : countDownTimer.seconds}</CountDownTips> : null
            }
            <Model isShow={model.isShown}>
                <model.ModelBox />
            </Model>
        </Wrapper>
    );
};

export default Puzzle;
