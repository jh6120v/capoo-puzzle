import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
    Button,
    ModelContent,
    ModelFooter,
    ModelShadow,
    ModelTitle,
    ModelWrap
} from '../../src/styles/model-style';

describe('test model-style', () => {
    it('test <ModelShadow /> snapshot.', () => {
        const { container } = render(<ModelShadow />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelShadow /> when render it.', () => {
        const { container } = render(<ModelShadow />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('background-color', 'rgba(4,4,15,.4)');
        expect(tree).toHaveStyleRule('z-index', '10');
    });

    it('test <ModelWrap /> snapshot.', () => {
        const { container } = render(<ModelWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelWrap /> when render it.', () => {
        const { container } = render(<ModelWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('left', '50%');
        expect(tree).toHaveStyleRule('top', '50%');
        expect(tree).toHaveStyleRule('width', '270px');
        expect(tree).toHaveStyleRule('max-width', '72%');
        expect(tree).toHaveStyleRule('background-color', 'rgb(248,248,248)');
        expect(tree).toHaveStyleRule('z-index', '11');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('transform', 'translateX(-50%) translateY(-50%)');
        expect(tree).toHaveStyleRule('border-radius', '14px');
    });

    it('test <ModelTitle /> snapshot.', () => {
        const { container } = render(<ModelTitle />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelTitle /> when render it', () => {
        const { container } = render(<ModelTitle />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '19px 16px 0 16px');
        expect(tree).toHaveStyleRule('color', '#000');
        expect(tree).toHaveStyleRule('font-size', '17px');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('letter-spacing', '-.41px');
        expect(tree).toHaveStyleRule('line-height', '22px');
    });

    it('test <ModelContent /> snapshot.', () => {
        const { container } = render(<ModelContent />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelContent /> when render it.', () => {
        const { container } = render(<ModelContent />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '0 16px 24px 16px');
        expect(tree).toHaveStyleRule('color', '#000');
        expect(tree).toHaveStyleRule('font-size', '13px');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('line-height', '18px');
        expect(tree).toHaveStyleRule('letter-spacing', '-.08px');
        expect(tree).toHaveStyleRule('font-weight', '300');
    });

    it('test <ModelFooter /> snapshot.', () => {
        const { container } = render(<ModelFooter />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelFooter /> when render it.', () => {
        const { container } = render(<ModelFooter />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-wrap', 'nowrap');
        expect(tree).toHaveStyleRule('border-top', '.5px solid rgba(4,4,15,.4)');
    });

    it('test <Button /> snapshot.', () => {
        const { container } = render(<Button />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ConfirmButton /> when render it.', () => {
        const { container } = render(<Button />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('font-size', '17px');
        expect(tree).toHaveStyleRule('line-height', '22px');
        expect(tree).toHaveStyleRule('letter-spacing', '-.41px');
        expect(tree).toHaveStyleRule('border-right', '.5px solid rgba(4,4,15,.4)');
        expect(tree).toHaveStyleRule('padding', '11.5px 0 10px 0');
        expect(tree).toHaveStyleRule('border-right', 'none', {
            modifier: '&:last-child:not(:first-child)'
        });
        expect(tree).toHaveStyleRule('color', '#8e8e93');
    });

    it('test <ConfirmButton /> when render with type[confirm] prop.', () => {
        const { container } = render(<Button type={'confirm'} />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('color', '#007aff');
    })
});
