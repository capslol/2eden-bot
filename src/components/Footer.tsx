import React, {useEffect} from 'react';
import styled from 'styled-components';
import { colors} from "../styles/styles";

import RankIcon from '../assets/images/footer/rank-icon.svg';
import leaderIcon from '../assets/images/footer/leader-icon.svg';
import FrensIcon from '../assets/images/footer/frens-icon.svg';
import TasksIcon from '../assets/images/footer/tasks-icon.svg';
import HomeIcon from '../assets/images/footer/home-icon.svg';

const Footer: React.FC = () => {
    useEffect(() => {
        console.log('ControlPanel')
    })
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

const Icon = styled.img`
  margin-right: 20px;
`;


export default Footer;
