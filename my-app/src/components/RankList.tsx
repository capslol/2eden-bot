import React from 'react';

import {Navigation} from 'swiper/modules'; // Импорт Navigation модуля
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import styled from 'styled-components';
import rankIcons, {Rank} from '../assets/icons/icons';
import {useStore} from "../store/store";

import leftArrow from '../assets/images/arrow_left.svg'
import rightArrow from '../assets/images/arrow_right.svg'





const RankList: React.FC = () => {
    const {ranks, currentRank, currentLevel, upgradeRank} = useStore();
    const rankName = ranks[currentRank].name as Rank;


    return (
        <RankContainer>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                centeredSlides={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }}
                modules={[Navigation]}

            >
                {ranks.map((rank) => (
                    <SwiperSlide key={rank.name}>
                        <RankItem isActive={rank.name === rankName}>
                            <img src={rankIcons[rank.name as Rank]}/>
                        </RankItem>
                    </SwiperSlide>
                ))}
                <NavigationButton className="swiper-button-next" />
                <NavigationButton className="swiper-button-prev" />

            </Swiper>
        </RankContainer>
    );
};

const RankContainer = styled.div`
  position: relative;
  width: 100%;
`;

const RankItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  background: ${props => props.isActive ? 'rgba(105, 255, 147, 0.3)' : 'transparent'};
  border-radius: 8px;
  box-shadow: ${props => props.isActive ? '0 0 10px rgba(105, 255, 147, 0.5)' : 'none'};
  transition: background 0.3s, box-shadow 0.3s;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
  }
`;


const NavigationButton = styled.button`
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

  &.swiper-button-prev {
    left: 10px;
    background-image: url(${leftArrow});
    background-size: contain;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
  }
`;

export default RankList;

