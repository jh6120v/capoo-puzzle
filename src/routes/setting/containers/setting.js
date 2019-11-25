import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { history } from '../../../store';
import { headerTitleSet, prevLinkActGoBack } from '../../../modules/header';
import { SettingWrap, SettingItem, Version, UserInfo, UserInfoAvatar, UserName } from '../styles';
import {
    personalSettingReset,
    personalSettingTipsChange
} from '../../../modules/personal-setting';
import Model from '../../../components/model';
import { colorModeSet } from '../../../modules/theme';
import useModel from '../../../commons/hooks/useModel';

const Setting = () => {
    const dispatch = useDispatch();
    const { tips } = useSelector((state) => state.personal);
    const { login, logout, loggedIn } = useSelector((state) => state.auth);
    const { toggle } = useSelector((state) => state.theme);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Setting'
        }));

        dispatch(prevLinkActGoBack());
    }, []);

    const linkTo = useCallback((url) => history.push(url), []);
    const tipsChange = useCallback((tips) => {
        if (loggedIn) {
            const setting = firebase.database().ref('/users/' + loggedIn.uid);
            setting.child('tips').set(!tips);

            return true;
        }

        dispatch(personalSettingTipsChange());
    }, [loggedIn]);

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
    } = useModel('', 'Are you sure to reset?', useCallback(() => {
        hideModal();

        dispatch(personalSettingReset());

        toggle('system');

        dispatch(colorModeSet({
            colorMode: 'system'
        }));
    }, [toggle]), 'Confirm', useCallback(() => {
        hideModal();
    }, []), 'Cancel');

    return (
        <>
            <SettingWrap>
                {
                    loggedIn && loggedIn !== 'loading' ? (
                        <SettingItem>
                            <UserInfo>
                                <UserInfoAvatar avatar={loggedIn.photoURL} />
                                <UserName>{loggedIn.displayName}</UserName>
                            </UserInfo>
                        </SettingItem>
                    ) : null
                }
                <SettingItem isTitle>GAME SETTINGS</SettingItem>
                <SettingItem onClick={() => linkTo('/setting/game-level')}>
                    Game level
                    <IosArrowForward />
                </SettingItem>
                <SettingItem onClick={() => linkTo('/setting/puzzle-picture')}>
                    Puzzle picture
                    <IosArrowForward />
                </SettingItem>
                <SettingItem onClick={() => tipsChange(tips)}>
                    Tips
                    {tips ? <MdCheckmark /> : null}
                </SettingItem>
                <SettingItem isTitle>GENERAL SETTINGS</SettingItem>
                <SettingItem onClick={() => linkTo('/setting/dark-mode')}>
                    Dark mode
                    <IosArrowForward />
                </SettingItem>
                <SettingItem isSpace />
                <SettingItem onClick={showModal}>Reset</SettingItem>
                <SettingItem onClick={share}>Share</SettingItem>
                <SettingItem onClick={() => linkTo('/setting/about')}>
                    About
                    <IosArrowForward />
                </SettingItem>
                <SettingItem isSpace />
                <SettingItem alignItemsCenter justifyContentSpaceAround>
                    <div>
                        {loggedIn !== "loading" ? (
                            <>
                                {loggedIn ? (
                                    <div onClick={logout}>Sign out</div>
                                ) : (
                                    <div onClick={login}>Sign with Google</div>
                                )}
                            </>
                        ) : (
                            "loading..."
                        )}
                    </div>
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
