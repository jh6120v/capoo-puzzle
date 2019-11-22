import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { personalSettingGridsSet } from '../../../../../modules/personal-setting';

const GameLevel = () => {
    const dispatch = useDispatch();
    const { cols } = useSelector((state) => state.personal);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Game Level'
        }));

        dispatch(prevLinkActGoBack());
    }, []);

    const setGameLevel = useCallback((nums) => {
        dispatch(personalSettingGridsSet({
            cols: nums
        }));
    }, []);

    return (
        <SettingWrap>
            <SettingItem onClick={() => setGameLevel(3)}>
                Easy
                {cols === 3 ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem onClick={() => setGameLevel(4)}>
                Normal
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
