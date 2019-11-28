import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { headerTitleSet, prevLinkActClose } from '../../../modules/header';
import { ContainerInner } from '../../../styles/layout-style';
import { useList } from 'react-firebase-hooks/database';

const Ranking = () => {
    const dispatch = useDispatch();
    const { login, loggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Ranking'
        }));

        dispatch(prevLinkActClose());
    }, []);

    const reference = firebase.database().ref('ranking/easy').orderByChild('secs').limitToFirst(3);
    const [snapshots, loading, error] = useList(reference);

    return (
        <ContainerInner>
            {loggedIn !== "loading" ? (
                <>
                    {loggedIn ? (
                        <div>
                            {error && <strong>Error: {error}</strong>}
                            {loading && <span>List: Loading...</span>}
                            {!loading && snapshots && (
                                <>
                                    {snapshots.map(v => (
                                        <div key={v.key}>{v.val().secs}, </div>
                                    ))}
                                </>
                            )}
                        </div>
                    ) : (
                        <div onClick={login}>Sign with Google</div>
                    )}
                </>
            ) : (
                "loading..."
            )}

        </ContainerInner>
    );
};

export default Ranking;
