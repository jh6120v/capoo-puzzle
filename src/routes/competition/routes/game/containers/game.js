import React, { useCallback, useEffect, useState } from 'react';
import { Wrapper } from "../../../../../styles/layout-style";
import Navigation from "../../../../../components/navigation";
import { GameInner, PlayerAvatar, PlayerGamePercent, PlayerItem, PlayerList, PlayerName } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import * as firebase from 'firebase';
import LinkGoBack from "../../../../../components/navigation-items/link-go-back";
import { setCompetition } from "../../../modules/competition";
import { identity, times } from "ramda";
import MdPerson from "react-ionicons/lib/MdPerson";
import {
    CountDownTips,
    FunctionButton,
    Functions,
    PuzzleBack,
    PuzzleContainer,
    PuzzleFront
} from "../../../../puzzle/styles/puzzle-style";
import useTimer from "../../../../../commons/hooks/useTimer";
import QRCode from 'qrcode.react';
import PuzzleGrids from "../../../../puzzle/components/puzzle-grids";
import { LEVEL_MAP } from "../../../../../constants";
import { completePercent, getLayoutPositionList, getPosition, getSpacePosition } from "../../../../../commons/utils";

const Game = () => {
    const dispatch = useDispatch();
    const { roomId, player, level, image, tips, users } = useSelector((state) => state.competition);

    // 登入狀態
    const { loggedIn } = useSelector((state) => state.auth);

    // 是否為第一次進入
    const [first, setFirst] = useState(true);

    // 倒數計時器
    const countDownTimer = useTimer(5, 'backward', () => {
        countDownTimer.setTimerState('reset');

        setFirst(false);
    });

    const [prepared, setPrepared] = useState(true);
    const [cols, setCols] = useState(3);
    const [layoutPositionList, setLayoutPositionList] = useState([]);
    const [grids, setGrids] = useState([]);

    useEffect(() => {
        const columns = LEVEL_MAP[level];

        setCols(columns);

        setLayoutPositionList(getLayoutPositionList(300, LEVEL_MAP[level]));
    }, []);

    useEffect(() => {
        let game;

        if (roomId !== null) {
            // 監聽 firebase
            game = firebase.database().ref(`/competition/${roomId}`);
            game.on('value', (snapshot) => {
                const val = snapshot.val();

                console.log('val::', val);
                dispatch(setCompetition({
                    ...val
                }));

                setGrids(val.users[loggedIn.uid].grids);

                // 全部都準備好
                if (val.allReady && prepared === true) {
                    countDownTimer.setTimerState('started');
                    setPrepared(false);
                }
            });
        }

        return () => {
            if (roomId !== null) {
                // 移除監聽 firebase
                game.off();
            }
        };
    }, [prepared, loggedIn]);

    const ready = useCallback(() => {
        let updates = {};
        updates[`/competition/${roomId}/users/${loggedIn.uid}/ready`] = true;

        firebase.database().ref().update(updates);
    }, [roomId, loggedIn]);

    const moveHandler = (idx, item) => {
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

            // 和空白磚塊交換 position
            grids[spacePos.idx].position = grids[idx].position;
            grids[idx].position = spacePos.position;

            firebase
                .database()
                .ref(`/competition/${roomId}/users/${loggedIn.uid}/grids`)
                .set(grids);

            firebase
                .database()
                .ref(`/competition/${roomId}/users/${loggedIn.uid}/percent`)
                .set(completePercent(grids));
        }
    };

    return (
        <Wrapper>
            <Navigation
                title={'Multi Player Game'}
                prev={<LinkGoBack />}
            />
            <GameInner>
                {
                    Object.keys(users).length > 0 ? (
                        <>
                            <PlayerList>
                                {
                                    Object.keys(users).map((val) => {
                                        return (
                                            <PlayerItem key={val}>
                                                <PlayerAvatar avatar={users[val].avatar} ready={users[val].ready} />
                                                <PlayerName>{users[val].name}</PlayerName>
                                                <PlayerGamePercent>{users[val].percent}%</PlayerGamePercent>
                                            </PlayerItem>
                                        );
                                    })
                                }
                                {
                                    times(identity, player - Object.keys(users).length).map((val) => {
                                        return (
                                            <PlayerItem key={val}>
                                                <PlayerAvatar>
                                                    <MdPerson color="#fff" />
                                                </PlayerAvatar>
                                                <PlayerName>wait...</PlayerName>
                                                <PlayerGamePercent>-%</PlayerGamePercent>
                                            </PlayerItem>
                                        );
                                    })
                                }
                            </PlayerList>
                            <PuzzleContainer
                                active={countDownTimer.timerState === 'reset'}
                                first={first}
                                duration={400}
                            >
                                <PuzzleFront>
                                    <QRCode
                                        value={`cp::${roomId}`}
                                        size={300}
                                        includeMargin={true}
                                    />
                                </PuzzleFront>
                                <PuzzleBack>
                                    <PuzzleGrids
                                        prepared={prepared}
                                        width={300}
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
                                    !users[loggedIn.uid].ready ? (
                                        <FunctionButton onClick={ready}>I AM READY</FunctionButton>
                                    ) : null
                                }
                            </Functions>
                        </>
                    ) : 'Loading...'
                }
            </GameInner>
            {
                countDownTimer.timerState === 'started' ?
                    <CountDownTips>{countDownTimer.seconds === 0 ? 'GO' : countDownTimer.seconds}</CountDownTips> : null
            }
        </Wrapper>
    );
};

export default Game;
