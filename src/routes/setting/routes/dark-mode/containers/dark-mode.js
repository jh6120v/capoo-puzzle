import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingInner } from '../../../styles';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { colorModeSet } from '../../../../../modules/theme';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';

const DarkMode = () => {
    const dispatch = useDispatch();
    const { colorMode, toggle } = useSelector((state) => state.theme);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Dark Mode'
        }));

        dispatch(prevLinkActGoBack());
    }, []);

    const darkModeChange = useCallback((type) => {
        toggle(type);

        dispatch(colorModeSet({
            colorMode: type
        }));
    }, [toggle]);

    return (
        <SettingInner>
            <SettingItem onClick={() => darkModeChange('system')}>
                System Default
                {colorMode === 'system' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem onClick={() => darkModeChange('dark')}>
                Enable
                {colorMode === 'dark' ? <MdCheckmark /> : null}
            </SettingItem>
            <SettingItem onClick={() => darkModeChange('light')}>
                Disable
                {colorMode === 'light' ? <MdCheckmark /> : null}
            </SettingItem>
        </SettingInner>
    );
};

export default DarkMode;
