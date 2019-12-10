import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { headerTitleSet, prevLinkActClose } from '../../../modules/header';
import { CompetitionInner } from '../styles';
import CodeGenerate from '../components/code-generate';
import * as firebase from 'firebase/app';
import { setRoomId } from '../modules/competition';

const Competition = () => {
    const dispatch = useDispatch();
    const { roomId } = useSelector((state) => state.competition);
    const [generateOpen, setGenerateOpen] = useState(false);
    // const [] = useState('');

    const [readerOpen, setReaderOpen] = useState(false);

    // 登入狀態
    const { loggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Competition'
        }));

        dispatch(prevLinkActClose());
    }, []);

    useEffect(() => {
        console.log(roomId);
        let competition;

        if (roomId !== null) {
            console.log('on');

            // 監聽 firebase
            competition = firebase.database().ref(`/competition/${roomId}`);
            competition.on('value', (snapshot) => {
                const val = snapshot.val();

                console.log('val::', val);
            });
        }

        return () => {
            if (roomId !== null) {
                console.log('off111');

                // 移除監聽 firebase
                competition.off();

                dispatch(setRoomId({
                    roomId: null
                }));
            }
        };
    }, [generateOpen]);

    const genCode = useCallback((loggedIn, generateOpen) => {
        setGenerateOpen(!generateOpen);

        // 推送一筆比賽至 firebase
        const pushId = firebase.database().ref().push().key;
        firebase.database().ref(`/competition/${pushId}`).set({
            'users': {
                '1p': {
                    'name': loggedIn.displayName,
                    'avatar': loggedIn.photoURL,
                    'uid': loggedIn.uid
                },
                '2p': {
                    'name': 'waiting...',
                    'avatar': 'none',
                    'uid': 'none'
                }
            },
            'ready': false,
            'winner': 'none'
        });

        dispatch(setRoomId({
            roomId: pushId
        }));
    }, []);

    const close = () => {
        dispatch(setRoomId({
            roomId: 'off'
        }));
        setGenerateOpen(!generateOpen);
    };

    return (
        <CompetitionInner>
            <div onClick={() => genCode(loggedIn, generateOpen)}>generate</div>
            <CodeGenerate isVisible={generateOpen} toggle={close} roomId={roomId} />
            {/*<div onClick={() => setReaderOpen(true)}>reader</div>*/}
        </CompetitionInner>
    );
};

export default Competition;
