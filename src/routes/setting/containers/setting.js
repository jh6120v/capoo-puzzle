import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { headerTitleSet, prevLinkActGoBack } from '../../../modules/header';
import { SettingInner, SettingItem, Version, UserInfo, UserInfoAvatar, UserName } from '../styles';
import {
    personalSettingReset,
    personalSettingTipsChange
} from '../../../modules/personal-setting';
import Model from '../../../components/model';
import { colorModeSet } from '../../../modules/theme';
import useModel from '../../../commons/hooks/useModel';
import { useHistory } from 'react-router';
import { personalRecordAllSet } from "../../../modules/personal-record";
import { PERSONAL_DEFAULT_RECORD, PERSONAL_DEFAULT_SETTING } from "../../../constants";

const Setting = () => {
    const history = useHistory();
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
        if (loggedIn && loggedIn !== 'loading') {
            const setting = firebase.database().ref('/users/' + loggedIn.uid);
            setting.child('tips').set(!tips);
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

        // 同步到 firebase
        if (loggedIn && loggedIn !== 'loading') {
            const setting = firebase.database().ref('/users/' + loggedIn.uid);
            setting.set({
                ...PERSONAL_DEFAULT_SETTING
            });
        }

        toggle('system');

        dispatch(colorModeSet({
            colorMode: 'system'
        }));
    }, [toggle]), 'Confirm', useCallback(() => {
        hideModal();
    }, []), 'Cancel');

    const logoutAndReset = useCallback(() => {
        logout();
        dispatch(personalSettingReset());
        dispatch(personalRecordAllSet(PERSONAL_DEFAULT_RECORD));
    }, []);

    return (
        <>
            <SettingInner>
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
                {
                    loggedIn !== "loading" ? (
                        <>
                            {
                                loggedIn ? (
                                    <SettingItem alignItemsCenter justifyContentSpaceAround onClick={logoutAndReset}>
                                        Sign out
                                    </SettingItem>
                                ) : (
                                    <SettingItem alignItemsCenter justifyContentSpaceAround onClick={login}>
                                        Sign with Google
                                    </SettingItem>
                                )
                            }
                        </>
                    ) : (
                        <SettingItem alignItemsCenter justifyContentSpaceAround>
                            loading...
                        </SettingItem>
                    )
                }
                <Version>Version 1.0.0</Version>
            </SettingInner>
            <Model isShow={isShown}>
                <ModelBox />
            </Model>
        </>
    );
};

export default Setting;
