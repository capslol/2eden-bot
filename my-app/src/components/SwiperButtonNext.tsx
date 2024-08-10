import React from 'react';
import {useSwiper} from 'swiper/react';
import styled from "styled-components";
import rightArrow from "../assets/images/arrow_right.svg";
import {useRankDisplayStore} from "../store/rankDisplayStore";

const SwiperButtonNext: React.FC = () => {
    const swiper = useSwiper();

    const {currentRankToDisplay,currentLevelToDisplay,ranks,setCurrentLevelToDisplay, setCurrentRankToDisplay } = useRankDisplayStore();
    const handlerGoNext = () => {
        const rank = ranks[currentRankToDisplay];

        const lastRankIndex = ranks.length - 1;
        const lastLevelIndex = rank.levels.length;


        if (currentRankToDisplay === lastRankIndex && currentLevelToDisplay === lastLevelIndex) {
            console.log('усл 1 ')
            // Достигнут последний ранг и последний уровень, ничего не делаем
            return
        } else if (currentLevelToDisplay < lastLevelIndex) {
            console.log('усл 2 ')
            // Увеличиваем уровень, если не достигли последнего уровня
            setCurrentLevelToDisplay(currentLevelToDisplay + 1)
        } else {
            console.log('усл 3 ')
            // Достигнут последний уровень, переходим к следующему рангу и сбрасываем уровень на 0
            setCurrentRankToDisplay(currentRankToDisplay + 1)
            setCurrentLevelToDisplay(1)
            swiper.slideNext()

        }

    };
    return (
        <NavigationButtonNext className="swiper-button-next" onClick={handlerGoNext}></NavigationButtonNext>
    );
}

const NavigationButtonNext = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  &.swiper-button-next {
    right: 10px;
    background-image: url(${rightArrow});
    background-size: contain;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
  }


`;
export default SwiperButtonNext