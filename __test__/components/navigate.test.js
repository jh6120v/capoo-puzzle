import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navigation from '../../src/components/navigation';
import { theme } from '../../src/commons/theme';
import { ThemeProvider } from 'styled-components';

describe('test navigate component.', () => {
    it('<Navigation /> snapshot.', () => {
        const { container } = render(
            <ThemeProvider theme={theme(false)}>
                <Navigation />
            </ThemeProvider>
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should <Navigation /> render with prev prop.', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme(false)}>
                <Navigation prev={<div>test</div>} />
            </ThemeProvider>
        );

        expect(getByText('test')).toBeTruthy();
    });

    it('should <Navigation /> render with next prop.', () => {
        cleanup();

        const { getByText } = render(
            <ThemeProvider theme={theme(false)}>
                <Navigation next={<div>test</div>} />
            </ThemeProvider>
        );

        expect(getByText('test')).toBeTruthy();
    });
});
