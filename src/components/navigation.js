import React from 'react';
import PropTypes from 'prop-types';
import {
    NavigationBar, NextLink, PrevLink, Title
} from '../styles/layout-style';

const Navigation = ({
    title, prev, next, bgHide
}) => (
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
