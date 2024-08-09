import React from 'react';
import styled from 'styled-components';
import { useStore } from '../store/store';
import {colors} from "../styles/styles"; // Путь к вашему Zustand store

// Стили для контейнера и характеристик
const StatsContainer = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #25362E;
  background-color: ${colors.bgSecondary};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

// Стили для каждой характеристики
const StatItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${colors.secondaryText};
`;

// Стили для кнопки
const UpgradeButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.isActive ? '#69FF93' : '#d3d3d3'};
  color: ${props => props.isActive ? '#000' : '#666'};
  border: none;
  border-radius: 8px;
  cursor: ${props => props.isActive ? 'pointer' : 'not-allowed'};
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props => props.isActive ? '#55e07f' : '#d3d3d3'};
  }
`;

const Stats: React.FC = () => {
    const { balance, currentRank, upgradeRank, ranks } = useStore();
    const rank = ranks[currentRank];
    const canUpgrade = balance >= 2000  && currentRank < ranks.length - 1;
    const isUpgradeActive = canUpgrade;

    return (
        <StatsContainer>
            <StatItem>
                <span>Impact force (per click):</span>
                <span>{rank.impactForce}</span>
            </StatItem>
            <StatItem>
                <span>Max energy:</span>
                <span>{rank.maxEnergy}</span>
            </StatItem>
            <StatItem>
                <span>Recovery (per second):</span>
                <span>{rank.recovery}</span>
            </StatItem>
            <UpgradeButton
                isActive={isUpgradeActive}
                onClick={isUpgradeActive ? upgradeRank : undefined}
            >
                Upgrade
            </UpgradeButton>
        </StatsContainer>
    );
};

export default Stats;
