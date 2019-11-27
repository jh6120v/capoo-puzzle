import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerTitleSet, prevLinkActClose } from '../../../modules/header';
import { ContainerInner } from '../../../styles/layout-style';
import { ascend, prop, sortWith } from 'ramda';

const Ranking = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Ranking'
        }));

        dispatch(prevLinkActClose());
    }, []);

    useEffect(() => {
        const rankingEasy = firebase.database().ref('test/easy').orderByChild('secs').limitToFirst(3);
        rankingEasy.on('child_added', (snapshot) => {
            const val = snapshot.val();

            console.log(val);
            console.log(Object.values(val));
            // if (val !== null) {
            //     const sortVal = sortWith([
            //         ascend(prop('secs'))
            //     ])(Object.values(val));
            //
            //     console.log(sortVal);
            // }
        });

        return () => {
            rankingEasy.off();
        };
    }, []);

    return (
        <ContainerInner>
            Ranking
        </ContainerInner>
    );
};

export default Ranking;
