import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { headerTitleSet, prevLinkActClose } from '../../../modules/header';
import { CompetitionInner } from '../styles';
import CodeGenerate from '../components/code-generate';
import * as firebase from 'firebase/app';
import { setRoomId } from '../modules/competition';
import { history } from '../../../store';

const Competition = () => {
    const dispatch = useDispatch();

    // 登入狀態
    const { loggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Competition'
        }));

        dispatch(prevLinkActClose());
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
        setGenerateOpen(!generateOpen);

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

    const newRoom = useCallback(() => {
        const roomId = firebase.database().ref().push().key;
        firebase.database().ref(`/competition/${roomId}`).set({
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

        dispatch(setRoomId({
            roomId: roomId
        }));

        //
        history.push('/competition/room');
    }, []);

    return (
        <CompetitionInner>
            <div onClick={newRoom}>new room</div>
            {/*<CodeGenerate isVisible={generateOpen} toggle={close} roomId={roomId} />*/}
            {/*<div onClick={() => setReaderOpen(true)}>reader</div>*/}
        </CompetitionInner>
    );
};

export default Competition;
