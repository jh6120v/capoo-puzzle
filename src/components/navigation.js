import React from 'react';
import { NavigationBar, NextLink, PrevLink, Title } from "../styles/layout-style";
import PropTypes from "prop-types";

const Navigation = ({ title, prev, next, bgHide }) => {
    return (
        <NavigationBar bgHide={bgHide}>
            <PrevLink>
                {
                    typeof prev !== 'undefined' ? prev : null
                }
            </PrevLink>
            <Title>{title}</Title>
            <NextLink>
                {
                    typeof next !== 'undefined' ? next : null
                }
            </NextLink>
        </NavigationBar>
    );
};

Navigation.propsTypes = {
    title: PropTypes.string,
    prev: PropTypes.oneOfType([
        PropTypes.object
    ]),
    next: PropTypes.oneOfType([
        PropTypes.object
    ])
};

export default Navigation;
