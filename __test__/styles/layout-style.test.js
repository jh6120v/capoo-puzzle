import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import {
    Container, ContainerInner, NavigationBar, NextLink, NextLinkItem, PrevLink, PrevLinkItem, Title, Wrapper
} from '../../src/styles/layout-style';
import { theme } from '../../src/commons/theme';

describe('test layout-style.', () => {
    it('test <Wrapper /> snapshot.', () => {
        const { container } = render(<Wrapper />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Wrapper /> when render it.', () => {
        const { container } = render(<Wrapper />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('max-width', '400px');
        expect(tree).toHaveStyleRule('min-height', '100%');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('margin', '0');
        expect(tree).toHaveStyleRule('margin', '0 auto', {
            media: '(min-width:480px)'
        });
    });

    it('test <NavigationBar /> snapshot.', () => {
        const { container } = render(
            <ThemeProvider theme={theme(false)}>
                <NavigationBar />
            </ThemeProvider>
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <NavigationBar /> when render it.', () => {
        const { container } = render(
            <ThemeProvider theme={theme(false)}>
                <NavigationBar />
            </ThemeProvider>
        );
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', 'calc(44px + env(safe-area-inset-top))');
        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('padding', 'env(safe-area-inset-top) 5px 0 5px');
        expect(tree).toHaveStyleRule('overflow', 'hidden');
        expect(tree).toHaveStyleRule('z-index', '3');
        expect(tree).toHaveStyleRule('left', '50%', {
            media: '(min-width:480px)'
        });
        expect(tree).toHaveStyleRule('width', '400px', {
            media: '(min-width:480px)'
        });
        expect(tree).toHaveStyleRule('margin-left', '-200px', {
            media: '(min-width:480px)'
        });
        expect(tree).toHaveStyleRule('color', '#ffffff');
        expect(tree).toHaveStyleRule('background-color', '#6cb8cf');
    });

    it('test <NavigationBar /> when dark mode enabled', () => {
        const { container } = render(
            <ThemeProvider theme={theme(true)}>
                <NavigationBar />
            </ThemeProvider>
        );
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('color', '#ffffff');
        expect(tree).toHaveStyleRule('background-color', '#262626');
    });

    it('test <NavigationBar /> when prop bgHide.', () => {
        const { container } = render(
            <ThemeProvider theme={theme(true)}>
                <NavigationBar bgHide={true} />
            </ThemeProvider>
        );
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0)');
    });

    it('test <Title /> snapshot.', () => {
        const { container } = render(<Title />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Title /> when render it.', () => {
        const { container } = render(<Title />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('font-size', '20px');
        expect(tree).toHaveStyleRule('font-weight', 'bold');
    });

    it('test <PrevLink /> snapshot', () => {
        const { container } = render(<PrevLink />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PrevLink /> when render it.', () => {
        const { container } = render(<PrevLink />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('min-width', '25px');
        expect(tree).toHaveStyleRule('height', '25px');
    });

    it('test <NextLink /> snapshot.', () => {
        const { container } = render(<NextLink />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <NextLink /> when render it.', () => {
        const { container } = render(<NextLink />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('min-width', '25px');
        expect(tree).toHaveStyleRule('height', '25px');
    });

    it('test <PrevLinkItem /> snapshot.', () => {
        const { container } = render(<PrevLinkItem />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PrevLinkItem /> when ', () => {
        const { container } = render(<PrevLinkItem />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('z-index', '3');
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('font-size', '25px');
        expect(tree).toHaveStyleRule('font-family', 'sans-serif');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
        expect(tree).toHaveStyleRule('transition', 'all 0.2s ease-in');
        expect(tree).toHaveStyleRule('padding-left', '3px');
    });

    it('test <NextLinkItem /> snapshot.', () => {
        const { container } = render(<NextLinkItem />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <NextLinkItem /> when ', () => {
        const { container } = render(<NextLinkItem />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('z-index', '3');
        expect(tree).toHaveStyleRule('transition', 'all 0.2s ease-in');
        expect(tree).toHaveStyleRule('padding-right', '3px');
        expect(tree).toHaveStyleRule('color', '#fff', {
            modifier: 'a'
        });
        expect(tree).toHaveStyleRule('font-size', '1.2rem', {
            modifier: 'a'
        });
        expect(tree).toHaveStyleRule('cursor', 'pointer', {
            modifier: 'a'
        });
    });

    it('test <Container /> snapshot.', () => {
        const { container } = render(<Container />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Container /> when render it.', () => {
        const { container } = render(<Container />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('flex-grow', '1');
        expect(tree).toHaveStyleRule('flex-shrink', '1');
        expect(tree).toHaveStyleRule('flex-basis', 'auto');
    });

    it('test <ContainerInner /> snapshot.', () => {
        const { container } = render(
            <ThemeProvider theme={theme(false)}>
                <ContainerInner />
            </ThemeProvider>
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ContainerInner /> when render.', () => {
        const {container} = render(
            <ThemeProvider theme={theme(false)}>
                <ContainerInner />
            </ThemeProvider>
        );
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('padding-top', 'calc(44px + env(safe-area-inset-top))');
        expect(tree).toHaveStyleRule('background-color', '#aadff0');
    });

    it('test <ContainerInner /> when dark mode enabled', () => {
        const { container } = render(
            <ThemeProvider theme={theme(true)}>
                <ContainerInner />
            </ThemeProvider>
        );
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-color', '#121212')
    });
});
