import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerTitleSet, linkActSet } from '../../../../../modules/header';
import { ScannerContent, ScannerInner } from '../styles';

const Scanner = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Scanner'
        }));

        dispatch(linkActSet({
            prev: null,
            next: null
        }));
    }, []);

    return (
        <ScannerInner>
            <ScannerContent>
                scanner
            </ScannerContent>
        </ScannerInner>
    );
};

export default Scanner;
