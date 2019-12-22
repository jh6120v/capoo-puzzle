import React from 'react';
import PropTypes from 'prop-types';
import {
    RankingItem,
    RankingItemAvatar,
    RankingItemInfo, RankingItemName,
    RankingItemRanking, RankingItemScore, RankingItemScoreItem,
    RankingList,
    RankingLoading,
    RankingTitle
} from "../styles";

const RankingInfo = ({ loggedIn, title, snapshots, loading, error }) => {
    return (
        <>
            <RankingTitle>{title}</RankingTitle>
            <RankingList>
                {
                    loggedIn && loggedIn !== "loading" ? (
                        <>
                            {
                                snapshots && snapshots.length > 0 && error !== 'undefined' ?
                                    snapshots.map((v, idx) => (
                                        <RankingItem key={v.key}>
                                            <RankingItemInfo>
                                                <RankingItemRanking medal={idx < 3 ? idx + 1 : 4}>
                                                    <RankingItemAvatar
                                                        image={v.val().avatar}
                                                        medal={idx < 3 ? idx + 1 : 4}
                                                    />
                                                </RankingItemRanking>
                                                <RankingItemName>{v.val().name}</RankingItemName>
                                            </RankingItemInfo>
                                            <RankingItemScore>
                                                <RankingItemScoreItem>{v.val().secs} seconds</RankingItemScoreItem>
                                                <RankingItemScoreItem>{v.val().moves} moves</RankingItemScoreItem>
                                            </RankingItemScore>
                                        </RankingItem>
                                    ))
                                    :
                                    <RankingLoading>
                                        {
                                            loading ? 'loading...' : 'no data'
                                        }
                                    </RankingLoading>
                            }
                        </>
                    ) : <RankingLoading>no data</RankingLoading>
                }
            </RankingList>
        </>
    );
};

RankingInfo.propsTypes = {
    title: PropTypes.string
};

export default RankingInfo;
