import React from 'react';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import { history } from '../../store';
import { PrevLinkItem } from '../../styles/layout-style';

const LinkGoBack = () => (
    <PrevLinkItem>
        <a onClick={() => history.goBack()}>
            <IosArrowBack fontSize="25px" color="#fff" />
        </a>
    </PrevLinkItem>
);

export default LinkGoBack;
