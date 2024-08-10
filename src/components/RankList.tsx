import React from 'react';

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

    const {currentRankToDisplay, ranks} = useRankDisplayStore();
    const rankName = ranks[currentRank].name

    return (
        <RankContainer>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides={true}
                modules={[Navigation]}
                initialSlide={currentRankToDisplay}
            >
                {ranks.map((rank) => (
                    <SwiperSlide key={rank.name}>
                        <RankItem isActive={rank.name === rankName}>
                            <img src={rank.image}/>
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
    width: 100px;
    height: 100px;
    background: rgba(105, 255, 147, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    filter: blur(8px);
    opacity: ${props => props.isActive ? 1 : 0};
    transition: opacity 0.3s;
    z-index: -1;
  }

`;


export default RankList;

