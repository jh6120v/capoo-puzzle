import React from 'react';
import { SettingInner } from '../../../styles';
import { AboutContent, AppName, AppQrCode } from '../styles';
import { Wrapper } from "../../../../../styles/layout-style";
import LinkGoBack from "../../../../../components/navigation-items/link-go-back";
import Navigation from "../../../../../components/navigation";

const About = () => {
    return (
        <Wrapper>
            <Navigation
                title={'About'}
                prev={<LinkGoBack />}
            />
            <SettingInner>
                <AboutContent>
                    <AppName>Capoo Puzzle</AppName>
                    This is an PWA for testing purposes only.
                    <br />
                    Image copyright is
                    <a href="https://www.facebook.com/capoocat/" target="_new"> Capoo </a>
                    <br />
                    <br />
                    Author: James Yu
                    <br />
                    E-mail:
                    <a href="mailto:jh6120v@msn.com" target="_new"> jh6120v@msn.com</a>
                    <br />
                    Github:
                    <a href="https://github.com/jh6120v/capoo-puzzle" target="_new"> https://github.com/jh6120v/capoo-puzzle</a>
                </AboutContent>
                <AppQrCode />
            </SettingInner>
        </Wrapper>
    );
};

export default About;
