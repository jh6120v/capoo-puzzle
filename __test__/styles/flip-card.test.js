import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { FlipCard, FlipCardBack, FlipCardFront } from '../../src/styles/flip-card';

describe('test flip-card', () => {
    it('test <FlipCard /> snapshot.', () => {
        const { container } = render(<FlipCard />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <FlipCard /> when render it.', () => {
        const { container } = render(<FlipCard />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('animation', 'iEMDfD');
        expect(tree).toHaveStyleRule('animation-fill-mode', 'forwards');
        expect(tree).toHaveStyleRule('animation-duration', '300ms');
        expect(tree).toHaveStyleRule('transform-style', 'preserve-3d');
        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('z-index', '1');
    });

    it('test <FlipCard /> when render with props width[50%] and height[50%]', () => {
        const { container } = render(<FlipCard first width={'50%'} height={'50%'} />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '50%');
        expect(tree).toHaveStyleRule('height', '50%');
    });

    it('test <FlipCard /> when render with props first[none]', () => {
        const { container } = render(<FlipCard first />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('animation', 'none');
    });

    it('test <FlipCard /> when render with props active[true]', () => {
        const { container } = render(<FlipCard active />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('animation', 'yBWqA');
    });

    it('test <FlipCard /> when render with props duration[200]', () => {
        const { container } = render(<FlipCard duration={200} />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('animation-duration', '200ms');
    });

    it('test <FlipCardFront /> snapshot.', () => {
        const { container } = render(<FlipCardFront />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <FlipCardFront /> when render it.', () => {
        const { container } = render(<FlipCardFront />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('right', '0');
        expect(tree).toHaveStyleRule('bottom', '0');
        expect(tree).toHaveStyleRule('backface-visibility', 'hidden');
    });

    it('test <FlipCardBack /> snapshot.', () => {
        const { container } = render(<FlipCardBack />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <FlipCardBack /> when render it.', () => {
        const { container } = render(<FlipCardBack />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('transform', 'rotateY(180deg)');
    });
});
