import React from 'react';
import { history } from "../../store";
import IosArrowBack from "react-ionicons/lib/IosArrowBack";
import { PrevLinkItem } from "../../styles/layout-style";

const LinkGoBack = () => {
    return (
        <PrevLinkItem>
            <a onClick={() => history.goBack()}>
                <IosArrowBack fontSize="25px" color="#fff" />
            </a>
        </PrevLinkItem>
    );
};

export default LinkGoBack;
