import React, { useCallback, useState, useEffect, useRef } from 'react';
import { QRCodeReaderContent, ReaderDescription } from '../styles';
import { Animated } from 'react-animated-css';
import QrReader from 'react-qr-reader';
import { useDispatch, useSelector } from "react-redux";
import { headerVisibleToggle } from "../../../modules/header";
import Navigation from "../../../components/navigation";
import LinkClose from "../../../components/navigation-items/link-close";
import * as firebase from 'firebase';
import { setRoomId } from "../modules/competition";
import { history } from "../../../store";

const CodeReader = ({ isVisible, toggle }) => {
    const dispatch = useDispatch();
    const [webRTCEnabled, setWebRTCEnabled] = useState(true);

    // 登入狀態
    const { loggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        if (typeof navigator.mediaDevices === 'undefined') {
            setWebRTCEnabled(false);
        }
    }, []);


    const handleError = useCallback((err) => {

    }, []);

    const handleScan = useCallback((data) => {
        if (data === null) return false;

        const result = data.split('::');
        if (result[0] !== 'cp' && result.length !== 2) return false;

        const roomId = result[1];

        firebase
            .database()
            .ref(`/competition/${roomId}`)
            .once('value', async (snapshot) => {
                const val = await snapshot.val();
                console.log(val);

                if (val === null) return false;

                // 檢查是否已存在
                if (typeof val.users[loggedIn.uid] === 'undefined') {
                    // 若還有空位
                    if (Object.keys(val.users).length < val.player) {
                        val.users[loggedIn.uid] = {
                            name: loggedIn.displayName,
                            avatar: loggedIn.photoURL,
                            ready: false,
                            percent: 0,
                            grids: val.grids
                        };

                        await firebase
                            .database()
                            .ref(`/competition/${roomId}/users`)
                            .update(val.users);
                    }
                }

                await dispatch(setRoomId({
                    roomId: roomId
                }));

                console.log(val);
                await history.push('/competition/game');
            })
            .catch((e) => {

            });
    }, []);

    const hideScanner = useCallback(() => {
        toggle(false);
        dispatch(headerVisibleToggle());
    }, []);

    const ref = useRef();

    return (
        <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDownBig"
            isVisible={isVisible}
            animationInDuration={150}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <QRCodeReaderContent legacyMode={!webRTCEnabled}>
                <Navigation
                    prev={<LinkClose func={hideScanner} />}
                    bgHide={true}
                />
                <div style={{ width: '100%' }} onClick={() => {
                    if (!webRTCEnabled) {
                        ref.current.openImageDialog();
                    }
                }}>
                    <QrReader
                        ref={ref}
                        onError={handleError}
                        onScan={handleScan}
                        facingMode={'environment'}
                        style={{ width: '100%' }}
                        className={'reader'}
                        legacyMode={!webRTCEnabled}
                    />
                </div>
                <ReaderDescription>
                    You can scan QR code to join multi player games
                </ReaderDescription>
            </QRCodeReaderContent>
        </Animated>
    );
};

export default CodeReader;
