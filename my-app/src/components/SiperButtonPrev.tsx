import  React  from 'react';
import { useSwiper } from 'swiper/react';
import styled from "styled-components";
import leftArrow from "../assets/images/arrow_left.svg";
import {useRankDisplayStore} from "../store/rankDisplayStore";

const SwiperButtonPrev: React.FC = () => {
    const swiper = useSwiper();
    const { currentRankToDisplay, currentLevelToDisplay,ranks, setCurrentLevelToDisplay, setCurrentRankToDisplay } = useRankDisplayStore();
    const handlerGoPrev = () => {
        const rank = ranks[currentRankToDisplay];

        const firstRankIndex = 0;
        const firstLevelIndex = 1;
        const lastLevelIndex = rank.levels.length;

        if (currentRankToDisplay === firstRankIndex && currentLevelToDisplay === firstLevelIndex) {
            console.log('усл 1 ')
            // Достигнут первый ранг и первый уровень, ничего не делаем
            return;
        } else if (currentLevelToDisplay > firstLevelIndex) {
            console.log('currentLevelToDisplay',currentLevelToDisplay)
            console.log('firstLevelIndex',firstLevelIndex)
            console.log('усл 2 ')
            // Уменьшаем уровень, если не достигли первого уровня
            setCurrentLevelToDisplay(currentLevelToDisplay - 1 )
        } else {
            console.log('усл 3 ')
            // Достигнут первый уровень, переходим к предыдущему рангу и устанавливаем уровень на последний уровень
            const prevRankIndex = currentRankToDisplay - 1;
            const lastLevelOfPrevRank = ranks[prevRankIndex].levels.length;
            setCurrentRankToDisplay(prevRankIndex)
            setCurrentLevelToDisplay(lastLevelOfPrevRank)

            swiper.slidePrev()
        }
    };

    return (
        <NavigationButtonPrev className="swiper-button-prev" onClick={handlerGoPrev}></NavigationButtonPrev>
    );
}

const NavigationButtonPrev = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  &.swiper-button-prev {
    left: 10px;
    background-image: url(${leftArrow});
    background-size: contain;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
  }
`;
export default SwiperButtonPrev