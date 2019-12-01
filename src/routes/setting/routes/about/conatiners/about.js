import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import { SettingInner } from '../../../styles';
import { AboutContent, AppName } from '../styles';

const About = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'About'
        }));

        dispatch(prevLinkActGoBack());
    }, [dispatch]);

    return (
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
        </SettingInner>
    );
};

export default About;
