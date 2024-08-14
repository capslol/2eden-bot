import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';

import borderSVG from '../assets/images/avatar-frame.svg'
import avatar from '../assets/images/avatar.svg'
import {colors} from "../styles/styles";
import {useStore} from "../store/store";

const Avatar: React.FC = () => {
    const {userName, currentRank, ranks, increaseBalance} = useStore()
    const rank = ranks[currentRank]

    const [points, setPoints] = useState(29857775);
    const [energy, setEnergy] = useState(2532);
    const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
    const pointsToAdd = 12;
    const energyToReduce = 12;

    useEffect(() => {
        console.log('AVATAR')
    })

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (energy - energyToReduce < 0) {
            return;
        }
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPoints(points + pointsToAdd);
        setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
        setClicks([...clicks, { id: Date.now(), x, y }]);
        increaseBalance()
    };

    const handleAnimationEnd = (id: number) => {
        setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
    };
    return (
        <>
            <AvatarContainer>
                <AvatarFrame onClick={handleClick }>
                    <AvatarImage src={avatar} alt="Avatar"/>
                    <UserNameContainer>{userName}</UserNameContainer>
                    {clicks.map((click) => (
                        <Click
                            key={click.id}
                            style={{
                                top: `${click.y - 42}px`,
                                left: `${click.x - 28}px`,
                            }}
                            onAnimationEnd={() => handleAnimationEnd(click.id)}
                        >
                            12
                        </Click>
                    ))}
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

const float = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
`;

const Click = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primaryText};
  
  position: absolute;
  animation: ${float} 1s ease-out;
`;

export default Avatar;