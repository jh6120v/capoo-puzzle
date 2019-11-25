import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { personalSettingLevelSet } from '../../../../../modules/personal-setting';

const GameLevel = () => {
    const dispatch = useDispatch();
    const { loggedIn } = useSelector((state) => state.auth);
    const { level } = useSelector((state) => state.personal);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Game Level'
        }));

        dispatch(prevLinkActGoBack());
    }, []);

    const setGameLevel = useCallback((level) => {
        if (loggedIn) {
            const setting = firebase.database().ref('/users/' + loggedIn.uid);
            setting.child('level').set(level);

            return true;
        }

        dispatch(personalSettingLevelSet({
            level: level
        }));
    }, [loggedIn]);

    return (
        <SettingWrap>
            <SettingItem onClick={() => setGameLevel('easy')}>
                Easy
                {level === 'easy' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem onClick={() => setGameLevel('medium')}>
                Medium
                {level === 'medium' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem onClick={() => setGameLevel('hard')}>
                Hard
                {level === 'hard' ? <MdCheckmark /> : null}
            </SettingItem>
        </SettingWrap>
    );
};

export default GameLevel;
