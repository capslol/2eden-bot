import React from 'react';
import styled from 'styled-components';

import borderSVG from '../assets/images/avatar-frame.svg'
import avatar from '../assets/images/avatar.svg'
import {colors} from "../styles/styles";
import {useStore} from "../store/store";

const Avatar: React.FC = () => {
    const {userName, currentRank, ranks, increaseBalance} = useStore()
    const rank = ranks[currentRank]
    return (
        <>
            <AvatarContainer>
                <AvatarFrame onClick={increaseBalance}>
                    <AvatarImage src={avatar} alt="Avatar"/>
                    <UserNameContainer>{userName}</UserNameContainer>
                </AvatarFrame>
                <RankContainer>Rank: «{rank.name}»</RankContainer>
                <RankImage src={rank.image}/>
            </AvatarContainer>
        </>
    );
};


const AvatarFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148.21px; 
  height: 127.73px; 
  background-image: url(${borderSVG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%; 
  position: relative;
  cursor: pointer;
`;
const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const AvatarImage = styled.img`
  width: 83.81px; /* Размер аватара внутри контейнера */
  height: 83.81px; /* Размер аватара внутри контейнера */
  border-radius: 50%; /* Делает изображение круглым */
`;

const RankImage = styled.img`
  width: 41.14px;
  height: 60px;
  margin-top: 6px;
`;

const UserNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -10px;
  width: 120px;
  height: 32px;
  background: ${colors.background};
  border: 1px solid ${colors.lightGreen};
  border-radius: 100px;
  color: ${colors.primaryText};
  font-weight: 700;
  font-size: 16px;
`;

const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.secondaryText};
  font-size: 10px;
  font-weight: lighter;
  margin-top: 15px;
`;

export default Avatar;