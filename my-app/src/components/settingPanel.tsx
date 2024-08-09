

import React from 'react';
import styled from 'styled-components';

import coinIcon from '../assets/images/coin-icon.svg'
import walletIcon from '../assets/images/wallet-icon.svg'
import flagIcon from '../assets/images/flag-icon.svg'
import langIcon from '../assets/images/lang-icon.svg'
import faqIcon from '../assets/images/faq-icon.svg'
import {colors} from "../styles/styles";
import {useStore} from "../store/store";

// Стили для всего контейнера
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9px;
`;



const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Отступ между картинкой и числом */
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 10px; /* Отступ между изображениями */
`;

// Стили для изображений
const Image = styled.img`
  //width: 32px; 
  //height: 32px;
`;

// Стили для большого числа
const Balance = styled.span`
  color: ${colors.primaryText};
  font-size: 18px; /* Размер числа можно настроить */
  font-weight: bold;
`;

const SettingPanel: React.FC = () => {
    const { balance } = useStore();
    return (
        <Container>
            <IconsWrapper>
                <Image src={flagIcon} alt="" />
                <Image src={langIcon} alt="" />
            </IconsWrapper>

            <Center>
                <Image src={coinIcon} alt="" />
                <Balance>{balance}</Balance>
            </Center>

            <IconsWrapper>
                <Image src={faqIcon} alt="" />
                <Image src={walletIcon} alt="" />
            </IconsWrapper>
        </Container>
    );
};

export default SettingPanel;
