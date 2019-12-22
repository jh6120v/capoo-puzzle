import React, { useCallback } from 'react';
import { RadioBoxContent, RadioBoxGroup, RadioBoxItem, RadioBoxTitle } from "../../styles";
import { setLevel } from "../../modules/competition";
import { useDispatch, useSelector } from "react-redux";

const RadioBoxLevel = () => {
    const dispatch = useDispatch();
    const { level } = useSelector((state) => state.competition);

    const radioLevelList = ['easy', 'medium', 'hard'];
    const selectLevel = useCallback((val) => {
        dispatch(setLevel(val));
    }, []);

    return (
        <RadioBoxGroup>
            <RadioBoxTitle>Level</RadioBoxTitle>
            <RadioBoxContent total={radioLevelList.length}>
                {
                    radioLevelList.map((val) => (
                        <RadioBoxItem
                            key={val}
                            selected={val === level}
                            onClick={() => selectLevel(val)}
                        >
                            {val}
                        </RadioBoxItem>
                    ))
                }
            </RadioBoxContent>
        </RadioBoxGroup>
    );
};

export default RadioBoxLevel;
