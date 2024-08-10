import React, {useEffect} from 'react';
import { useSwiper } from 'swiper/react';
import styled from "styled-components";
import leftArrow from "../assets/images/arrow_left.svg";
import {useRankDisplayStore} from "../store/rankDisplayStore";
import {useStore} from "../store/store";

const SwiperButtonPrev: React.FC = () => {
    const swiper = useSwiper();
    const {setSwiperInstance} = useStore()



    useEffect(() => {
        setSwiperInstance(swiper)
    }, [setSwiperInstance])

    const { currentRankToDisplay, currentLevelToDisplay,ranks, setCurrentLevelToDisplay, setCurrentRankToDisplay } = useRankDisplayStore();


    const handlerGoPrev = () => {
        const rank = ranks[currentRankToDisplay];

        const firstRankIndex = 0;
        const firstLevelIndex = 1;

        if (currentRankToDisplay === firstRankIndex && currentLevelToDisplay === firstLevelIndex) {
            console.log('усл 1 ')
            // Достигнут первый ранг и первый уровень, ничего не делаем
            return;
        } else if (currentLevelToDisplay > firstLevelIndex) {
            setCurrentLevelToDisplay(currentLevelToDisplay - 1 )
        } else {
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