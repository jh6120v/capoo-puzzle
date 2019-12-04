import React from 'react';
import PropTypes from 'prop-types';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import { Link } from 'react-router-dom';
import IosSettings from 'react-ionicons/lib/IosSettings';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING, RANKING_INFO } from '../constants';
import { history } from '../store';
import {
    HeaderStyle, NextLink, NextLinkItem, PrevLink, PrevLinkItem, Title
} from '../styles/layout-style';
import IosStats from 'react-ionicons/lib/IosStats';
import MdClose from 'react-ionicons/lib/MdClose';

const Header = ({ title, prev, next, loggedIn, showModal }) => {
    const renderPrev = (prevState) => {
        switch (prevState) {
            case RANKING_INFO:
                return (
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
                );

                break;
            case FUNC_GO_BACK:
                return (
                    <PrevLinkItem>
                        <a onClick={() => history.goBack()}>
                            <IosArrowBack fontSize="25px" color="#fff" />
                        </a>
                    </PrevLinkItem>
                );

                break;
            case FUNC_CLOSE:
                return (
                    <PrevLinkItem>
                        <Link to="/">
                            <MdClose fontSize="25px" color="#fff" />
                        </Link>
                    </PrevLinkItem>
                );

                break;
            default:
                return null;

        }
    };

    const renderNext = (nextState) => {
        if (nextState === FUNC_SETTING) {
            return (
                <NextLinkItem>
                    <Link to="/setting">
                        <IosSettings fontSize="25px" color="#fff" />
                    </Link>
                </NextLinkItem>
            );
        }

        return null;
    };

    return (
        <HeaderStyle data-testid="display_header">
            <PrevLink data-testid="display_prev_link">{renderPrev(prev)}</PrevLink>
            <Title data-testid="display_title">{title}</Title>
            <NextLink data-testid="display_next_link">{renderNext(next)}</NextLink>
        </HeaderStyle>
    );
};

Header.propsTypes = {
    title: PropTypes.string,
    prev: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    next: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Header;
