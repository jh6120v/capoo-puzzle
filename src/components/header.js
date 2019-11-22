import React from 'react';
import PropTypes from 'prop-types';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import { Link } from 'react-router-dom';
import IosSettings from 'react-ionicons/lib/IosSettings';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING, RANKING_INFO, USER_INFO } from '../constants';
import { history } from '../store';
import {
    CloseButton,
    HeaderStyle, NextLink, PrevLink, Setting, Title
} from '../styles/layout-style';
import MdLogIn from "react-ionicons/lib/MdLogIn";
import MdLogOut from "react-ionicons/lib/MdLogOut";
import IosStats from 'react-ionicons/lib/IosStats';
import MdClose from 'react-ionicons/lib/MdClose';

const Header = ({ title, prev, next, login, loggedIn, logout }) => {
    const renderPrev = (prevState) => {
        switch (prevState) {
            case RANKING_INFO:
                return (
                    <div>
                        <Link to="/ranking">
                            <IosStats fontSize="25px" color="#fff" />
                        </Link>
                    </div>
                );

                break;
            case USER_INFO:
                return (
                    <div>
                        {loggedIn !== "loading" ? (
                            <>
                                {loggedIn ? (
                                    <MdLogOut fontSize="25px" color="#fff" onClick={logout} />
                                ) : (
                                    <MdLogIn fontSize="25px" color="#fff" onClick={login} />
                                )}
                            </>
                        ) : (
                            "loading..."
                        )}
                    </div>
                );

                break;
            case FUNC_GO_BACK:
                return (
                    <a onClick={() => history.goBack()}>
                        <IosArrowBack fontSize="25px" color="#fff" />
                    </a>
                );

                break;
            case FUNC_CLOSE:
                return (
                    <CloseButton>
                        <Link to="/">
                            <MdClose fontSize="25px" color="#fff" />
                        </Link>
                    </CloseButton>
                );

                break;
            default:
                return null;

        }

        return null;
    };

    const renderNext = (nextState) => {
        if (nextState === FUNC_SETTING) {
            return (
                <Setting>
                    <Link to="/setting">
                        <IosSettings fontSize="25px" color="#fff" />
                    </Link>
                </Setting>
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
