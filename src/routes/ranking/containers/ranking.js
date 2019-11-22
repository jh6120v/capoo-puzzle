import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerTitleSet, prevLinkActClose } from '../../../modules/header';
import { ContainerInner } from '../../../styles/layout-style';

const Ranking = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Ranking'
        }));

        dispatch(prevLinkActClose());
    }, []);

    return (
        <ContainerInner>
            Ranking
        </ContainerInner>
    );
};

export default Ranking;
