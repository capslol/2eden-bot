import React, {useEffect, useLayoutEffect} from 'react';
import styled from 'styled-components';
import {useStore} from '../store/store';
import {colors} from "../styles/styles";
import {useRankDisplayStore} from "../store/rankDisplayStore";
import ButtonFigure from '../assets/images/buttonFigure.svg'
import CoinIconBlack from '../assets/images/coin-icon-black.svg'


const Stats: React.FC = () => {
    const {balance, currentRank, currentLevel, upgradeRank} = useStore();
    const {ranks, currentLevelToDisplay, currentRankToDisplay, upgradeLevelOrRank} = useRankDisplayStore();
    const rank = ranks[currentRankToDisplay];

    const isUpgradeActive = balance >= 2000 &&
        (currentRank < ranks.length - 1 || currentLevel < ranks[currentRank].levels.length);
    const handleClick = () => {
        upgradeRank()
        upgradeLevelOrRank()
    };
    return (
        <StatsContainer>
            <StatItem>
                <span>Impact force (per click):</span>
                <span>{rank.levels[currentLevelToDisplay - 1].impactForce}</span>
            </StatItem>
            <StatItem>
                <span>Max energy:</span>
                <span>{rank.levels[currentLevelToDisplay - 1].maxEnergy}</span>
            </StatItem>
            <StatItem>
                <span>Recovery (per second):</span>
                <span>{rank.levels[currentLevelToDisplay - 1].recovery}</span>
            </StatItem>
            <UpgradeButton
                isActive={isUpgradeActive}
                onClick={isUpgradeActive ? handleClick : undefined}
            >
                <ButtonPriceWrapper>
                    <img src={CoinIconBlack} alt="Coin Icon"/>
                    <ButtonPrice>2000</ButtonPrice>
                </ButtonPriceWrapper>

                <Icon src={ButtonFigure} alt=""/>

                <ButtonTitle>UPGRADE</ButtonTitle>
            </UpgradeButton>
        </StatsContainer>
    );
};


const StatsContainer = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #25362E;
  background-color: ${colors.bgSecondary};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

const StatItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${colors.secondaryText};
`;

const ButtonPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;
const ButtonPrice = styled.div`
  margin-left: 10px;
`;
const ButtonTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Icon = styled.img`
  position: absolute;
  left: 37%;
`;

const UpgradeButton = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  background-color: ${props => props.isActive ? '#fff' : '#d3d3d3'};
  color: ${props => props.isActive ? '#000' : '#666'};
  border: none;
  border-radius: 8px;
  cursor: ${props => props.isActive ? 'pointer' : 'not-allowed'};
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export default Stats;
