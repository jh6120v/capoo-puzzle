import React from 'react';
import { Link } from 'react-router-dom';
import IosSettings from 'react-ionicons/lib/IosSettings';
import { NextLinkItem } from '../../styles/layout-style';

const LinkSetting = () => (
    <NextLinkItem>
        <Link to="/setting">
            <IosSettings fontSize="25px" color="#fff" />
        </Link>
    </NextLinkItem>
);

export default LinkSetting;
