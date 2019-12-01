import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingItemImage, SettingInner } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import { personalSettingImageSet } from '../../../../../modules/personal-setting';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { identity, times } from 'ramda';

const PuzzlePicture = () => {
    const dispatch = useDispatch();
    const { loggedIn } = useSelector((state) => state.auth);
    const personal = useSelector((state) => state.personal);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Puzzle Picture'
        }));

        dispatch(prevLinkActGoBack());
    }, []);

    const setPuzzlePicture = useCallback((image) => {
        if (loggedIn && loggedIn !== 'loading') {
            const setting = firebase.database().ref('/users/' + loggedIn.uid);
            setting.child('image').set(image.toString());
        }

        dispatch(personalSettingImageSet({
            image: image.toString()
        }));
    }, [loggedIn]);

    const pictureList = times(identity, 10);

    return (
        <SettingInner>
            {
                pictureList.map((val) => (
                    <SettingItem key={`P_${val}`} alignItemsCenter onClick={() => setPuzzlePicture(val)}>
                        <SettingItemImage image={val} />
                        {personal.image === val.toString() ? <MdCheckmark /> : null}
                    </SettingItem>
                ))
            }
        </SettingInner>
    );
};

export default PuzzlePicture;
