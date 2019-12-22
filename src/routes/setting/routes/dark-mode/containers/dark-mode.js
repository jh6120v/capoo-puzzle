import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingInner } from '../../../styles';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { colorModeSet } from '../../../../../modules/theme';
import { Wrapper } from "../../../../../styles/layout-style";
import LinkGoBack from "../../../../../components/navigation-items/link-go-back";
import Navigation from "../../../../../components/navigation";

const DarkMode = () => {
    const dispatch = useDispatch();
    const { colorMode, toggle } = useSelector((state) => state.theme);

    const darkModeChange = useCallback((type) => {
        toggle(type);

        dispatch(colorModeSet({
            colorMode: type
        }));
    }, [toggle]);

    return (
        <Wrapper>
            <Navigation
                title={'Dark Mode'}
                prev={<LinkGoBack />}
            />
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
        </Wrapper>
    );
};

export default DarkMode;
