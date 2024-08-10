import React from 'react';
import styled from 'styled-components';
import {colors} from "../styles/styles";
import {useStore} from "../store/store";

interface ProgressBarProps {
    currentLevel: number; // Текущий уровень
    totalLevels: number;  // Всего уровней
}

const ProgressBar: React.FC = () => {
    const {ranks, currentRank, currentLevel, upgradeRank} = useStore();
    const totalLevels = ranks[currentRank].levels.length

    const segments = Array.from({length: totalLevels}, (_, index) => {
        let status: 'completed' | 'current' | 'pending';
        if (index < currentLevel - 1) {
            status = 'completed'; // Все уровни до текущего
        } else if (index === currentLevel - 1) {
            status = 'current'; // Текущий уровень
        } else {
            status = 'pending'; // Оставшиеся уровни
        }
        return (
            <ProgressBarSegment
                key={index}
                status={status}
                isFirst={index === 0}
                isLast={index === totalLevels - 1}
            />
        );
    });
    return (
        <ProgressBarContainer>
            {segments}
        </ProgressBarContainer>
    )

};
const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 11px;
  background-color: ${colors.bgSecondary};
  border: 1px solid ${colors.defaultProgressBar};
  border-radius: 10px;
  overflow: hidden;
  padding: 1px;
  box-sizing: border-box;
`;

const ProgressBarSegment = styled.div<{
    status: 'completed' | 'current' | 'pending';
    isFirst: boolean;
    isLast: boolean
}>`

  height: 6px;
  flex: 1;
  background-color: ${props => {
    switch (props.status) {
      case 'completed':
        return colors.defaultProgressBar; 
      case 'current':
        return colors.activeProgressBar;
      case 'pending':
        return colors.bgSecondary; 
      default:
        return colors.bgSecondary;
    }
  }};
  margin-right: 2px; // 
  border-radius: ${props => props.isFirst ? '10px 0 0 10px' : props.isLast ? '0 10px 10px 0' : '0'};
  transition: background-color 0.3s ease;

  &:last-child {
    margin-right: 0; 
  }
`;

export default ProgressBar;
