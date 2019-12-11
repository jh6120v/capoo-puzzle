import React, { useCallback } from 'react';
import { QRCodeContent } from '../styles';
import { Animated } from 'react-animated-css';
import QrReader from 'react-qr-reader';
import { useDispatch } from "react-redux";
import { headerVisibleToggle } from "../../../modules/header";

const CodeReader = ({ isVisible, toggle }) => {
    const dispatch = useDispatch();

    const handleError = useCallback((err) => {

    }, []);

    const handleScan = useCallback((data) => {

    }, []);

    return (
        <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDownBig"
            isVisible={isVisible}
            animationInDuration={150}
            style={{
                position: 'fixed', left: 0, top: 0, width: '100%', zIndex: 3
            }}
        >
            <QRCodeContent>
                <QrReader
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '300px', margin: '0 auto' }}
                />
                <div onClick={() => {
                    toggle(false);
                    dispatch(headerVisibleToggle());
                }}>close</div>
            </QRCodeContent>
        </Animated>
    );
};

export default CodeReader;
