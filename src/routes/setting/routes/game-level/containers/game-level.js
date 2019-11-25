import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { personalSettingGridsSet } from '../../../../../modules/personal-setting';

const GameLevel = () => {
    const dispatch = useDispatch();
    const { loggedIn } = useSelector((state) => state.auth);
    const { cols } = useSelector((state) => state.personal);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Game Level'
        }));

        dispatch(prevLinkActGoBack());
    }, []);

    const setGameLevel = useCallback((nums) => {
        if (loggedIn) {
            const setting = firebase.database().ref('/users/' + loggedIn.uid);
            setting.child('cols').set(nums);

            return true;
        }

        dispatch(personalSettingGridsSet({
            cols: nums
        }));
    }, [loggedIn]);

    return (
        <SettingWrap>
            <SettingItem onClick={() => setGameLevel(3)}>
                Easy
                {cols === 3 ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem onClick={() => setGameLevel(4)}>
                Medium
                {cols === 4 ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem onClick={() => setGameLevel(5)}>
                Hard
                {cols === 5 ? <MdCheckmark /> : null}
            </SettingItem>
        </SettingWrap>
    );
};

export default GameLevel;
