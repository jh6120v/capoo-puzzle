import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Header from '../../src/components/header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/commons/theme';
import { RANKING_INFO } from '../../src/constants';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

describe('test header component', () => {
    beforeEach(() => {
        cleanup();
    });

    it('test <Header /> snapshot.', () => {
        const { container } = render(
            <ThemeProvider theme={theme(false)}>
                <Header />
            </ThemeProvider>
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Header /> when set title.', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme(false)}>
                <Header title="test_title" />
            </ThemeProvider>
        );

        expect(getByTestId('display_title').innerHTML).toEqual('test_title');
    });

    it('test <Header /> when show ranking and not login.', () => {
        const showModel = jest.fn();

        const { getByTestId } = render(
            <ThemeProvider theme={theme(false)}>
                <Header prev={RANKING_INFO} loggedIn={null} showModel={showModel} />
            </ThemeProvider>
        );

        expect(getByTestId('display_prev_link_login_btn').innerHTML).toEqual('<svg class="sc-bdVaJa fUuvxv" fill="#fff" width="25px" height="25px" viewBox="0 0 1024 1024" rotate="0"><path d="M352 896h128v-768h-128v768z M160 896h128v-320h-128v320z M544 896h128v-448h-128v448z M736 256v640h128v-640h-128z"></path></svg>');
    });

    it('test <Header /> when show ranking and logged in.', () => {
        const history = createBrowserHistory();

        const { getByTestId } = render(
            <ThemeProvider theme={theme(false)}>
                <Router history={history}>
                    <Header prev={RANKING_INFO} loggedIn={'loggedIn'} />
                </Router>
            </ThemeProvider>
        );

        expect(getByTestId('display_prev_link_ranking_btn').innerHTML).toEqual('<svg class="sc-bdVaJa fUuvxv" fill="#fff" width="25px" height="25px" viewBox="0 0 1024 1024" rotate="0"><path d="M352 896h128v-768h-128v768z M160 896h128v-320h-128v320z M544 896h128v-448h-128v448z M736 256v640h128v-640h-128z"></path></svg>');
    });
});
