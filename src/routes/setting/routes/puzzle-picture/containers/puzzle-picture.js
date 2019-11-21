import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingItemImage, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import { personalSettingImageSet } from '../../../../../modules/personal-setting';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { identity, times } from 'ramda';

const PuzzlePicture = () => {
    const dispatch = useDispatch();
    const { image } = useSelector((state) => state.personal);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Puzzle Picture'
        }));

        dispatch(prevLinkActGoBack());
    }, []);

    const setPuzzlePicture = useCallback((image) => {
        dispatch(personalSettingImageSet({
            image: image.toString()
        }));
    }, []);

    const pictureList = times(identity, 10);

    return (
        <SettingWrap>
            {
                pictureList.map((val) => {
                    return (
                        <SettingItem key={`P_${val}`} alignItemsCenter onClick={() => setPuzzlePicture(val)}>
                            <SettingItemImage image={val} />
                            {image === val.toString() ? <MdCheckmark /> : null}
                        </SettingItem>
                    )
                })
            }
        </SettingWrap>
    );
};

export default PuzzlePicture;
