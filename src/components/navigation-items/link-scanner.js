import React from 'react';
import MdQrScanner from "react-ionicons/lib/MdQrScanner";
import { PrevLinkItem } from "../../styles/layout-style";

const LinkScanner = ({ func }) => {
    return (
        <PrevLinkItem>
            <a onClick={() => func()}>
                <MdQrScanner fontSize="25px" color="#fff" />
            </a>
        </PrevLinkItem>
    );
};

export default LinkScanner;
