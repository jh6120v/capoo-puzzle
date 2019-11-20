import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingItemImage, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import { personalSettingImageSet } from '../../../../../modules/personal-setting';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import p1 from '../../../../../assets/images/puzzle-1.jpg';
import p2 from '../../../../../assets/images/puzzle-2.jpg';

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
            image: image
        }));
    }, []);

    return (
        <SettingWrap>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-1.jpg')}>
                <SettingItemImage image={p1} />
                {image === 'puzzle-1.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-2.jpg')}>
                <SettingItemImage image={p2} />
                {image === 'puzzle-2.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
        </SettingWrap>
    );
};

export default PuzzlePicture;
