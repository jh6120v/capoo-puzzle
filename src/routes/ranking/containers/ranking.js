import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useList } from 'react-firebase-hooks/database';
import { RankingInner } from "../styles";
import RankingInfo from "../components/ranking-info";
import * as firebase from 'firebase/app';
import moment from 'moment';
import { Wrapper } from "../../../styles/layout-style";
import Navigation from "../../../components/navigation";
import LinkClose from "../../../components/navigation-items/link-close";
import { history } from '../../../store'

const Ranking = () => {
    const { loggedIn } = useSelector((state) => state.auth);
    const yearMonth = moment().format('YYYYMM');
    const startDayOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endDayOfMonth = moment().endOf('month').format('YYYY-MM-DD');

    const easyReference = firebase.database().ref(`ranking/${yearMonth}/easy`).orderByChild('secs').limitToFirst(5);
    const [easySnapshots, easyLoading, easyError] = useList(easyReference);

    const mediumReference = firebase.database().ref(`ranking/${yearMonth}/medium`).orderByChild('secs').limitToFirst(5);
    const [mediumSnapshots, mediumLoading, mediumError] = useList(mediumReference);

    const hardReference = firebase.database().ref(`ranking/${yearMonth}/hard`).orderByChild('secs').limitToFirst(5);
    const [hardSnapshots, hardLoading, hardError] = useList(hardReference);

    return (
        <Wrapper>
            <Navigation
                title={`${startDayOfMonth} - ${endDayOfMonth}`}
                prev={<LinkClose func={() => history.push('/')} />}
            />
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
        </Wrapper>
    );
};

export default Ranking;
