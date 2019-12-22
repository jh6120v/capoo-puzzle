import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useModel from '../../../src/commons/hooks/useModel';

describe('test useModel hook', () => {
    it('test', () => {
        const { result } = renderHook(() => useModel('title', 'message', () => {

        }, 'Confirm', () => {

        }, 'Cancel'));

        const { container, getByTestId } = render(<result.current.ModelBox />);

        expect(container.firstChild).toMatchSnapshot();

        expect(getByTestId('display_title').innerHTML).toEqual('title');
        expect(getByTestId('display_message').innerHTML).toEqual('message');
        expect(getByTestId('display_confirm_btn').innerHTML).toEqual('Confirm');
        expect(getByTestId('display_cancel_btn').innerHTML).toEqual('Cancel');

        act(() => {
            result.current.showModal();
        });

        expect(result.current.isShown).toBe(true);

        act(() => {
            result.current.hideModal();
        });

        expect(result.current.isShown).toBe(false);
    });
});
