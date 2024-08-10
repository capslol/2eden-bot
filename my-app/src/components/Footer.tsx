import React from 'react';
import styled from 'styled-components';
import {fonts, colors, Container} from "../styles/styles";

import RankIcon from '../assets/images/footer/rank-icon.svg';
import leaderIcon from '../assets/images/footer/leader-icon.svg';
import FrensIcon from '../assets/images/footer/frens-icon.svg';
import TasksIcon from '../assets/images/footer/tasks-icon.svg';
import HomeIcon from '../assets/images/footer/home-icon.svg';

const Footer: React.FC = () => {
    return (

        <FooterContainer>
            <Icon src={HomeIcon}/>
            <Icon src={TasksIcon}/>
            <Icon src={RankIcon}/>
            <Icon src={leaderIcon}/>
            <Icon src={FrensIcon}/>
        </FooterContainer>


    );
};

const FooterContainer = styled.footer`
  height: 86.37px;
  background-color: ${colors.backgroundBlack};
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 10px 15px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const Icon = styled.img`
  margin-right: 20px;
`;

const BackText = styled.span`
  font-size: 14px;
  font-family: ${fonts.secondary};
  font-weight: 200;
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`;

const Title = styled.span`
  font-size: 14px;
`;

const Subtitle = styled.span`
  font-size: 9px;
  color: #949494;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
`;



export default Footer;
