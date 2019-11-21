import React from 'react';
import PropTypes from 'prop-types';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import { Link } from 'react-router-dom';
import IosSettings from 'react-ionicons/lib/IosSettings';
import { FUNC_GO_BACK, FUNC_SETTING, USER_INFO } from '../constants';
import { history } from '../store';
import {
    HeaderStyle, NextLink, PrevLink, Title
} from '../styles/layout-style';
import { Setting } from '../styles/common-style';
import MdLogIn from "react-ionicons/lib/MdLogIn";
import MdLogOut from "react-ionicons/lib/MdLogOut";

const Header = ({ title, prev, next, login, loggedIn, logout }) => {
    const renderPrev = (prevState) => {
        if (prevState === USER_INFO) {
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
        }

        if (prevState === FUNC_GO_BACK) {
            return (
                <a onClick={() => history.goBack()}>
                    <IosArrowBack fontSize="25px" color="#fff" />
                </a>
            );
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
