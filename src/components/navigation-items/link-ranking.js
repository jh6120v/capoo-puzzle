import React from 'react';
import { PrevLinkItem } from "../../styles/layout-style";
import { Link } from "react-router-dom";
import IosStats from "react-ionicons/lib/IosStats";

const LinkRanking = ({ loggedIn, showModal }) => {


    return (
        <>
            <PrevLinkItem>
                {
                    loggedIn && loggedIn !== 'loading' ? (
                        <Link to="/ranking">
                            <IosStats fontSize="25px" color="#fff" />
                        </Link>
                    ) : (
                        <a onClick={showModal}>
                            <IosStats fontSize="25px" color="#fff" />
                        </a>
                    )
                }
            </PrevLinkItem>
        </>
    );
};

export default LinkRanking;
