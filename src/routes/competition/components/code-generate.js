import React from 'react';
import { QRCodeContent } from '../styles';
import { Animated } from 'react-animated-css';
import QRCode from 'qrcode.react';

const CodeGenerate = ({ isVisible, toggle, roomId }) => {
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
                <QRCode size={300} value={`generate::${roomId}`} />
                <div onClick={() => toggle()}>qr code generate</div>
            </QRCodeContent>
        </Animated>
    );
};

export default CodeGenerate;
