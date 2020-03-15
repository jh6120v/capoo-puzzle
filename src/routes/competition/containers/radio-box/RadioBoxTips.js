import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    RadioBoxContent, RadioBoxGroup, RadioBoxItem, RadioBoxTitle
} from '../../styles';
import { setTips } from '../../modules/competition';

const RadioBoxTips = () => {
    const dispatch = useDispatch();
    const { tips } = useSelector((state) => state.competition);

    const tipsList = ['yes', 'no'];
    const selectTips = useCallback((val) => {
        dispatch(setTips(val === 'yes'));
    }, [dispatch]);

    return (
        <RadioBoxGroup>
            <RadioBoxTitle>Tips</RadioBoxTitle>
            <RadioBoxContent total={tipsList.length}>
                {
                    tipsList.map((val) => (
                        <RadioBoxItem
                            key={val}
                            selected={val === (tips ? 'yes' : 'no')}
                            onClick={() => selectTips(val)}
                        >
                            {val}
                        </RadioBoxItem>
                    ))
                }
            </RadioBoxContent>
        </RadioBoxGroup>
    );
};

export default RadioBoxTips;
