import React, { useCallback, useState } from 'react';
import {
    Button, ModelContent, ModelFooter, ModelShadow, ModelTitle, ModelWrap
} from '../../styles/model-style';

const useModel = (title, message = null, confirm = null, confirmText = 'Confirm', cancel = null, cancelText = 'Cancel') => {
    const [isShown, setShown] = useState(false);
    const showModal = useCallback(() => setShown(true), []);
    const hideModal = useCallback(() => setShown(false), []);

    const ModelBox = () => (
        <div>
            <ModelWrap>
                <ModelTitle data-testid="display_title">{title}</ModelTitle>
                <ModelContent data-testid="display_message">{message}</ModelContent>
                <ModelFooter>
                    {
                        cancel ? (<Button type="cancel" onClick={cancel} data-testid="display_cancel_btn">{cancelText}</Button>) : null
                    }
                    {
                        confirm ? (<Button type="confirm" onClick={confirm} data-testid="display_confirm_btn">{confirmText}</Button>) : null
                    }
                </ModelFooter>
            </ModelWrap>
            <ModelShadow />
        </div>
    );

    return {
        ModelBox,
        isShown,
        showModal,
        hideModal
    };
};

export default useModel;
