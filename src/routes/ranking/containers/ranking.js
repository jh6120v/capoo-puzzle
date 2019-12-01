import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { headerTitleSet, prevLinkActClose } from '../../../modules/header';
import { useList } from 'react-firebase-hooks/database';
import { RankingInner } from "../styles";
import RankingInfo from "../components/ranking-info";

const Ranking = () => {
    const dispatch = useDispatch();
    const { loggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Ranking'
        }));

        dispatch(prevLinkActClose());
    }, []);

    const easyReference = firebase.database().ref('ranking/easy').orderByChild('secs').limitToFirst(5);
    const [easySnapshots, easyLoading, easyError] = useList(easyReference);

    const mediumReference = firebase.database().ref('ranking/medium').orderByChild('secs').limitToFirst(5);
    const [mediumSnapshots, mediumLoading, mediumError] = useList(mediumReference);

    const hardReference = firebase.database().ref('ranking/hard').orderByChild('secs').limitToFirst(5);
    const [hardSnapshots, hardLoading, hardError] = useList(hardReference);

    return (
        <RankingInner>
            <RankingInfo
                title="EASY LEVEL"
                loggedIn={loggedIn}
                snapshots={easySnapshots}
                loading={easyLoading}
                error={easyError}
            />
            <RankingInfo
                title="MEDIUM LEVEL"
                loggedIn={loggedIn}
                snapshots={mediumSnapshots}
                loading={mediumLoading}
                error={mediumError}
            />
            <RankingInfo
                title="HARD LEVEL"
                loggedIn={loggedIn}
                snapshots={hardSnapshots}
                loading={hardLoading}
                error={hardError}
            />
        </RankingInner>
    );
};

export default Ranking;
