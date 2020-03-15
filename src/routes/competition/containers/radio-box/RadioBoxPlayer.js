import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    RadioBoxContent, RadioBoxGroup, RadioBoxItem, RadioBoxTitle
} from '../../styles';
import { setPlayer } from '../../modules/competition';

const RadioBoxPlayer = () => {
    const dispatch = useDispatch();
    const { player } = useSelector((state) => state.competition);

    const radioPlayerList = [2, 3, 4];
    const selectPlayers = useCallback((val) => {
        dispatch(setPlayer(val));
    }, [dispatch]);

    return (
        <RadioBoxGroup>
            <RadioBoxTitle>Players</RadioBoxTitle>
            <RadioBoxContent total={radioPlayerList.length}>
                {
                    radioPlayerList.map((val) => (
                        <RadioBoxItem
                            key={val}
                            selected={val === player}
                            onClick={() => selectPlayers(val)}
                        >
                            {val}
                            {' '}
players
                        </RadioBoxItem>
                    ))
                }
            </RadioBoxContent>
        </RadioBoxGroup>
    );
};

export default RadioBoxPlayer;
