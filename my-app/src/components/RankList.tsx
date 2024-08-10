import React, {useEffect, useRef, useState} from 'react';

import {Navigation} from 'swiper/modules'; // Импорт Navigation модуля
import {Swiper, SwiperSlide, SwiperProps, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import styled from 'styled-components';
import rankIcons, {Rank} from '../assets/icons/icons';
import {useStore} from "../store/store";

import leftArrow from '../assets/images/arrow_left.svg'
import rightArrow from '../assets/images/arrow_right.svg'
import shine from '../assets/images/shine.svg'
import SwiperButton from "./SwiperButtonNext";
import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SiperButtonPrev";
import {useRankDisplayStore} from "../store/rankDisplayStore";




const RankList: React.FC = () => {
    const {currentRank, currentLevel} = useStore();

    const { currentRankToDisplay, ranks } = useRankDisplayStore();
    const rankName = ranks[currentRank].name as Rank;


    return (
        <RankContainer>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides={true}
                modules={[Navigation]}
                initialSlide={currentRankToDisplay}
            >
                {ranks.map((rank, index) => (
                    <SwiperSlide key={rank.name}>
                        <RankItem  isActive={rank.name === rankName}>
                            <img src={rankIcons[rank.name as Rank]}/>
                        </RankItem>
                    </SwiperSlide>
                ))}
                <SwiperButtonNext/>
                <SwiperButtonPrev/>
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
  border-radius: 8px;
  transition: background 0.3s, box-shadow 0.3s;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px; /* Размер свечения больше элемента */
    height: 100px; /* Размер свечения больше элемента */
    background: rgba(105, 255, 147, 0.5); /* Цвет свечения */
    border-radius: 50%; /* Круглая форма свечения */
    transform: translate(-50%, -50%); /* Центрирование псевдоэлемента */
    filter: blur(8px); /* Размытие свечения */
    opacity: ${props => props.isActive ? 1 : 0}; /* Видимость свечения в зависимости от активности */
    transition: opacity 0.3s; /* Плавное изменение */
    z-index: -1; /* Убедитесь, что свечение позади основного элемента */
  }

`;




export default RankList;

