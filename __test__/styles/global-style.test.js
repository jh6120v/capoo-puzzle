import React from 'react';
import { render } from '@testing-library/react';
import GlobalStyle from '../../src/styles/global-style';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/commons/theme';

describe('test global style.', () => {
    it('global style snap shot', () => {
        const { container } = render(
            <ThemeProvider theme={theme(false)}>
                <GlobalStyle />
            </ThemeProvider>
        );

        expect(container.textContent).toMatchSnapshot();
    });
});
