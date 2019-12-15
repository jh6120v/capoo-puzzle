import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CompetitionInner, FunctionButton } from '../styles';
import * as firebase from 'firebase/app';
import { setRoomId } from '../modules/competition';
import { history } from '../../../store';
import CodeReader from "./code-reader";
import { Wrapper } from "../../../styles/layout-style";
import Navigation from "../../../components/navigation";
import LinkClose from "../../../components/navigation-items/link-close";
import LinkScanner from "../../../components/navigation-items/link-scanner";
import RadioBoxPlayer from "./radio-box/RadioBoxPlayer";
import RadioBoxLevel from "./radio-box/RadioBoxLevel";
import RadioBoxTips from "./radio-box/RadioBoxTips";
import RadioBoxImage from "./radio-box/RadioBoxImage";
import { getGrids } from "../../../commons/utils";
import { LEVEL_MAP } from "../../../constants";

const Competition = () => {
    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);
    const [scannerShow, setScannerShow] = useState(true);

    // 登入狀態
    const { loggedIn } = useSelector((state) => state.auth);

    // 比賽設定
    const { player, level, tips, image } = useSelector((state) => state.competition);

    useEffect(() => {
        // 先清除 room id
        dispatch(setRoomId({
            roomId: null
        }));
    }, []);

    const newGame = useCallback(async (loggedIn ,player, level, image, tips) => {
        const grids = getGrids(LEVEL_MAP[level]);
        const roomId = firebase.database().ref().push().key;
        await firebase.database().ref(`/competition/${roomId}`).set({
            player: player,
            level: level,
            image: image,
            tips: tips,
            users: {
                [loggedIn.uid]: {
                    name: loggedIn.displayName,
                    avatar: loggedIn.photoURL,
                    ready: false,
                    percent: 0,
                    grids: grids
                }
            },
            allReady: false,
            grids: grids
        });

        await dispatch(setRoomId({
            roomId: roomId
        }));

        //
        await history.push('/competition/game');
    }, []);

    const openScanner = useCallback(() => {
        setIsLoaded(true);
        setScannerShow(true);
    }, []);

    return (
        <Wrapper>
            <Navigation
                title={'Competition'}
                prev={<LinkClose func={() => history.push('/')} />}
                next={<LinkScanner func={() => openScanner()} />}
            />
            <CompetitionInner>
                <RadioBoxPlayer />
                <RadioBoxLevel />
                <RadioBoxTips />
                <RadioBoxImage />
                <FunctionButton
                    onClick={() => newGame(loggedIn, player, level, image, tips)}
                >
                    New Game
                </FunctionButton>
                {isLoaded ? <CodeReader isVisible={scannerShow} toggle={setScannerShow} /> : null}
            </CompetitionInner>
        </Wrapper>

    );
};

export default Competition;
