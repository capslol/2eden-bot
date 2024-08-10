import React from 'react';
import styled from 'styled-components';
import {colors} from "../styles/styles";
import {useStore} from "../store/store";
import {Rank} from "../assets/icons/icons";



// Прогресс-бар компонент
interface ProgressBarProps {
    currentLevel: number; // Текущий уровень
    totalLevels: number;  // Всего уровней
}

const ProgressBar: React.FC = () => {
    const {ranks, currentRank, currentLevel, upgradeRank} = useStore();
    const totalLevels = ranks[currentRank].levels.length

    const segments = Array.from({ length: totalLevels }, (_, index) => {

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
// Прогресс-бар контейнер
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

// Прогресс-бар с белой полоской
// const ProgressBarSegment = styled.div<{ isActive: boolean }>`
//   height: 100%;
//   flex: 1;
//   background-color: ${props => (props.isActive ? colors.activeGreen :'#030809')}; // Белый цвет для активной части, светло-серый для неактивной
//   margin-right: 2px; // Отступ между сегментами
//   transition: background-color 0.3s ease;
//
//   &:last-child {
//     margin-right: 0; // Убираем отступ у последнего элемента
//   }
// `;

  const ProgressBarSegment = styled.div<{ status: 'completed' | 'current' | 'pending'; isFirst: boolean; isLast: boolean }>`
  
  height: 6px;
  flex: 1;
  background-color: ${props => {
    switch (props.status) {
        case 'completed':
            return colors.defaultProgressBar; // Красный цвет для пройденных уровней
        case 'current':
            return colors.activeProgressBar; // Светлый цвет для текущего уровня
        case 'pending':
            return colors.bgSecondary; // Светло-серый цвет для неактивных уровней
        default:
            return colors.bgSecondary;
    }
}};
  margin-right: 2px; // Отступ между сегментами
  border-radius: ${props => props.isFirst ? '10px 0 0 10px' : props.isLast ? '0 10px 10px 0' : '0'};
  transition: background-color 0.3s ease;

  &:last-child {
    margin-right: 0; // Убираем отступ у последнего элемента
  }
`;

export default ProgressBar;
