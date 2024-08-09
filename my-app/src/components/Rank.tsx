import React from 'react';
import styled from 'styled-components';



const Rank: React.FC = () => {
    return (
        <RankContainer>
            <RankItem>{`<`}</RankItem>
            <RankItem>Priest</RankItem>
            <RankItem>{`>`}</RankItem>
        </RankContainer>
    );
};

export default Rank;

const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankItem = styled.div`
  width: 60px;
  height: 60px;
  background-color: #333;
  border: 2px solid #00ff00;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  color: #fff;
  font-size: 24px;
`;