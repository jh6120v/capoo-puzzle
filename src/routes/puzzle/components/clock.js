import React from 'react';
import PropTypes from 'prop-types';
import { Times } from "../styles/puzzle-style";

const Clock = ({ seconds }) => {
    const restMinutes = ~~(seconds / 60) % 60;
    const restSeconds = (seconds - restMinutes * 60) % 60;

    return (
        <Times>{~~(restMinutes / 10)}{restMinutes % 10} : {~~(restSeconds / 10)}{restSeconds % 10}</Times>
    );
};

Clock.propTypes = {
    seconds: PropTypes.number
};

export default Clock;