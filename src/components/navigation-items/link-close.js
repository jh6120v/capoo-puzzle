import React from 'react';
import MdClose from "react-ionicons/lib/MdClose";
import { PrevLinkItem } from "../../styles/layout-style";

const LinkClose = ({ func }) => {
    return (
        <PrevLinkItem>
            <a onClick={() => func()}>
                <MdClose fontSize="25px" color="#fff" />
            </a>
        </PrevLinkItem>
    );
};

export default LinkClose;
