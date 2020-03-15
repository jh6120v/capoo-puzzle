import React from 'react';
import PropTypes from 'prop-types';
import { Times } from '../styles/puzzle-style';

const Clock = (props) => {
    const { timer } = props;
    if (timer.timerState === 'reset') {
        return '-- : --';
    }

    if (timer.seconds === 0) {
        return '00 : 00';
    }

    const restMinutes = ~~(timer.seconds / 60) % 60;
    const restSeconds = (timer.seconds - restMinutes * 60) % 60;

    return (<Times>{~~(restMinutes / 10)}{restMinutes % 10} : {~~(restSeconds / 10)}{restSeconds % 10}</Times>);
};

export default Clock;
