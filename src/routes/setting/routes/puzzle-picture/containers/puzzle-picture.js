import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingItemImage, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import { personalSettingImageSet } from '../../../../../modules/personal-setting';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import p1 from '../../../../../assets/images/puzzle-1.jpg';
import p2 from '../../../../../assets/images/puzzle-2.jpg';
import p3 from '../../../../../assets/images/puzzle-3.jpg';
import p4 from '../../../../../assets/images/puzzle-4.jpg';
import p5 from '../../../../../assets/images/puzzle-5.jpg';
import p6 from '../../../../../assets/images/puzzle-6.jpg';
import p7 from '../../../../../assets/images/puzzle-7.jpg';
import p8 from '../../../../../assets/images/puzzle-8.jpg';
import p9 from '../../../../../assets/images/puzzle-9.jpg';
import p10 from '../../../../../assets/images/puzzle-10.jpg';

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
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-3.jpg')}>
                <SettingItemImage image={p3} />
                {image === 'puzzle-3.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-4.jpg')}>
                <SettingItemImage image={p4} />
                {image === 'puzzle-4.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-5.jpg')}>
                <SettingItemImage image={p5} />
                {image === 'puzzle-5.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-6.jpg')}>
                <SettingItemImage image={p6} />
                {image === 'puzzle-6.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-7.jpg')}>
                <SettingItemImage image={p7} />
                {image === 'puzzle-7.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-8.jpg')}>
                <SettingItemImage image={p8} />
                {image === 'puzzle-8.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-9.jpg')}>
                <SettingItemImage image={p9} />
                {image === 'puzzle-9.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem alignItemsCenter onClick={() => setPuzzlePicture('puzzle-10.jpg')}>
                <SettingItemImage image={p10} />
                {image === 'puzzle-10.jpg' ? <MdCheckmark /> : null}
            </SettingItem>
        </SettingWrap>
    );
};

export default PuzzlePicture;
