import styled, { css } from 'styled-components';
import { ContainerInner } from '../../../styles/layout-style';
import medal from '../../../assets/images/medal.svg';

const medalColor = {
    1: 'gold',
    2: 'silver',
    3: 'coral',
    4: '#ccc'
};

const RankingInner = styled(ContainerInner)`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.rankingBg};
`;

const RankingTitle = styled.div`
  display: flex;
  width: 100%;
  color: ${(props) => props.theme.rankingTitleTextColor};
  border-bottom: 1px solid ${(props) => props.theme.rankingBorderColor};
  line-height: 1.5rem;
  text-transform: capitalize;
  cursor: pointer;
  flex-wrap: wrap;
  padding: 20px 15px 5px 15px;
  font-size: 1rem;
  font-weight: bold;
`;

const RankingList = styled.div`
  display: flex;
  width: 100%;
  max-height: 200px;
  padding: 5px 15px;
  line-height: 1.5rem;
  cursor: pointer;
  flex-wrap: wrap;
  color: ${(props) => props.theme.rankingListTextColor};
  border-bottom: 1px solid ${(props) => props.theme.rankingBorderColor};
  background-color: ${(props) => props.theme.rankingListBg};
  overflow-y: auto;
`;

const RankingItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 5px 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted ${(props) => props.theme.rankingItemBorderColor};
  &:last-child {
    border-bottom: none;
  }
`;

const RankingItemInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const RankingItemRanking = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  ${(props) => {
    if ([1, 2, 3].includes(props.medal)) {
      return css`
        mask-image: url(${medal});
        background-repeat: no-repeat;
        background-size: cover;
        background-color: ${(props) => medalColor[props.medal]};
      `;
    }
  }}
`;

const RankingItemAvatar = styled.div`
  position: absolute;
  left: 7px;
  top: 4px;
  width: 16px;
  height: 16px;
  overflow: hidden;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => {
    if (props.medal === 4) {
        return css`
          left: 3px;
          top: 3px;
          width: 24px;
          height: 24px;
        `;
    }    
  }}
`;

const RankingItemName = styled.div`
  font-size: 1.2rem;
  padding: 0 10px;
`;

const RankingItemScore = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const RankingItemScoreItem = styled.div`
  font-size: .8rem;
  line-height: 1rem;
  text-align: right;
`;

const RankingLoading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  padding: 5px 0;
`;

export {
    RankingInner,
    RankingTitle,
    RankingList,
    RankingItem,
    RankingItemInfo, RankingItemRanking, RankingItemAvatar, RankingItemName,
    RankingItemScore, RankingItemScoreItem,
    RankingLoading
};
