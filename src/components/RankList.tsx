import React, {useEffect, useRef} from 'react';

import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import {useStore} from "../store/store";
import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SiperButtonPrev";
import {useRankDisplayStore} from "../store/rankDisplayStore";

const RankList: React.FC = () => {
    const {currentRank} = useStore();
    const swiperRef = useRef<any>(null); // Создаем реф для доступа к Swiper

    const {currentRankToDisplay, ranks} = useRankDisplayStore();
    const rankName = ranks[currentRank].name

    return (
        <RankContainer>
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
                centeredSlides={true}
                modules={[Navigation]}
                initialSlide={currentRankToDisplay}
                ref={swiperRef}
            >
                {ranks.map((rank) => (
                    <SwiperSlide key={rank.name}>
                        <RankItem currentRank={currentRankToDisplay} isActive={rank.name === rankName}>
                            <img src={rank.image} alt=""/>
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

const RankItem = styled.div<{ currentRank: number, isActive: boolean }>`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 8px;
  transition: background 0.3s, box-shadow 0.3s;
  cursor: pointer;
  position: relative;
  filter: ${props => props.isActive ? 'none' : 'brightness(0.5) grayscale(0.9)'};
  width: 100%;



  & img {
    width: 100%;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    background: rgba(105, 255, 147, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props => props.isActive ? 1 : 0};
    filter: blur(10px);
    transition: opacity 0.3s;
    z-index: -1;
  }
  
  


`;


export default RankList;

