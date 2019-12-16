import React, { useCallback } from 'react';
import { RadioBoxContent, RadioBoxGroup, RadioBoxItem, RadioBoxItemImg, RadioBoxTitle } from "../../styles";
import { identity, times } from "ramda";
import { setImage } from "../../modules/competition";
import { useDispatch, useSelector } from "react-redux";

const RadioBoxImage = () => {
    const dispatch = useDispatch();
    const { image } = useSelector((state) => state.competition);

    const imageList = times(identity, 10);
    const selectImage = useCallback((val) => {
        dispatch(setImage(val.toString()));
    }, []);

    return (
        <RadioBoxGroup>
            <RadioBoxTitle>Picture</RadioBoxTitle>
            <RadioBoxContent scroll={true}>
                {
                    imageList.map((val) => (
                        <RadioBoxItem
                            key={`i_${val}`}
                            onClick={() => selectImage(val)}
                        >
                            <RadioBoxItemImg image={val} selected={image === val.toString()} />
                        </RadioBoxItem>
                    ))
                }
            </RadioBoxContent>
        </RadioBoxGroup>
    );
};

export default RadioBoxImage;
