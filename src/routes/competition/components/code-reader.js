import React, { useCallback } from 'react';
import { QRCodeContent } from '../styles';
import { Animated } from 'react-animated-css';
import QrReader from 'react-qr-reader';

const CodeReader = ({ isVisible, toggle }) => {
    const handleError = useCallback((err) => {

    }, []);

    const handleScan = useCallback((data) => {

    }, []);

    return (
        <Animated
            animationIn="fadeIn"
            animationOut="bounceOutDown"
            isVisible={isVisible}
            animationInDuration={150}
            style={{
                position: 'fixed', left: 0, top: 0, width: '100%', zIndex: 3
            }}
            animateOnMount={false}
        >
            <QRCodeContent>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '280px' }}
                />
                <div onClick={() => toggle(false)}>close</div>
            </QRCodeContent>
        </Animated>
    );
};

export default CodeReader;
