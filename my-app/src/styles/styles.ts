import {css, styled} from 'styled-components';
import bgFigure from '../assets/images/bg-figure.png';

export const colors = {
    backgroundBlack: '#000000',
    background: '#050F11',
    primaryText: '#FFFFFF',
    white: '#FFFFFF',
    gray: '#888888',
    lightGray: '#F2F2F2',
    lightBackground: '#F0F0F0',
    lightYellow: '#FBF0C2',
    yellow: '#FFC800',
    lightBlue: '#D1E7FC',
    lightGreen: '#455E4C',
    secondaryText: '#A7A7A7',
    activeText: '#69FF93',

    defaultProgressBar: '#1A9156',
    activeProgressBar: '#E3F9E3',
    bgSecondary: '#030809'
};

export const fonts = {
    primary: '"K2D", sans-serif',
    secondary: '"Archivo", sans-serif',
};

export const shadows = {
    light: '0px 2px 8px rgba(0, 0, 0, 0.1)',
};

export const mixins = {
    boxShadow: css`
      box-shadow: ${shadows.light};
    `,
};

export const AppContainer = styled.div`
  width: 375px;
  height: 805px;
  background-color: ${colors.background};
  background-image: url(${bgFigure});
  background-position: 49.7% 82%;
  background-repeat: no-repeat; 
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;


export const PrimaryButton = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  
`;

