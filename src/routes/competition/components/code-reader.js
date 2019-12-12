import React, { useCallback, useState } from 'react';
import { QRCodeContent } from '../styles';
import { Animated } from 'react-animated-css';
import QrReader from 'react-qr-reader';
import { useDispatch } from "react-redux";
import { headerVisibleToggle } from "../../../modules/header";
import Navigation from "../../../components/navigation";
import LinkClose from "../../../components/navigation-items/link-close";

const CodeReader = ({ isVisible, toggle }) => {
    const dispatch = useDispatch();
    const [result, setResult] = useState('no result');

    const handleError = useCallback((err) => {

    }, []);

    const handleScan = useCallback((data) => {
        if (data) {
            setResult(data);
        }
    }, []);

    const hideScanner = useCallback(() => {
        toggle(false);
        dispatch(headerVisibleToggle());
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
                <Navigation
                    prev={<LinkClose func={hideScanner} />}
                    bgHide={true}
                />
                <QrReader
                    onError={handleError}
                    onScan={handleScan}
                    facingMode={'environment'}
                    style={{ width: '100%' }}
                    className={'aaa'}
                />
                <div>{result}</div>
            </QRCodeContent>
        </Animated>
    );
};

export default CodeReader;
