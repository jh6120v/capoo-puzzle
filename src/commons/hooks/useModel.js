import React, { useCallback, useState } from 'react';
import { Button, ModelContent, ModelFooter, ModelShadow, ModelTitle, ModelWrap } from '../../styles/model-style';

const useModel = (title, message = null, confirm = null, confirmText = 'Confirm', cancel = null, cancelText = 'Cancel') => {
    const [isShown, setShown] = useState(false);
    const showModal = useCallback(() => setShown(true), []);
    const hideModal = useCallback(() => setShown(false), []);

    const ModelBox = () => (
        <div>
            <ModelWrap>
                <ModelTitle>{title}</ModelTitle>
                <ModelContent>{message}</ModelContent>
                <ModelFooter>
                    {
                        cancel ? (<Button type="cancel" onClick={cancel}>{cancelText}</Button>) : null
                    }
                    {
                        confirm ? (<Button type="confirm" onClick={confirm}>{confirmText}</Button>) : null
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
