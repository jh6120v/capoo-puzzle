import styled from "styled-components";
import { ContainerInner } from "../../../../../styles/layout-style";

const GameInner = styled(ContainerInner)`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const PlayerList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 10px 50px 10px;
  padding: 10px;
  justify-content: space-between;
  border: 1px solid #fff;
  border-radius: 5px;
`;

const PlayerItem = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: nowrap;
  padding: 5px 0;
`;

const PlayerAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(${(props => props.avatar)});
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.ready ? 'green' : '#cccccc'};
`;

const PlayerName = styled.div`
  width: calc(100% - 60px);
  color: #fff;
  align-self: center;
`;

const PlayerGamePercent = styled.div`
  width: 30px;
  text-align: right;
  align-self: center;
`;

export {
    GameInner,
    PlayerList,
    PlayerItem,
    PlayerAvatar,
    PlayerName,
    PlayerGamePercent
}
