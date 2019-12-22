import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingItemImage, SettingInner } from '../../../styles';
import { personalSettingImageSet } from '../../../../../modules/personal-setting';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { identity, times } from 'ramda';
import * as firebase from 'firebase/app';
import { Wrapper } from "../../../../../styles/layout-style";
import LinkGoBack from "../../../../../components/navigation-items/link-go-back";
import Navigation from "../../../../../components/navigation";

const PuzzlePicture = () => {
    const dispatch = useDispatch();
    const { loggedIn } = useSelector((state) => state.auth);
    const personal = useSelector((state) => state.personal);

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
        <Wrapper>
            <Navigation
                title={'Puzzle Picture'}
                prev={<LinkGoBack />}
            />
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
        </Wrapper>
    );
};

export default PuzzlePicture;
