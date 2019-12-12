import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { headerTitleSet, headerVisibleToggle, prevLinkActGoBack } from '../../../modules/header';
import { CompetitionInner } from '../styles';
import * as firebase from 'firebase/app';
import { setRoomId } from '../modules/competition';
import { history } from '../../../store';
import CodeReader from "../components/code-reader";
import { Wrapper } from "../../../styles/layout-style";
import LinkGoBack from "../../../components/navigation-items/link-go-back";
import Navigation from "../../../components/navigation";
import LinkClose from "../../../components/navigation-items/link-close";

const Competition = () => {
    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);
    const [scannerShow, setScannerShow] = useState(true);

    // 登入狀態
    const { loggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Competition'
        }));

        dispatch(prevLinkActGoBack());
    }, []);

    useEffect(() => {
        // 先清除 room id
        dispatch(setRoomId({
            roomId: null
        }));
    }, []);

    // useEffect(() => {
    //     let competition;
    //
    //     if (roomId !== null) {
    //         // 監聽 firebase
    //         competition = firebase.database().ref(`/competition/${roomId}`);
    //         competition.on('value', (snapshot) => {
    //             const val = snapshot.val();
    //
    //             console.log('val::', val);
    //         });
    //     }
    //
    //     return () => {
    //         if (roomId !== null) {
    //             // 移除監聽 firebase
    //             competition.off();
    //         }
    //     };
    // }, [generateOpen]);

    const genCode = useCallback((loggedIn, generateOpen) => {
        // 推送一筆比賽至 firebase
        const pushId = firebase.database().ref().push().key;
        firebase.database().ref(`/competition/${pushId}`).set({
            player: 2,
            level: 'easy',
            image: '0',
            tips: false,
            ready: false,
            users: {
                [loggedIn.uid]: {
                    uid: loggedIn.uid,
                    name: loggedIn.displayName,
                    avatar: loggedIn.photoURL,
                    ready: false
                }
            },
            winner: 'none'

        });

        dispatch(setRoomId({
            roomId: pushId
        }));
    }, []);

    const newRoom = useCallback(async () => {
        const roomId = firebase.database().ref().push().key;
        await firebase.database().ref(`/competition/${roomId}`).set({
            player: 2,
            level: 'easy',
            image: '0',
            tips: false,
            users: [
                {
                    uid: loggedIn.uid,
                    name: loggedIn.displayName,
                    avatar: loggedIn.photoURL,
                    ready: false,
                    percent: 0
                }
            ],
            allReady: false,
            winner: 'none'
        });

        await dispatch(setRoomId({
            roomId: roomId
        }));

        //
        await history.push('/competition/room');
    }, []);

    const HideCamera = () => {
        dispatch(headerVisibleToggle());
        setIsLoaded(true);
        setScannerShow(true);
    };

    return (
        <Wrapper>
            <Navigation
                title={'Competition'}
                prev={<LinkClose func={() => history.push('/')} />}
            />
            <CompetitionInner>
                {/*<div onClick={newRoom}>new room</div>*/}
                <div onClick={() => {
                    dispatch(headerVisibleToggle());
                    setIsLoaded(true);
                    setScannerShow(true);
                }}>
                    show scanner
                </div>
                {isLoaded ? <CodeReader isVisible={scannerShow} toggle={setScannerShow} /> : null}
                {/*<CodeGenerate isVisible={generateOpen} toggle={close} roomId={roomId} />*/}
            </CompetitionInner>
        </Wrapper>

    );
};

export default Competition;
