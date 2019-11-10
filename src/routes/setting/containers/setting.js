import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { history } from '../../../store';
import { headerTitleSet, prevLinkActGoBack } from '../../../modules/header';
import { SettingWrap, SettingItem, Version } from '../styles';
import { personalSettingDarkModeChange, personalSettingReset } from '../../../modules/personal-setting';
import { useModel } from '../../../commons/hooks';
import Model from '../../../components/model';

const Setting = () => {
    const dispatch = useDispatch();
    const personal = useSelector((state) => state.personal);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Setting'
        }));

        dispatch(prevLinkActGoBack());
    }, [dispatch]);

    const linkTo = useCallback((url) => history.push(url), []);
    const darkModeChange = useCallback(() => dispatch(personalSettingDarkModeChange()), [dispatch]);

    const share = useCallback(() => {
        if (navigator.share) {
            navigator.share({
                title: 'Capoo Puzzle',
                text: 'Capoo Puzzle Game',
                url: 'https://capoo-puzzle.dailyofjames.com',
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
    }, []);

    const {
        ModelBox, isShown, showModal, hideModal
    } = useModel('Are you sure to reset?', useCallback(() => {
        hideModal();
        dispatch(personalSettingReset());
    }, [dispatch]));

    return (
        <>
            <SettingWrap>
                <SettingItem isTitle>GAME SETTINGS</SettingItem>
                <SettingItem onClick={() => linkTo('/setting/game-level')}>
                    Game level
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <SettingItem onClick={() => linkTo('/setting/puzzle-picture')}>
                    Puzzle picture
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <SettingItem onClick={darkModeChange}>
                    Tips
                    {personal.tips ? <MdCheckmark color="#4f6571" /> : null}
                </SettingItem>
                <SettingItem isTitle>GENERAL SETTINGS</SettingItem>
                <SettingItem onClick={darkModeChange}>
                    Enabled dark Mode
                    {personal.darkMode ? <MdCheckmark color="#4f6571" /> : null}
                </SettingItem>
                <SettingItem isSpace />
                <SettingItem onClick={showModal}>Reset</SettingItem>
                <SettingItem onClick={share}>Share</SettingItem>
                <SettingItem onClick={() => linkTo('/setting/about')}>
                    About
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <Version>Version 1.0.0</Version>
            </SettingWrap>
            <Model isShow={isShown}>
                <ModelBox />
            </Model>
        </>
    );
};

export default Setting;
