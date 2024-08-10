import React from 'react';
import styled from 'styled-components';
import {fonts, colors, Container} from "../styles/styles";
import backIcon from '../assets/images/back-icon.svg';
import MenuIcon from '../assets/images/Menu.svg';

const Header: React.FC = () => {
    return (

        <HeaderContainer>
            <LeftSection>
                <Icon src={backIcon} alt="Left Icon"/>
                <BackText>Back</BackText>
            </LeftSection>
            <CenterSection>
                <Title>2eden</Title>
                <Subtitle>Bot</Subtitle>
            </CenterSection>
            <RightSection>
                <Image src={MenuIcon} alt="Right Image"/>
            </RightSection>
        </HeaderContainer>


    );
};

const HeaderContainer = styled.header`
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
  margin-right: 8px;
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

export default Header;
